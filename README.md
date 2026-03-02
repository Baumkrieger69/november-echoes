# November-Echoes

Eine historische Webseite über die **Reichspogromnacht vom 9. November 1938** – ein Wendepunkt in der Geschichte Nazi-Deutschlands.

🌐 **Live:** https://baumkrieger69.github.io/november-echoes/

## Projekt-Übersicht

Diese Website dokumentiert die Ereignisse der Reichspogromnacht mit einem zeitgenössischen, journalistischen Ansatz:

- **4 Hauptartikel** mit historischem Hintergrund und Ereignisablauf
- **Zeitung-Ästhetik**: Design im Stil historischer Zeitungen
- **Deutsche Inhalte**: Vollständig auf Deutsch verfasst
- **Responsive Design**: Funktioniert auf Desktop und Mobile

## Technologie-Stack

- **Framework**: [Vite](https://vitejs.dev/) + [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **UI Components**: [Shadcn/ui](https://ui.shadcn.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Deployment**: [GitHub Pages](https://pages.github.com/)

## Lokale Entwicklung

```bash
# 1. Repository clonen
git clone https://github.com/Baumkrieger69/november-echoes.git
cd november-echoes

# 2. Dependencies installieren
npm install

# 3. Dev-Server starten (http://localhost:8080)
npm run dev
```

## Build & Deployment

```bash
# Lokal bauen
npm run build

# Zu GitHub Pages deployen
npm run deploy
```

Das `gh-pages` Package deployed automatisch zu https://baumkrieger69.github.io/november-echoes/

## Projektstruktur

```
src/
├── pages/
│   ├── Index.tsx          # Startseite
│   ├── ArticlePage.tsx    # Artikel-Detailseite
│   └── NotFound.tsx       # 404-Seite
├── data/
│   └── articles.ts        # Artikel-Inhalte (4 Artikel)
├── components/
│   ├── ImageArticle.tsx   # Artikel-Karten
│   ├── NavLink.tsx        # Navigation
│   └── ui/                # Shadcn UI Components
├── App.tsx                # Hauptkomponente mit Router
├── App.css                # Globale Styles (Zeitungsdesign)
└── index.css              # Tailwind + Basis-Styles
```

## Artikel

Die Website dokumentiert 4 Hauptaspekte:

1. **Der Weg in den Terror** - Historischer Hintergrund
2. **Ein Schuss und der Terror bricht los** - Auslöser und Ablauf
3. **Die lange Nacht der Zerstörung** - Die Ereignisse
4. **Das Geschäft mit dem Raub** - Folgen und Konsequenzen

## Design-Features

- 🎨 **Zeitung-Stil**: Georgia Serif Fonts, klassisches Schwarz-Weiß-Design
- 🎬 **Animationen**: Fade-up Entry, Flicker-Effekte, Grayscale-Hover
- 📱 **Responsive**: Optimiert für alle Bildschirmgrößen
- ♿ **Barrierearm**: Gute Kontraste, Print-freundlich

## Lizenz

Dieses Projekt ist Public. Inhalte dienen zu Bildungszwecken.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/REPLACE_WITH_PROJECT_ID) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
