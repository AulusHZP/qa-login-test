const { test, expect } = require('@playwright/test');

test('Login com credenciais válidas', async ({ page }) => {
  await page.goto('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account');  // Acessa a página de login

// Verificações iniciais
  await page.fill('#email', 'wirobe3438@cxnlab.com'); //email temporario usado para login
  await page.fill('#passwd', '12345'); //senha temporaria usada para login
  await page.click('#SubmitLogin'); //clica no botão de login

// Verificações finais
  await expect(page).toHaveURL(/controller=my-account/);
  await expect(page.locator('h1')).toHaveText('My account');
});