describe("Indicators", function () {
    beforeEach(function () {
        cy.visit("http://localhost:3000/indicators");
    });

    it("ISM manufacturing chart renders", function () {
        cy.intercept({
            method: "GET",
            url: "/api/indicators/pmi-manufacturing",
        }).as("mpmi-data");
        cy.wait("@mpmi-data")
            .its("response.statusCode")
            .should("be.oneOf", [200, 304]);
        cy.contains("ISM Manufacturing PMI");
    });

    it("ISM non-manufacturing chart renders", function () {
        cy.intercept({
            method: "GET",
            url: "/api/indicators/pmi-non-manufacturing",
        }).as("npmi-data");
        cy.wait("@npmi-data")
            .its("response.statusCode")
            .should("be.oneOf", [200, 304]);
        cy.contains("ISM Non-Manufacturing PMI");
    });

    it("Michigan Sentiment Index chart renders", function () {
        cy.intercept({
            method: "GET",
            url: "/api/indicators/michigan-sentiment",
        }).as("michigan-data");
        cy.wait("@michigan-data")
            .its("response.statusCode")
            .should("be.oneOf", [200, 304]);
        cy.contains("University of Michigan Index of Consumer Sentiment");
    });
});
