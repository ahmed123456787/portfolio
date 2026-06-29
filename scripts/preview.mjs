import { chromium } from "playwright";

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
  colorScheme: "dark",
});
const page = await ctx.newPage();
await page.goto("http://localhost:3000/", { waitUntil: "networkidle", timeout: 60000 });
await page.waitForTimeout(3000);

await page.screenshot({ path: "preview-hero.jpg", type: "jpeg", quality: 86, fullPage: false, timeout: 60000 });
console.log("hero saved");

await page.evaluate(() => document.querySelector("#experience")?.scrollIntoView({ behavior: "instant", block: "start" }));
await page.waitForTimeout(2000);
await page.screenshot({ path: "preview-experience.jpg", type: "jpeg", quality: 86, fullPage: false, timeout: 60000 });
console.log("experience saved");

await browser.close();
console.log("done");
