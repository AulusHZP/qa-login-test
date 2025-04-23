// playwright.config.js
// Para mais opções: https://playwright.dev/docs/test-configuration
const config = {
    timeout: 30000,                 // Timeout padrão de cada teste
    retries: 1,                     // Número de reexecuções em caso de falha
    testDir: './tests',             // Diretório dos testes
    outputDir: './test-results',    // Onde os relatórios e snapshots serão salvos
    reporter: [                     // Relatórios: lista no console + relatório HTML
      ['list'],
      ['html', { open: 'never' }]
    ],
    use: {
      headless: true,               // Executa em modo headless por padrão
      viewport: { width: 1280, height: 720 },
      actionTimeout: 10000,         // Timeout para ações como click/fill
      trace: 'on-first-retry'       // Grava traces na primeira falha para debugging
    },
    projects: [                     // Múltiplos navegadores
      { name: 'chromium', use: { browserName: 'chromium' } },
      { name: 'firefox',  use: { browserName: 'firefox' } },
      { name: 'webkit',   use: { browserName: 'webkit' } }
    ]
  };
  
  module.exports = config;