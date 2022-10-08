#!/usr/bin/env node
const fs    = require('fs').promises;
const path  = require('node:path');
const sharp = require('sharp');
const toIco = require('to-ico');


// constants
const root_path   = path.join(__dirname, '..');
const heart_svg   = path.join(root_path, 'assets', 'images', 'arrow-through-heart.svg');
const favicon_ico = path.join(root_path, 'public', 'favicon.ico')
const logo192_png = path.join(root_path, 'public', 'logo192.png');
const logo512_png = path.join(root_path, 'public', 'logo512.png');

async function main() {
  // read heart
  const heart = await sharp(heart_svg);

  // generate favicon
  const logo64_png = await heart.clone().resize(64).png().toBuffer();
  const logo64_ico = await toIco(logo64_png);
  await fs.writeFile(favicon_ico, logo64_ico);


  // generate logo*.png
  await heart.clone().resize(192).png().toFile(logo192_png);
  await heart.clone().resize(512).png().toFile(logo512_png);
}

main();
