Cypress.Commands.add("checkIfNavLinksAreNotVisible", () => {
	cy.get("a[aria-label='home']").should("not.be.visible");
	cy.get("a[aria-label='indicators']").should("not.be.visible");
	cy.get("a[aria-label='login']").should("not.be.visible");
});

Cypress.Commands.add("checkIfNavLinksAreVisible", () => {
	cy.get("a[aria-label='home']").should("be.visible");
	cy.get("a[aria-label='indicators']").should("be.visible");
	cy.get("a[aria-label='login']").should("be.visible");
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
