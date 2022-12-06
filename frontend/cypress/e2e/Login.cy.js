describe("Login form", function () {
	beforeEach(function () {
		cy.visit("http://localhost:3000/login");
	});

	it("User can log in", function () {
		cy.get("input:first").type("John");
		cy.get("input:last").type("123");
	});
});
