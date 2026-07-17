import sharp from "sharp";
import fg from "fast-glob";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, "..", "public");

console.log("🔍 Scanning:", PUBLIC_DIR);

const files = await fg(["**/*.jpg", "**/*.jpeg", "**/*.png"], {
  cwd: PUBLIC_DIR,
  absolute: true,
});

console.log(`Found ${files.length} images`);

for (const file of files) {
  const output = file.replace(/\.(jpg|jpeg|png)$/i, ".webp");

  if (fs.existsSync(output)) continue;

  await sharp(file)
    .rotate()
    .webp({ quality: 80 })
    .toFile(output);

  console.log("✔", path.relative(PUBLIC_DIR, output));
}

console.log("Done!");