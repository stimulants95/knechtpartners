const { EmailClient } = require('@azure/communication-email');

const POLLER_OPTIONS = { abortSignal: undefined, updateIntervalInMs: 2000 };

module.exports = async function (context, req) {
  const data = req.body;

  const validation = validate(data);
  if (!validation.ok) {
    context.res = { status: 400, body: { error: validation.error } };
    return;
  }

  const connectionString = process.env.COMMUNICATION_SERVICES_CONNECTION_STRING;
  const senderAddress = process.env.SENDER_EMAIL_ADDRESS;
  const recipientAddress = process.env.RECIPIENT_EMAIL_ADDRESS;

  if (!connectionString || !senderAddress || !recipientAddress) {
    context.log.error('Missing required environment variables.');
    context.res = {
      status: 500,
      body: { error: 'E-postservern är inte konfigurerad. Försök igen senare.' },
    };
    return;
  }

  const client = new EmailClient(connectionString);

  const adminMessage = {
    senderAddress,
    recipients: {
      to: [{ address: recipientAddress, displayName: 'Josef Knecht' }],
      replyTo: [{ address: data.contactEmail, displayName: data.contactName }],
    },
    content: {
      subject: `Anmälan: ${data.training.name} — ${data.companyName}`,
      plainText: buildAdminPlainText(data),
      html: buildAdminHtml(data),
    },
  };

  const confirmationMessage = {
    senderAddress,
    recipients: {
      to: [{ address: data.contactEmail, displayName: data.contactName }],
    },
    content: {
      subject: `Bekräftelse: anmälan till ${data.training.name}`,
      plainText: buildConfirmationPlainText(data),
      html: buildConfirmationHtml(data),
    },
  };

  try {
    const adminPoller = await client.beginSend(adminMessage, POLLER_OPTIONS);
    const confirmationPoller = await client.beginSend(confirmationMessage, POLLER_OPTIONS);
    await Promise.all([adminPoller.pollUntilDone(), confirmationPoller.pollUntilDone()]);
  } catch (err) {
    context.log.error('Failed to send registration email', err);
    context.res = {
      status: 502,
      body: { error: 'Kunde inte skicka bekräftelsen. Försök igen eller kontakta oss direkt.' },
    };
    return;
  }

  context.res = { status: 200, body: { ok: true } };
};

function validate(d) {
  if (!d || typeof d !== 'object') return { ok: false, error: 'Ogiltig data.' };

  const required = [
    ['companyName', 'Företagsnamn'],
    ['orgNumber', 'Organisationsnummer'],
    ['billingAddress', 'Faktureringsadress'],
    ['billingZip', 'Postnummer'],
    ['billingCity', 'Ort'],
    ['billingReference', 'Fakturareferens'],
    ['billingEmail', 'E-post för faktura'],
    ['contactName', 'Kontaktperson'],
    ['contactEmail', 'Kontaktpersonens e-post'],
  ];

  for (const [key, label] of required) {
    if (!d[key] || typeof d[key] !== 'string' || !d[key].trim()) {
      return { ok: false, error: `${label} saknas.` };
    }
  }

  if (!Array.isArray(d.participants) || d.participants.length === 0) {
    return { ok: false, error: 'Minst en deltagare måste anges.' };
  }

  for (let i = 0; i < d.participants.length; i++) {
    const p = d.participants[i];
    for (const k of ['firstName', 'lastName', 'email', 'phone']) {
      if (!p[k] || typeof p[k] !== 'string' || !p[k].trim()) {
        return { ok: false, error: `Deltagare ${i + 1}: fältet "${k}" saknas.` };
      }
    }
    if (!isEmail(p.email)) {
      return { ok: false, error: `Deltagare ${i + 1}: ogiltig e-post.` };
    }
  }

  if (!isEmail(d.contactEmail)) return { ok: false, error: 'Ogiltig e-post för kontaktperson.' };
  if (!isEmail(d.billingEmail)) return { ok: false, error: 'Ogiltig e-post för faktura.' };
  if (!d.termsAccepted) return { ok: false, error: 'Bokningsvillkoren måste godkännas.' };

  return { ok: true };
}

function isEmail(s) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

function escape(s) {
  if (s == null) return '';
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatSek(n) {
  return new Intl.NumberFormat('sv-SE').format(n) + ' kr';
}

function buildAdminHtml(d) {
  const participantRows = d.participants
    .map(
      (p, i) => `
      <tr>
        <td style="padding:6px 12px;border-bottom:1px solid #eee;">${i + 1}</td>
        <td style="padding:6px 12px;border-bottom:1px solid #eee;">${escape(p.firstName)} ${escape(p.lastName)}</td>
        <td style="padding:6px 12px;border-bottom:1px solid #eee;"><a href="mailto:${escape(p.email)}">${escape(p.email)}</a></td>
        <td style="padding:6px 12px;border-bottom:1px solid #eee;">${escape(p.phone)}</td>
      </tr>`,
    )
    .join('');

  return `
  <!doctype html>
  <html><body style="font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;color:#1a1a1a;max-width:640px;margin:0 auto;padding:24px;">
    <h2 style="margin:0 0 8px;">Ny anmälan: ${escape(d.training.name)}</h2>
    <p style="color:#666;margin:0 0 24px;">${escape(d.training.date)} · ${escape(d.training.time)}</p>

    <h3 style="margin:24px 0 8px;">Organisation</h3>
    <table style="border-collapse:collapse;width:100%;font-size:14px;">
      <tr><td style="padding:4px 0;color:#666;width:200px;">Företag</td><td>${escape(d.companyName)}</td></tr>
      <tr><td style="padding:4px 0;color:#666;">Org.nr</td><td>${escape(d.orgNumber)}</td></tr>
      <tr><td style="padding:4px 0;color:#666;">Faktureringsadress</td><td>${escape(d.billingAddress)}, ${escape(d.billingZip)} ${escape(d.billingCity)}</td></tr>
      <tr><td style="padding:4px 0;color:#666;">Fakturareferens</td><td>${escape(d.billingReference)}</td></tr>
      <tr><td style="padding:4px 0;color:#666;">E-post faktura</td><td>${escape(d.billingEmail)}</td></tr>
      ${d.purchaseOrder ? `<tr><td style="padding:4px 0;color:#666;">Inköpsorder</td><td>${escape(d.purchaseOrder)}</td></tr>` : ''}
    </table>

    <h3 style="margin:24px 0 8px;">Kontaktperson</h3>
    <table style="border-collapse:collapse;width:100%;font-size:14px;">
      <tr><td style="padding:4px 0;color:#666;width:200px;">Namn</td><td>${escape(d.contactName)}</td></tr>
      <tr><td style="padding:4px 0;color:#666;">E-post</td><td><a href="mailto:${escape(d.contactEmail)}">${escape(d.contactEmail)}</a></td></tr>
      ${d.contactPosition ? `<tr><td style="padding:4px 0;color:#666;">Befattning</td><td>${escape(d.contactPosition)}</td></tr>` : ''}
    </table>

    <h3 style="margin:24px 0 8px;">Deltagare (${d.participants.length} st)</h3>
    <table style="border-collapse:collapse;width:100%;font-size:14px;">
      <thead><tr style="background:#f5f5f5;text-align:left;"><th style="padding:6px 12px;">#</th><th style="padding:6px 12px;">Namn</th><th style="padding:6px 12px;">E-post</th><th style="padding:6px 12px;">Telefon</th></tr></thead>
      <tbody>${participantRows}</tbody>
    </table>

    ${d.notes ? `<h3 style="margin:24px 0 8px;">Övrig information</h3><p style="white-space:pre-wrap;">${escape(d.notes)}</p>` : ''}

    <h3 style="margin:24px 0 8px;">Sammanställning</h3>
    <p style="font-size:14px;margin:0;">${d.participants.length} × ${formatSek(d.training.pricePerParticipant)} = <strong>${formatSek(d.totals.exVat)} ex moms</strong> (${formatSek(d.totals.incVat)} inkl 25% moms)</p>
  </body></html>`;
}

function buildAdminPlainText(d) {
  const lines = [
    `Ny anmälan: ${d.training.name}`,
    `${d.training.date} · ${d.training.time}`,
    '',
    'ORGANISATION',
    `Företag: ${d.companyName}`,
    `Org.nr: ${d.orgNumber}`,
    `Faktureringsadress: ${d.billingAddress}, ${d.billingZip} ${d.billingCity}`,
    `Fakturareferens: ${d.billingReference}`,
    `E-post faktura: ${d.billingEmail}`,
  ];
  if (d.purchaseOrder) lines.push(`Inköpsorder: ${d.purchaseOrder}`);

  lines.push('', 'KONTAKTPERSON', `Namn: ${d.contactName}`, `E-post: ${d.contactEmail}`);
  if (d.contactPosition) lines.push(`Befattning: ${d.contactPosition}`);

  lines.push('', `DELTAGARE (${d.participants.length} st)`);
  d.participants.forEach((p, i) => {
    lines.push(`${i + 1}. ${p.firstName} ${p.lastName} — ${p.email} — ${p.phone}`);
  });

  if (d.notes) lines.push('', 'ÖVRIG INFORMATION', d.notes);

  lines.push(
    '',
    'SAMMANSTÄLLNING',
    `${d.participants.length} × ${formatSek(d.training.pricePerParticipant)} = ${formatSek(d.totals.exVat)} ex moms (${formatSek(d.totals.incVat)} inkl 25% moms)`,
  );

  return lines.join('\n');
}

function buildConfirmationHtml(d) {
  const participantList = d.participants
    .map((p) => `<li>${escape(p.firstName)} ${escape(p.lastName)} — ${escape(p.email)}</li>`)
    .join('');

  return `
  <!doctype html>
  <html><body style="font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;color:#1a1a1a;max-width:640px;margin:0 auto;padding:24px;line-height:1.55;">
    <h2 style="margin:0 0 8px;">Tack för din anmälan!</h2>
    <p style="color:#444;">Vi har tagit emot din anmälan till <strong>${escape(d.training.name)}</strong> den ${escape(d.training.date)} kl ${escape(d.training.time)}.</p>

    <h3 style="margin:24px 0 8px;">Anmälda deltagare</h3>
    <ul style="margin:0;padding-left:20px;">${participantList}</ul>

    <h3 style="margin:24px 0 8px;">Pris</h3>
    <p style="margin:0;">${d.participants.length} × ${formatSek(d.training.pricePerParticipant)} = <strong>${formatSek(d.totals.exVat)} ex moms</strong> (${formatSek(d.totals.incVat)} inkl 25% moms)</p>

    <h3 style="margin:24px 0 8px;">Praktisk information</h3>
    <p style="margin:0 0 8px;">Utbildningen genomförs live via <strong>Microsoft Teams</strong>. Möteslänk skickas till deltagarnas e-postadresser senast dagen innan utbildningen.</p>
    <p style="margin:0;">Faktura skickas i samma månad som utbildningen genomförs, 30 dagars betalningsvillkor.</p>

    <h3 style="margin:24px 0 8px;">Frågor?</h3>
    <p style="margin:0;">Kontakta Josef på <a href="mailto:josef.knecht@knecht-partners.se">josef.knecht@knecht-partners.se</a>.</p>

    <p style="margin-top:32px;color:#888;font-size:13px;">Med vänlig hälsning,<br/>Knecht &amp; Partners AB</p>
    <p style="color:#aaa;font-size:12px;margin-top:24px;">Det här mejlet skickas från en obevakad adress, svara inte på det.</p>
  </body></html>`;
}

function buildConfirmationPlainText(d) {
  const lines = [
    'Tack för din anmälan!',
    '',
    `Vi har tagit emot din anmälan till ${d.training.name} den ${d.training.date} kl ${d.training.time}.`,
    '',
    'ANMÄLDA DELTAGARE',
  ];
  d.participants.forEach((p) => lines.push(`- ${p.firstName} ${p.lastName} — ${p.email}`));
  lines.push(
    '',
    'PRIS',
    `${d.participants.length} × ${formatSek(d.training.pricePerParticipant)} = ${formatSek(d.totals.exVat)} ex moms (${formatSek(d.totals.incVat)} inkl 25% moms)`,
    '',
    'PRAKTISK INFORMATION',
    'Utbildningen genomförs live via Microsoft Teams. Möteslänk skickas till deltagarnas e-postadresser senast dagen innan utbildningen.',
    'Faktura skickas i samma månad som utbildningen genomförs, 30 dagars betalningsvillkor.',
    '',
    'Frågor? Kontakta Josef på josef.knecht@knecht-partners.se',
    '',
    'Med vänlig hälsning,',
    'Knecht & Partners AB',
  );
  return lines.join('\n');
}
