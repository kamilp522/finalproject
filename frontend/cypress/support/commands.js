Cypress.Commands.add("createUser", (username, password) => {
  return cy
    .request("POST", "http://localhost:3001/api/users", {
      username: username,
      password: password,
      repeatedPassword: password,
    })
    .then((response) => response.body.id);
});

Cypress.Commands.add("login", ({ username, password }) => {
  cy.request("POST", "http://localhost:3001/api/login", {
    username,
    password,
  }).then(({ body }) => {
    localStorage.setItem("loggedMidtraderUser", JSON.stringify(body));
  });
  cy.visit("http://localhost:3000");
});

Cypress.Commands.add("checkIfNotLoggedNavIsNotVisible", () => {
  cy.get("a[aria-label='home']").should("not.be.visible");
  cy.get("a[aria-label='indicators']").should("not.be.visible");
  cy.get("a[aria-label='login']").should("not.be.visible");
});

Cypress.Commands.add("checkIfNotLoggedNavIsVisible", () => {
  cy.get("a[aria-label='home']").should("be.visible");
  cy.get("a[aria-label='indicators']").should("be.visible");
  cy.get("a[aria-label='login']").should("be.visible");
});

Cypress.Commands.add("checkIfLoggedNavIsNotVisible", () => {
  cy.get("a[aria-label='home']").should("not.be.visible");
  cy.get("a[aria-label='indicators']").should("not.be.visible");
  cy.get("a[aria-label='quote']").should("not.be.visible");
  cy.get("a[aria-label='logout']").should("not.be.visible");
  cy.get("a[aria-label='pairs trades']").should("not.be.visible");
  cy.get("a[aria-label='ideas for trades']").should("not.be.visible");
});

Cypress.Commands.add("checkIfLoggedNavIsVisible", () => {
  cy.get("a[aria-label='home']").should("be.visible");
  cy.get("a[aria-label='indicators']").should("be.visible");
  cy.get("a[aria-label='quote']").should("be.visible");
  cy.get("a[aria-label='logout']").should("be.visible");
  cy.get("a[aria-label='pairs trades']").should("be.visible");
  cy.get("a[aria-label='ideas for trades']").should("be.visible");
});

Cypress.Commands.add("checkIfPairsTradesNavIsVisible", () => {
  cy.get("a[aria-label='about pairs trades']").should("be.visible");
  cy.get("a[aria-label='ratio chart']").should("be.visible");
  cy.get("a[aria-label='pairs trade calculator']").should("be.visible");
});

Cypress.Commands.add("checkIfPairsTradesNavIsNotVisible", () => {
  cy.get("a[aria-label='about pairs trades']").should("not.be.visible");
  cy.get("a[aria-label='ratio chart']").should("not.be.visible");
  cy.get("a[aria-label='pairs trade calculator']").should("not.be.visible");
});

Cypress.Commands.add("checkIfIdeasForTradesNavIsVisible", () => {
  cy.get("a[aria-label='write down your ideas']").should("be.visible");
  cy.get("a[aria-label='your ideas']").should("be.visible");
});

Cypress.Commands.add("checkIfIdeasForTradesNavIsNotVisible", () => {
  cy.get("a[aria-label='write down your ideas']").should("not.be.visible");
  cy.get("a[aria-label='your ideas']").should("not.be.visible");
});

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
