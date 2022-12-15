describe("Login form", function () {
    let user_id;

    beforeEach(function () {
        cy.visit("http://localhost:3000");
        cy.createUser("John", "1234qwer").then((res) => (user_id = res));
    });

    afterEach(function () {
        cy.request("DELETE", `http://localhost:3001/api/users/${user_id}`);
    });

    it("User can log in", function () {
        cy.visit("http://localhost:3000/login");
        cy.get("#login-username").type("John");
        cy.get("#login-password").type("1234qwer");
        cy.get("#login-button").click("");
        cy.contains("user John logged in");
        cy.contains("Learn How to Adapt to Ever-Changing Market");
        cy.url().should("eq", "http://localhost:3000/");
    });
});
