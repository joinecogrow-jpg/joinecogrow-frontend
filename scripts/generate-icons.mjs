import fs from "node:fs";
import sharp from "sharp";
const src = "public/logo.png";
if (!fs.existsSync(src)) { console.error("ERROR: public/logo.png not found"); process.exit(1); }
const sizes = [16,32,48,64,192,512];
await Promise.all(sizes.map(s => sharp(src).resize(s,s,{fit:"contain",background:{r:0,g:0,b:0,alpha:0}}).toFile(`public/icon-${s}.png`)));
await sharp("public/icon-16.png").toFile("public/favicon-16.png");
await sharp("public/icon-32.png").toFile("public/favicon-32.png");
console.log("✓ Icons generated in /public");
