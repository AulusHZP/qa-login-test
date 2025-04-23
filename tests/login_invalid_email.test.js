const { test, expect } = require('@playwright/test');

test('Cenário: Tentativa de login com e-mail inválido', async ({ page }) => {
  // Dado que o usuário está na página de login do site Automation Practice
  await page.goto('http://www.automationpractice.pl/index.php?controller=authentication&back=my-account');

  // Quando o usuário insere um e-mail inválido e uma senha qualquer, e clica em "Sign in"
  await page.fill('#email', 'email_invalido@example.com');
  await page.fill('#passwd', '12345');
  await page.click('#SubmitLogin');

  // Então o sistema deve exibir uma mensagem de erro "Authentication failed."
  await page.waitForSelector('.alert-danger', { state: 'visible', timeout: 5000 });

  const alerts = await page.locator('.alert-danger');
  const count = await alerts.count();

  let errorMessage = '';
  for (let i = 0; i < count; i++) {
    const text = await alerts.nth(i).innerText();
    console.log(`ALERTA ${i + 1}:`, text);
    if (text && text.includes('Authentication failed.')) {
      errorMessage = text;
      break;
    }
  }

  expect(errorMessage).toContain('Authentication failed.');
});
