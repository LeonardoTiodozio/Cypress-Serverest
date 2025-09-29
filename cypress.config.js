const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://front.serverest.dev/login', // ou sua instância local do ServeRest
    setupNodeEvents(on, config) {
      // registra o writer do allure
      allureWriter(on, config);
      return config;
    },
    supportFile: 'cypress/support/e2e.js',
    specPattern: 'cypress/e2e/**/*.spec.js',
    experimentalMemoryLeak: false,
  },
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'spec, @shelex/allure-mocha/reporter',
  }
});
