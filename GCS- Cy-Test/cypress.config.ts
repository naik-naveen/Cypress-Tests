import { defineConfig } from 'cypress'

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  pageLoadTimeout: 100000,
  video: false,
  reporterOptions: {
    charts: true,
    reportPageTitle: 'GCS Test Report',
    embeddedScreenshots: true,
    inlineAssets: true, //Adds the asserts inline
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    'baseUrl': 'https://gcs.vidyavardhakasangha.com',
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config),
      require('cypress-mochawesome-reporter/plugin')(on)
    },
  },
})
