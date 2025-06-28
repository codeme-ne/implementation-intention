# Product Requirements Document: Actionize (Prototyp)

## Product Overview

**Product Vision:** Ein Prototyp, der demonstriert, wie mentale Unordnung durch KI sofort in einen klaren, umsetzbaren Plan verwandelt wird, um den Kernnutzen der GTD-Methode erlebbar zu machen.

**Target User:** Jede Person, die sich von einer unstrukturierten Liste an Gedanken und Aufgaben überfordert fühlt. (z.B. "Overwhelmed Olivia").

**Business Objective:** Validierung der Kernhypothese: "Die KI-gestützte Umwandlung eines 'Brain Dumps' in konkrete erste Schritte schafft einen sofortigen 'Aha-Moment' und liefert genug Mehrwert, um das Konzept weiterzuverfolgen."

**Success Metrics:** Qualitatives Feedback von Testnutzern. Beobachten wir bei den Nutzern einen Moment der Erleichterung und Klarheit, wenn sie das Ergebnis sehen? Verstehen sie den Wert ohne weitere Erklärung?

## Feature Requirements (Das einzige Feature)

| Feature | Description | User Story | Priority | Acceptance Criteria | Dependencies |
|---------|-------------|-------------|----------|---------------------|--------------|
| **"Brain-Dump-zu-Action-Plan"-Konverter** | Ein Interface mit einem einzigen Textfeld und einem Button. Der Nutzer gibt seine Gedanken ein, klickt auf den Button und erhält eine umgewandelte, handlungsorientierte Liste. | Als gestresste Person möchte ich meine wirren Gedanken in eine Textbox eingeben und auf Knopfdruck eine klare Liste mit dem jeweils nächsten konkreten Schritt erhalten, um sofort zu wissen, was zu tun ist. | **Must** | **Was es tun muss:** <br> - Es gibt nur eine einzige Webseite/einen einzigen Screen. <br> - Der Screen enthält ein großes Textfeld (`<textarea>`) für die Eingabe. <br> - Es gibt einen einzigen Button mit der Aufschrift "Klarheit schaffen" (o.ä.). <br> - Nach Klick wird der Text an eine KI-API gesendet. <br> - Das Ergebnis (die Liste der Aktionen) wird als einfacher Text unterhalb des Buttons angezeigt. <br><br> **Was es explizit NICHT tut (um den Aufwand minimal zu halten):** <br> - **KEINE** Benutzerkonten oder Login. <br> - **KEIN** Speichern von Daten. Bei jedem Neuladen der Seite ist alles weg. <br> - **KEINE** Kontexte, Projekte, Deadlines oder Tags. <br> - **KEINE** Möglichkeit, Aufgaben abzuhaken oder zu bearbeiten. <br> - **KEINE** Offline-Funktionalität. | - API-Zugang zu einem LLM (z.B. OpenAI, Anthropic). |

## User Flow (Der einzige Flow)

1.  Der Nutzer öffnet die Webseite. Er sieht eine Überschrift, ein leeres Textfeld und einen Button.
2.  Der Nutzer tippt seine Gedanken und Aufgaben in das Textfeld. Beispiel: "Steuererklärung, Mama anrufen wegen Geburtstag, Reifen wechseln lassen".
3.  Der Nutzer klickt auf den "Klarheit schaffen"-Button.
4.  Ein Ladeindikator erscheint kurz.
5.  Unterhalb des Buttons erscheint die von der KI generierte, handlungsorientierte Liste. Beispiel:
    *   **NÄCHSTER SCHRITT:** Alle relevanten Steuerbelege für 2023 aus dem Ordner im Büro zusammensuchen.
    *   **NÄCHSTER SCHRITT:** Mama anrufen und fragen, was sie sich zum Geburtstag wünscht.
    *   **NÄCHSTER SCHRITT:** Werkstatt anrufen und einen Termin für den Reifenwechsel vereinbaren.

## Non-Functional Requirements (Minimalversion)

### Performance
- **Response Time:** Die Antwort der KI sollte idealerweise in unter 5 Sekunden erscheinen, um den "magischen" Effekt zu erhalten.

### Security
- **Data Protection:** Nicht anwendbar, da keine Daten gespeichert werden. Ein Hinweis auf der Seite ("Deine Eingaben werden nicht gespeichert") ist ausreichend.

### Compatibility
- **Browsers:** Sollte auf modernen Desktop-Browsern (Chrome, Firefox, Safari) funktionieren. Mobile Ansicht ist "nice to have", aber nicht erforderlich für den Prototyp.

## Technical Specifications (Minimalversion)

### Frontend
- **Technology Stack:** Einfachstes statisches HTML, CSS und JavaScript. Kein Framework notwendig.

### Backend
- **Technology Stack:** Keinen eigenen Backend-Server. Der API-Call zum LLM-Anbieter wird direkt aus dem JavaScript im Frontend getätigt.

### Infrastructure
- **Hosting:** Eine statische Hosting-Lösung wie GitHub Pages, Netlify oder Vercel.

## Release Planning

### Prototyp (v0.1)
- **Features:** Nur der oben beschriebene "Brain-Dump-zu-Action-Plan"-Konverter.
- **Timeline:** Implementierung in wenigen Stunden bis maximal 1-2 Tagen.
- **Success Criteria:** Können wir 5-10 Testnutzern den Prototyp zeigen und erhalten wir durchweg positives Feedback und sehen wir den "Aha-Effekt"?