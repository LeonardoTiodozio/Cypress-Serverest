const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://front.serverest.dev/login', 
    setupNodeEvents(on, config) {
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
