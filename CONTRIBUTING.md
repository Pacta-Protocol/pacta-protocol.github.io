# Contributing to the Pacta Protocol website

This repository is the public website and docs at **pactaprotocol.org**. It's a static
site with **zero dependencies**, served by GitHub Pages in production.

> First read the org-wide guide: **[Pacta-Protocol contributing guidelines](https://github.com/Pacta-Protocol/.github/blob/main/CONTRIBUTING.md)**
> for the ground rules, pull-request flow, sign-off (DCO), and Code of Conduct. This
> file adds only what's specific to the website.

## What lives here

- `index.html`, `privacy.html` — top-level pages.
- `docs/` — the public documentation (`index.html`, `faq.html`, `mcp.html`), served at
  `/docs/`.
- `assets/` — styles, images, fonts.
- `documents/` — generated PDFs, served at `/documents/`.
- `server.js` — a tiny zero-dependency static server for local preview only.

## Preview locally

```bash
npm start        # serves the site on http://localhost:3240
```

Node.js is the only requirement (the server uses `node:http`, no packages to install).

## Making a change

1. Branch off `main`.
2. Edit the relevant HTML/CSS/asset. There is no build step — what you see is what
   ships.
3. Check every page you touched in the browser, on desktop **and** mobile widths.
4. Keep links working — internal links are relative; the docs live under `/docs/`.
5. Open a pull request against `main` and fill in the template.

## Content notes

- Keep the messaging consistent with the protocol's framing: Pacta is **infrastructure**
  and the marketplace app is a **reference explorer**, not "the product."
- The docs should stay accurate to the protocol. If a change depends on protocol
  behaviour, verify it against the [Pacta.Protocol](https://github.com/Pacta-Protocol/Pacta.Protocol)
  repository.

## License

By contributing, you agree that your contributions are licensed under the
[MIT License](LICENSE) that covers this repository.
