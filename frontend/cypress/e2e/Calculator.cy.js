describe("Ratio Chart", function () {
  let user_id;

  beforeEach(function () {
    cy.createUser("John", "1234qwer").then((res) => (user_id = res));
    cy.login({ username: "John", password: "1234qwer" });
  });

  afterEach(function () {
    cy.request("DELETE", `http://localhost:3001/api/users/${user_id}`);
  });

  it("can calculate capital requirerments", function () {
    cy.intercept({
      method: "POST",
      url: "/api/calculator",
    }).as("calculator-data");
    cy.get("button[aria-label='menu']").click();
    cy.get("a[aria-label='pairs trades']").click();
    cy.get("a[aria-label='calculator']").click();
    cy.checkIfPairsTradesNavIsNotVisible();
    cy.checkIfLoggedNavIsNotVisible();
    cy.contains("Pairs Trade Calculator");
    cy.contains("calculate");
    cy.get("#calculator-capital").type("10000");
    cy.get("#calculator-long-symbol").type("AAPL");
    cy.get("#calculator-short-symbol").type("GOOG");
    cy.get("#calculator-index-symbol").type("GSPC");
    cy.get("#calculator-button").click();
    cy.wait("@calculator-data")
      .its("response.statusCode")
      .should("be.oneOf", [200, 304]);
    cy.contains("AAPL / GOOG GSPC");
    cy.contains("Symbol");
    cy.contains("Price");
    cy.contains("Shares");
    cy.contains("Ratio:");
    cy.contains("Total:");
  });
});
