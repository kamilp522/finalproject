describe("Navbar", function () {
	beforeEach(function () {
		cy.visit("http://localhost:3000");
	});

	it("links are not visible at start", function () {
		cy.checkIfNavLinksAreNotVisible();
	});

	it("menu can be opened", function () {
		cy.get("button[aria-label='menu']").click();
	});

	describe("When menu is open:", function () {
		beforeEach(function () {
			cy.get("button[aria-label='menu']").click();
		});

		it("links are visible", function () {
			cy.checkIfNavLinksAreVisible();
		});

		it("indicators link redirects user and closes menu", function () {
			cy.get("a[aria-label='indicators']").click();
			cy.checkIfNavLinksAreNotVisible();
			cy.url().should("eq", "http://localhost:3000/indicators");
			cy.contains("Leading Indicators");
		});

		it("home link redirects user and closes menu", function () {
			cy.visit("http://localhost:3000/indicators");
			cy.get("button[aria-label='menu']").click();
			cy.get("a[aria-label='home']").click();
			cy.checkIfNavLinksAreNotVisible();
			cy.url().should("eq", "http://localhost:3000/");
			cy.contains("Learn How to Adapt to Ever-Changing Market");
		});

		it("login link redirects user and closes menu", function () {
			cy.get("a[aria-label='login']").click();
			cy.checkIfNavLinksAreNotVisible();
			cy.url().should("eq", "http://localhost:3000/login");
			cy.contains("Don't have an account? Sign up right now!");
		});
	});
});
