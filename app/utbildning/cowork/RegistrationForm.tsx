'use client';

import { FC, useMemo, useState } from 'react';

type Participant = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
};

type FormState = {
  companyName: string;
  orgNumber: string;
  billingAddress: string;
  billingZip: string;
  billingCity: string;
  billingReference: string;
  billingEmail: string;
  purchaseOrder: string;
  discountCode: string;
  contactName: string;
  contactEmail: string;
  contactPosition: string;
  participants: Participant[];
  notes: string;
  termsAccepted: boolean;
};

// Giltiga rabattkoder → rabattsats. Skiftlägesokänsligt (matchas mot versaler).
const DISCOUNT_CODES: Record<string, number> = {
  LON20: 0.2, // Nätverk för lönespecialister/konsulter
};

const emptyParticipant = (): Participant => ({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
});

const initialState: FormState = {
  companyName: '',
  orgNumber: '',
  billingAddress: '',
  billingZip: '',
  billingCity: '',
  billingReference: '',
  billingEmail: '',
  purchaseOrder: '',
  discountCode: '',
  contactName: '',
  contactEmail: '',
  contactPosition: '',
  participants: [emptyParticipant()],
  notes: '',
  termsAccepted: false,
};

type Status = 'idle' | 'submitting' | 'success' | 'error';

export const RegistrationForm: FC<{ pricePerParticipant: number }> = ({
  pricePerParticipant,
}) => {
  const [state, setState] = useState<FormState>(initialState);
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const totals = useMemo(() => {
    const count = state.participants.length;
    const gross = count * pricePerParticipant;
    const normalizedCode = state.discountCode.trim().toUpperCase();
    const discountRate = DISCOUNT_CODES[normalizedCode] ?? 0;
    const discountAmount = Math.round(gross * discountRate);
    const exVat = gross - discountAmount;
    const vat = Math.round(exVat * 0.25);
    return {
      count,
      gross,
      discountCode: discountRate > 0 ? normalizedCode : '',
      discountRate,
      discountAmount,
      exVat,
      vat,
      incVat: exVat + vat,
    };
  }, [state.participants.length, state.discountCode, pricePerParticipant]);

  const discountEntered = state.discountCode.trim().length > 0;
  const discountValid = totals.discountRate > 0;

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setState((s) => ({ ...s, [key]: value }));
  }

  function updateParticipant(
    index: number,
    key: keyof Participant,
    value: string,
  ) {
    setState((s) => ({
      ...s,
      participants: s.participants.map((p, i) =>
        i === index ? { ...p, [key]: value } : p,
      ),
    }));
  }

  function addParticipant() {
    setState((s) => ({ ...s, participants: [...s.participants, emptyParticipant()] }));
  }

  function removeParticipant(index: number) {
    setState((s) => ({
      ...s,
      participants: s.participants.length > 1
        ? s.participants.filter((_, i) => i !== index)
        : s.participants,
    }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage(null);

    try {
      const res = await fetch('/api/register-training', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          training: {
            name: 'Kom igång med Microsoft Cowork',
            date: '2026-06-25',
            time: '10:00–11:30',
            pricePerParticipant,
          },
          ...state,
          totals,
        }),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => '');
        throw new Error(text || `Något gick fel (${res.status}).`);
      }

      setStatus('success');
      setState(initialState);
      window.scrollTo({ top: document.getElementById('anmalan')?.offsetTop ?? 0, behavior: 'smooth' });
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error ? err.message : 'Det gick inte att skicka anmälan just nu.',
      );
    }
  }

  if (status === 'success') {
    return (
      <div className="p-10 rounded-2xl bg-accent-glow/5 border border-accent-glow/30">
        <h3 className="text-2xl font-serif text-white mb-3">Tack för din anmälan!</h3>
        <p className="text-white/70 mb-2">
          Vi ses torsdagen den 25 juni kl 10:00 — Teams-länken skickas till deltagarnas e-post senast dagen innan.
        </p>
        <p className="text-white/70 mb-4">
          En bekräftelse är på väg till kontaktpersonens e-postadress.
        </p>
        <p className="text-white/55 text-sm">
          Faktura skickas efter utförd utbildning, samma månad. Vid frågor — hör av dig till{' '}
          <a className="text-accent-glow hover:text-accent-glow-alt" href="mailto:josef.knecht@knecht-partners.se">
            josef.knecht@knecht-partners.se
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-10" noValidate>
      <Fieldset legend="Organisation">
        <Field label="Företagsnamn / organisation" required>
          <input
            type="text"
            required
            value={state.companyName}
            onChange={(e) => update('companyName', e.target.value)}
            className={inputClass}
          />
        </Field>
        <Field label="Organisationsnummer" hint="Endast siffror (frivilligt)">
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9\-]{10,13}"
            value={state.orgNumber}
            onChange={(e) => update('orgNumber', e.target.value)}
            className={inputClass}
          />
        </Field>
        <Field label="Faktureringsadress" required>
          <input
            type="text"
            required
            value={state.billingAddress}
            onChange={(e) => update('billingAddress', e.target.value)}
            className={inputClass}
          />
        </Field>
        <div className="grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-4">
          <Field label="Postnummer" required>
            <input
              type="text"
              required
              inputMode="numeric"
              value={state.billingZip}
              onChange={(e) => update('billingZip', e.target.value)}
              className={inputClass}
            />
          </Field>
          <Field label="Ort" required>
            <input
              type="text"
              required
              value={state.billingCity}
              onChange={(e) => update('billingCity', e.target.value)}
              className={inputClass}
            />
          </Field>
        </div>
        <Field label="Fakturareferens" required hint="Person eller kostnadsställe">
          <input
            type="text"
            required
            value={state.billingReference}
            onChange={(e) => update('billingReference', e.target.value)}
            className={inputClass}
          />
        </Field>
        <Field label="E-post för faktura" required>
          <input
            type="email"
            required
            value={state.billingEmail}
            onChange={(e) => update('billingEmail', e.target.value)}
            className={inputClass}
          />
        </Field>
        <Field label="Inköpsordernummer / referenskod" hint="Valfritt">
          <input
            type="text"
            value={state.purchaseOrder}
            onChange={(e) => update('purchaseOrder', e.target.value)}
            className={inputClass}
          />
        </Field>
      </Fieldset>

      <Fieldset legend="Kontaktperson">
        <Field label="För- och efternamn" required>
          <input
            type="text"
            required
            value={state.contactName}
            onChange={(e) => update('contactName', e.target.value)}
            className={inputClass}
          />
        </Field>
        <Field label="E-post" required hint="Bekräftelse skickas hit">
          <input
            type="email"
            required
            value={state.contactEmail}
            onChange={(e) => update('contactEmail', e.target.value)}
            className={inputClass}
          />
        </Field>
        <Field label="Befattning" hint="Valfritt">
          <input
            type="text"
            value={state.contactPosition}
            onChange={(e) => update('contactPosition', e.target.value)}
            className={inputClass}
          />
        </Field>
      </Fieldset>

      <Fieldset legend="Deltagare">
        <div className="space-y-6">
          {state.participants.map((p, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-white/80">
                  Deltagare {i + 1}
                </span>
                {state.participants.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeParticipant(i)}
                    className="text-xs text-white/40 hover:text-white/80 transition-colors"
                  >
                    Ta bort
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Förnamn" required>
                  <input
                    type="text"
                    required
                    value={p.firstName}
                    onChange={(e) => updateParticipant(i, 'firstName', e.target.value)}
                    className={inputClass}
                  />
                </Field>
                <Field label="Efternamn" required>
                  <input
                    type="text"
                    required
                    value={p.lastName}
                    onChange={(e) => updateParticipant(i, 'lastName', e.target.value)}
                    className={inputClass}
                  />
                </Field>
              </div>

              <Field label="E-post" required>
                <input
                  type="email"
                  required
                  value={p.email}
                  onChange={(e) => updateParticipant(i, 'email', e.target.value)}
                  className={inputClass}
                />
              </Field>

              <Field label="Mobil / telefonnummer" required>
                <input
                  type="tel"
                  required
                  value={p.phone}
                  onChange={(e) => updateParticipant(i, 'phone', e.target.value)}
                  className={inputClass}
                />
              </Field>
            </div>
          ))}

          <button
            type="button"
            onClick={addParticipant}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.04] border border-white/10 text-sm text-white/70 hover:text-white hover:border-accent-glow/40 transition-all"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
            </svg>
            Lägg till fler deltagare
          </button>
        </div>
      </Fieldset>

      <Fieldset legend="Övrig information">
        <Field label="Frågor eller annat jag bör veta" hint="Valfritt">
          <textarea
            rows={4}
            value={state.notes}
            onChange={(e) => update('notes', e.target.value)}
            className={`${inputClass} resize-y min-h-[112px]`}
          />
        </Field>
      </Fieldset>

      <div className="p-6 rounded-2xl bg-gradient-to-br from-white/[0.03] to-accent-glow/[0.04] border border-white/10 space-y-5">
        <Field label="Rabattkod" hint="Valfritt">
          <input
            type="text"
            value={state.discountCode}
            onChange={(e) => update('discountCode', e.target.value)}
            placeholder="Ange kod"
            className={`${inputClass} uppercase placeholder:normal-case`}
          />
          {discountEntered && (
            <p className={`mt-1.5 text-xs ${discountValid ? 'text-accent-glow' : 'text-white/40'}`}>
              {discountValid
                ? `${Math.round(totals.discountRate * 100)} % rabatt tillämpad.`
                : 'Ogiltig rabattkod.'}
            </p>
          )}
        </Field>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-1">
          <div>
            <div className="text-xs uppercase tracking-wider text-accent-glow mb-1">
              Sammanställning
            </div>
            <div className="text-white/70 text-sm">
              {totals.count} {totals.count === 1 ? 'deltagare' : 'deltagare'} ×{' '}
              {pricePerParticipant.toLocaleString('sv-SE')} kr
            </div>
            {discountValid && (
              <div className="text-accent-glow text-sm mt-0.5">
                Rabatt ({totals.discountCode}, −{Math.round(totals.discountRate * 100)} %): −
                {totals.discountAmount.toLocaleString('sv-SE')} kr
              </div>
            )}
          </div>
          <div className="text-right">
            {discountValid && (
              <div className="text-white/40 text-sm line-through">
                {totals.gross.toLocaleString('sv-SE')} kr
              </div>
            )}
            <div className="text-white text-2xl font-serif">
              {totals.exVat.toLocaleString('sv-SE')} kr
            </div>
            <div className="text-white/40 text-xs">
              ex moms · ({totals.incVat.toLocaleString('sv-SE')} kr inkl 25% moms)
            </div>
          </div>
        </div>
      </div>

      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          required
          checked={state.termsAccepted}
          onChange={(e) => update('termsAccepted', e.target.checked)}
          className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 accent-accent-glow flex-shrink-0"
        />
        <span className="text-sm text-white/60 leading-relaxed">
          Jag godkänner bokningsvillkoren och hanteringen av personuppgifter som beskrivs nedan.
        </span>
      </label>

      {status === 'error' && errorMessage && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-sm text-red-200">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-10 py-4 rounded-xl bg-accent-glow text-hero-dark text-base font-semibold hover:bg-accent-glow-alt transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(46,196,182,0.35)] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
      >
        {status === 'submitting' ? 'Skickar anmälan…' : 'Skicka anmälan'}
      </button>
    </form>
  );
};

const inputClass =
  'w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder:text-white/30 focus:outline-none focus:border-accent-glow/50 focus:bg-white/[0.06] transition-colors';

function Fieldset({ legend, children }: { legend: string; children: React.ReactNode }) {
  return (
    <fieldset className="space-y-4">
      <legend className="text-lg font-serif text-white mb-2">{legend}</legend>
      <div className="space-y-4">{children}</div>
    </fieldset>
  );
}

function Field({
  label,
  required,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="flex items-baseline justify-between mb-1.5">
        <span className="text-sm text-white/70">
          {label}
          {required && <span className="text-accent-glow ml-1">*</span>}
        </span>
        {hint && <span className="text-xs text-white/35">{hint}</span>}
      </div>
      {children}
    </label>
  );
}
