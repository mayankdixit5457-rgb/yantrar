import fg from "fast-glob";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.join(__dirname, "..");

const files = await fg(
  [
    "**/*.{js,jsx,ts,tsx,json}",
    "!node_modules/**",
    "!.next/**",
    "!public/**",
    "!package-lock.json"
  ],
  {
    cwd: ROOT,
    absolute: true,
  }
);

let updated = 0;

for (const file of files) {
  let content = await fs.readFile(file, "utf8");

    const newContent = content
    .replace(/\.webp\b/gi, ".webp")
    .replace(/\.webp\b/gi, ".webp")
    .replace(/\.webp\b/gi, ".webp");




  if (newContent !== content) {
    await fs.writeFile(file, newContent);
    updated++;
    console.log("Updated:", path.relative(ROOT, file));
  }
}

console.log(`\nDone. Updated ${updated} files.`);