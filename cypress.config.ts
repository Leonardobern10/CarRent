import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Você pode configurar plugins aqui
    },
    baseUrl: "http://localhost:5173", // ou onde sua app estiver rodando
    specPattern: "cypress/e2e/**/*.cy.ts",
  },
});
