const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // npm i cypress -D
  // npx cypress run --record --key c29a1720-0893-4d5c-af4d-a33847864e17
  // npx cypress open
  //Component and E2e both implimented
  projectId: "2y2mj1",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3000",
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
