describe("Ratio Chart", function () {
    let user_id;

    beforeEach(function () {
        cy.createUser("John", "1234qwer").then((res) => (user_id = res));
        cy.login({ username: "John", password: "1234qwer" });
    });

    afterEach(function () {
        cy.request("DELETE", `http://localhost:3001/api/users/${user_id}`);
    });

    it("can look up ratio", function () {
        cy.intercept({
            method: "POST",
            url: "/api/ratio",
        }).as("ratio-chart-data");
        cy.get("button[aria-label='menu']").click();
        cy.get("a[aria-label='pairs trades']").click();
        cy.get("a[aria-label='ratio chart']").click();
        cy.checkIfPairsTradesNavIsNotVisible();
        cy.checkIfLoggedNavIsNotVisible();
        cy.contains("Ratio Chart");
        cy.contains("look up ratio");
        cy.get("#ratio-long-symbol").type("AAPL");
        cy.get("#ratio-short-symbol").type("GOOG");
        cy.get("#ratio-button").click();
        cy.wait("@ratio-chart-data")
            .its("response.statusCode")
            .should("be.oneOf", [200, 304]);
        cy.contains("AAPL / GOOG");
        cy.get(".bar-chart").should("exist");
    });
});
