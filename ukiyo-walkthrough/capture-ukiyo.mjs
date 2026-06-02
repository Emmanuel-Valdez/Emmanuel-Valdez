import { chromium } from "playwright";
import fs from "node:fs/promises";
import { fileURLToPath } from "node:url";

const baseUrl = "https://ukiyo.bsite.net";
const assetsDir = new URL("./assets/", import.meta.url);
const customerEmail = "demo.customer2@ukiyo.local";
const adminEmail = "demo.customer8@ukiyo.local";
const password = process.env.UKIYO_DEMO_PASSWORD;

if (!password) {
  throw new Error("Set UKIYO_DEMO_PASSWORD before running the capture script.");
}

async function shot(page, name) {
  await page.screenshot({ path: fileURLToPath(new URL(`${name}.png`, assetsDir)), fullPage: false });
}

async function fillFirst(page, selectors, value) {
  for (const selector of selectors) {
    const matches = page.locator(selector);
    const count = await matches.count();
    for (let index = 0; index < count; index += 1) {
      const locator = matches.nth(index);
      if (await locator.isVisible().catch(() => false)) {
        await locator.fill(value);
        return true;
      }
    }
  }
  return false;
}

async function clickFirst(page, selectors) {
  for (const selector of selectors) {
    const matches = page.locator(selector);
    const count = await matches.count();
    for (let index = 0; index < count; index += 1) {
      const locator = matches.nth(index);
      if (await locator.isVisible().catch(() => false)) {
        await locator.click();
        return true;
      }
    }
  }
  return false;
}

async function login(page, email) {
  await page.goto(`${baseUrl}/Identity/Account/Login`, { waitUntil: "networkidle" });
  await shot(page, email.includes("customer2") ? "01-login" : "06-admin-login");

  await fillFirst(page, ["input[type='email']", "input[name='Input.Email']", "input[name='Email']", "#Input_Email"], email);
  await fillFirst(page, ["input[type='password']", "input[name='Input.Password']", "input[name='Password']", "#Input_Password"], password);
  await clickFirst(page, ["button[type='submit']", "input[type='submit']", "text=Iniciar Sesión", "text=Log in"]);
  await page.waitForLoadState("networkidle").catch(() => {});
}

async function customerFlow(page) {
  await login(page, customerEmail);
  await page.goto(`${baseUrl}/`, { waitUntil: "networkidle" });
  await shot(page, "02-catalog");

  await page.goto(`${baseUrl}/es-AR/Customer/Home/Details?productId=3`, { waitUntil: "networkidle" });
  await shot(page, "03-product-details");

  await clickFirst(page, ["text=Agregar", "text=Añadir", "button:has-text('Carrito')", "input[type='submit']", "button[type='submit']"]);
  await page.waitForLoadState("networkidle").catch(() => {});
  await page.goto(`${baseUrl}/es-AR/Customer/Cart`, { waitUntil: "networkidle" });
  await shot(page, "04-cart");

  await clickFirst(page, ["text=Checkout", "text=Finalizar", "text=Proceder", "a:has-text('Continuar')", "button[type='submit']"]);
  await page.waitForLoadState("networkidle").catch(() => {});
  await shot(page, "05-checkout-or-success");
}

async function adminFlow(page) {
  await login(page, adminEmail);
  await page.goto(`${baseUrl}/es-AR/Admin/Order`, { waitUntil: "networkidle" });
  await shot(page, "07-admin-orders");
}

await fs.mkdir(assetsDir, { recursive: true });
const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
const page = await context.newPage();

try {
  await customerFlow(page);
  await context.clearCookies();
  await adminFlow(page);
} finally {
  await browser.close();
}
