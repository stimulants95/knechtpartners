# Azure Functions API

Backend för knecht-partners.se. Körs som "managed functions" via Azure Static Web Apps.

## Endpoints

- `POST /api/register-training` — tar emot anmälningar från `/utbildning/cowork` och skickar mail via Azure Communication Services Email.

## Setup i Azure-portalen

### 1. Lägg till en Azure-subdomän i ditt Email Communication Service

I `email-service-smarthrai` → **1-click add** på "Add a free Azure subdomain". Du får en avsändaradress i stil med `DoNotReply@<random>.azurecomm.net`.

### 2. Skapa en Communication Services-resurs (om du inte har en)

I Azure-portalen → **Create resource** → sök "Communication Services" → skapa i samma resursgrupp (`rg-admin-4143`).

### 3. Koppla emailservice till Communication Services

I din Communication Services-resurs → **Email** → **Domains** → **Connect domain** → välj din `email-service-smarthrai`-domän.

### 4. Hämta connection string

I Communication Services-resursen → **Keys** → kopiera "Connection string" (Primary key).

### 5. Sätt miljövariabler i Static Web App

I din Static Web App (`kind-tree-...`) → **Configuration** → **Application settings** → lägg till tre värden:

| Namn | Värde |
| --- | --- |
| `COMMUNICATION_SERVICES_CONNECTION_STRING` | (connection string från steg 4) |
| `SENDER_EMAIL_ADDRESS` | `DoNotReply@<din-subdomän>.azurecomm.net` |
| `RECIPIENT_EMAIL_ADDRESS` | `josef.knecht@knecht-partners.se` |

Klicka **Save**. Static Web Apps läser dessa direkt — ingen omstart behövs.

## Lokal utveckling (valfritt)

1. Installera Azure Functions Core Tools v4.
2. `cd api && npm install`
3. Kopiera `local.settings.json.example` till `local.settings.json` och fyll i värdena.
4. `func start` (kör på `localhost:7071`)
5. I roten: `npm run dev` (kör Next.js på `localhost:3000`). Sätt fetch-URL:n i `RegistrationForm.tsx` till absolut adress mot Functions-servern om du vill testa.

## Felsökning

- **"E-postservern är inte konfigurerad"** i frontend → någon av de tre env-variablerna saknas i SWA.
- **502 från API** → kolla loggarna i Static Web App → **Functions** → **Application Insights** för utgående email-fel (oftast: domänen är inte godkänd som avsändare i ACS).
- Email Communication Service kan ta några minuter på sig efter "Connect domain" innan det börjar fungera.
