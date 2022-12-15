describe("Home page", function () {
    beforeEach(function () {
        cy.visit("http://localhost:3000");
    });

    it("front page can be opened", function () {
        cy.get(".logo").should("have.length", 2);
        cy.get("button[aria-label='menu']").should("be.visible");
        cy.contains("Learn How to Adapt to Ever-Changing Market");
        cy.contains("Most compact tool for tracking important economic data");
        cy.contains("Monitor current economic conditions with great ease");
    });

    it("slider works correctly", function () {
        cy.contains("Learn How to Adapt to Ever-Changing Market");
        cy.wait(4000);
        cy.contains("Thrive During Both Bull and Bear Market");
        cy.wait(4000);
        cy.contains("Make Real Money Using Our Strategies");
        cy.wait(4000);
        cy.contains("Learn How to Adapt to Ever-Changing Market");
    });
});
