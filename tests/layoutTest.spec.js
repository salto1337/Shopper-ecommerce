import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Latest Collection arrow' }).click();
  await page.locator('#collection').getByRole('link', { name: 'Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse Striped Flutter Sleeve Overlap Collar Peplum Hem Blouse $50 $' }).click();
  await page.getByRole('button', { name: 'S' }).click();
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'cart' }).click();
  await page.getByRole('link', { name: 'Kids' }).click();
  await page.locator('div:nth-child(5) > a').click();
  await page.locator('footer').getByRole('link', { name: 'logo shopper' }).click();
});