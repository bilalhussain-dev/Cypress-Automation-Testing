const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    defaultCommandTimeout: 10000, // Increase timeout to 10 seconds (10000 ms)
  },
});
