# Pacta — website

Bilingual (EN/ES) website for **Pacta**, the trust layer of agentic commerce.
Static HTML/CSS/JS — no build step, no dependencies.

The marketplace app and protocol reference implementation live in
[Pacta-Protocol/pacta](https://github.com/Pacta-Protocol/pacta).

## Run locally

```bash
npm start   # → http://localhost:3240
```

(Or open `index.html` directly, or use any static file server.)

## Deploy

This repo is named `pacta-protocol.github.io`, so GitHub Pages publishes it
automatically at <https://pacta-protocol.github.io>. Any other static host
(Netlify, Vercel, Cloudflare Pages) works the same way — serve the repo root.

## Configuration

`assets/config.js` sets `window.PACTA_APP_URL`; every "Open the app / Abrir la
app" link rewrites itself to that URL on page load. Point it at the deployed
marketplace app.

## Supporting documents

`documents/` holds the public PDFs (explainer and pitch) served at
`/documents/`. They are generated from the brand HTML decks and committed so
GitHub Pages can serve them.

## License

[MIT](LICENSE)
