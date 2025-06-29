# Actionize Architecture

## Project Overview
Actionize ist ein AI-gestütztes Tool zur Umwandlung von unstrukturierten Gedanken ("Brain Dumps") in konkrete, umsetzbare erste Schritte. Das Projekt nutzt moderne Web-Technologien und die OpenAI API zur intelligenten Textverarbeitung.

## Tech Stack
- **Frontend**: Next.js 15.3.4 mit App Router
- **Language**: TypeScript 5.8.3
- **Styling**: Tailwind CSS 4.1.11
- **AI Integration**: OpenAI API (GPT-4o)
- **Deployment**: Vercel

## Project Structure
```
actionize-app/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Hauptseite mit UI-Komponenten
│   ├── layout.tsx         # Root Layout
│   ├── globals.css        # Globale Styles
│   └── api/               # API Routes
│       └── actionize/     # AI-Processing Endpoint
│           └── route.ts   # POST /api/actionize
├── public/                # Statische Assets
├── .env.local            # Umgebungsvariablen (API Keys)
└── package.json          # Dependencies & Scripts
```

## Data Flow
1. **User Input**: Nutzer gibt unstrukturierte Gedanken in Textarea ein
2. **Frontend Processing**: 
   - Client Component verwaltet State (userInput, aiOutput, isLoading)
   - Validierung der Eingabe (nicht leer)
   - POST Request an `/api/actionize`
3. **Backend Processing**:
   - API Route empfängt User Input
   - OpenAI API Call mit strukturiertem Prompt
   - Formatierung der Antwort
4. **Response Display**: Strukturierte Aktionsliste wird im UI angezeigt

## Key Components

### Frontend (app/page.tsx)
- Client Component mit React Hooks
- State Management für User Input und AI Output
- Loading States und Error Handling
- Responsive Dark Theme UI

### API Route (app/api/actionize/route.ts)
- Server-side OpenAI Integration
- Sichere API Key Verwaltung via Environment Variables
- Strukturierter Prompt für konsistente Outputs
- Error Handling für API Failures

## Security Considerations
- API Keys nur server-seitig (nie im Client Code)
- Keine Datenspeicherung (Privacy by Design)
- Input Validation vor API Calls
- Rate Limiting für Production (TODO)

## Development Workflow
```bash
# Local Development
pnpm dev

# Build für Production
pnpm build

# Start Production Server
pnpm start
```

## Future Enhancements
- Erweiterte Prompt-Anpassungen
- Mehrsprachige Unterstützung
- Export-Funktionen für Aktionslisten
- Integration mit Task Management Tools