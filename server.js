'use strict';
// Static server for local preview of the Pacta website. Zero dependencies.
//   npm start   →  http://localhost:3240
// Production is any static host (GitHub Pages serves this repo as-is).
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const ROOT = __dirname;
// Supporting documents (generated PDFs) are served at /documents/.
const DOCS_ROOT = process.env.DOCUMENTS_DIR || path.join(__dirname, 'documents');
const PORT = Number(process.env.SITE_PORT || 3240);

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.json': 'application/json; charset=utf-8',
  '.pdf': 'application/pdf',
};

const server = http.createServer((req, res) => {
  let urlPath = decodeURIComponent(new URL(req.url, `http://${req.headers.host}`).pathname);
  if (urlPath.endsWith('/')) urlPath += 'index.html';
  let root = ROOT;
  if (urlPath.startsWith('/documents/')) {
    root = DOCS_ROOT;
    urlPath = urlPath.slice('/documents'.length);
  }
  const file = path.normalize(path.join(root, urlPath));
  if (!file.startsWith(root)) { res.writeHead(403).end('Forbidden'); return; }
  fs.readFile(file, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('404 — not found');
      return;
    }
    res.writeHead(200, { 'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream' });
    res.end(data);
  });
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is in use. Try: SITE_PORT=3241 npm start`);
    process.exit(1);
  }
  throw err;
});

server.listen(PORT, () => {
  console.log(`Pacta website running at http://localhost:${PORT}`);
});
