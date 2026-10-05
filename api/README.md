# Azure Functions API

Backend för knecht-partners.se. Körs som "managed functions" via Azure Static Web Apps.

## Endpoints

- `POST /api/register-training` — tar emot anmälningar från `/utbildning/cowork` och skickar mail via Azure Communication Services Email.

## Setup i Azure-portalen

Mejl skickas via Communication Services-resursen `comm-service-knecht-partners` (resursgrupp `Knecht-Partners`) med en Azure-hanterad avsändardomän.

Avsändare: `donotreply@17898e99-08ce-450d-bd28-023b744f9c06.azurecomm.net` (inbyggd fallback i koden).

### Miljövariabler i Static Web App

I din Static Web App (`kind-tree-...`) → **Configuration** → **Application settings**:

| Namn | Krävs | Värde |
| --- | --- | --- |
| `COMMUNICATION_SERVICES_CONNECTION_STRING` | Ja | Connection string från `comm-service-knecht-partners` → **Keys**. Läses bara via `process.env`, skriv aldrig ut den. |
| `EMAIL_SENDER_ADDRESS` | Nej | Överstyr avsändaradressen ovan. |
| `RECIPIENT_EMAIL_ADDRESS` | Nej | Mottagare av anmälningar. Standard: `josef.knecht@knecht-partners.se`. |

Klicka **Save**. Static Web Apps läser dessa direkt — ingen omstart behövs. Den gamla variabeln `SENDER_EMAIL_ADDRESS` används inte längre och kan tas bort.

### Kvot

Den Azure-hanterade domänen tillåter 5 mejl/minut och 10 mejl/timme. Varje anmälan skickar två mejl (till mig + bekräftelse), alltså max 5 anmälningar per timme.

## Lokal utveckling (valfritt)

1. Installera Azure Functions Core Tools v4.
2. `cd api && npm install`
3. Kopiera `local.settings.json.example` till `local.settings.json` och fyll i värdena.
4. `func start` (kör på `localhost:7071`)
5. I roten: `npm run dev` (kör Next.js på `localhost:3000`). Sätt fetch-URL:n i `RegistrationForm.tsx` till absolut adress mot Functions-servern om du vill testa.

## Felsökning

- **500 från API** → `COMMUNICATION_SERVICES_CONNECTION_STRING` saknas i SWA. Loggas som `[register-training] ... saknas`.
- **502 från API** → kolla loggarna i Static Web App → **Functions** → **Application Insights** för utgående email-fel (oftast: domänen är inte kopplad till resursen, eller connection string hör till en raderad resurs).
- **429 / TooManyRequests** → kvoten (5/minut, 10/timme) är nådd.
- Email Communication Service kan ta några minuter på sig efter "Connect domain" innan det börjar fungera.
