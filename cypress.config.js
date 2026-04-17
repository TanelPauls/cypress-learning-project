require('dotenv').config()
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.env.password = process.env.CORRECT_PASSWORD
      config.env.email = process.env.EMAIL
      return config
    }
  }
});