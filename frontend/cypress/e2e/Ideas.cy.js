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
        cy.get("button[aria-label='menu']").click();
        cy.get("a[aria-label='ideas for trades']").click();
        cy.get("a[aria-label='write down your ideas']").click();
        cy.checkIfPairsTradesNavIsNotVisible();
        cy.checkIfLoggedNavIsNotVisible();
        cy.contains("Write Down Your Ideas");
        cy.contains("add idea");
        cy.get("#write-idea-long").type("AAPL");
        cy.get("#write-idea-short").type("GOOG");
        cy.get("#write-idea-arguments").type("another great idea");
        cy.get("#write-idea-button").click();
        cy.contains("idea for trade added");
        cy.get("button[aria-label='menu']").click();
        cy.get("a[aria-label='ideas for trades']").click();
        cy.get("a[aria-label='your ideas']").click();
        cy.checkIfPairsTradesNavIsNotVisible();
        cy.checkIfLoggedNavIsNotVisible();
        cy.contains("John's Ideas for Trades");
        cy.contains("AAPL");
        cy.contains("GOOG");
        cy.contains("another great idea");
        cy.contains("remove");
    });
});
