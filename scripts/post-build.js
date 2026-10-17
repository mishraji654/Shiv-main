const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const standaloneDir = path.join(root, '.next', 'standalone');

if (fs.existsSync(standaloneDir)) {
  const staticSrc = path.join(root, '.next', 'static');
  const staticDest = path.join(standaloneDir, '.next', 'static');
  const publicSrc = path.join(root, 'public');
  const publicDest = path.join(standaloneDir, 'public');

  if (fs.existsSync(staticSrc)) {
    fs.mkdirSync(path.dirname(staticDest), { recursive: true });
    fs.cpSync(staticSrc, staticDest, { recursive: true, force: true });
    console.log('Successfully copied .next/static to .next/standalone/.next/static');
  }

  if (fs.existsSync(publicSrc)) {
    fs.mkdirSync(publicDest, { recursive: true });
    fs.cpSync(publicSrc, publicDest, { recursive: true, force: true });
    console.log('Successfully copied public to .next/standalone/public');
  }
}
