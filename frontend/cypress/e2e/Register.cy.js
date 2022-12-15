describe("Register form", function () {
    afterEach(function () {
        cy.request("DELETE", "http://localhost:3001/api/users/all");
    });

    it("registration is possible", () => {
        cy.visit("http://localhost:3000/register");
        cy.get("#register-username").type("John");
        cy.get("#register-password").type("1234qwer");
        cy.get("#register-repeated-password").type("1234qwer");
        cy.get("#register-button").click("");
        cy.contains("user John signed up");
        cy.contains("Learn How to Adapt to Ever-Changing Market");
        cy.url().should("eq", "http://localhost:3000/");
        cy.contains("John logged in");
    });
});
