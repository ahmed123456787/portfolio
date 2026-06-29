import { chromium } from "playwright";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "projects");

const targets = [
  { slug: "waitless", url: "https://www.waitless.sarl/" },
  { slug: "thrivedoc", url: "https://www.thrivedoc.org/" },
  { slug: "f1-race-intelligence", url: "https://f1-race-intelligence.fly.dev/" },
  { slug: "construction", url: "https://construction-website-lac-three.vercel.app/" },
];

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1600, height: 1000 },
  deviceScaleFactor: 2,
  colorScheme: "dark",
});

for (const t of targets) {
  console.log(`→ ${t.slug}: ${t.url}`);
  const page = await ctx.newPage();
  try {
    await page.goto(t.url, { waitUntil: "networkidle", timeout: 45000 });
  } catch (e) {
    console.warn(`  load slow, falling back: ${e.message}`);
    try {
      await page.goto(t.url, { waitUntil: "domcontentloaded", timeout: 45000 });
    } catch (e2) {
      console.error(`  FAILED: ${e2.message}`);
      await page.close();
      continue;
    }
  }
  await page.waitForTimeout(3500);
  const out = path.join(outDir, `${t.slug}.jpg`);
  await page.screenshot({
    path: out,
    type: "jpeg",
    quality: 88,
    fullPage: false,
  });
  console.log(`  ✓ saved ${out}`);
  await page.close();
}

await browser.close();
console.log("done");
