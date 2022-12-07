describe("Navbar", function () {
	beforeEach(() => {
		cy.visit("http://localhost:3000");
	});

	it("links are not visible at start", function () {
		cy.checkIfNotLoggedNavLinksAreNotVisible();
	});

	it("menu can be opened", function () {
		cy.get("button[aria-label='menu']").click();
	});

	describe("When menu is open:", function () {
		beforeEach(function () {
			cy.get("button[aria-label='menu']").click();
		});

		it("links are visible", function () {
			cy.checkIfNotLoggedNavLinksAreVisible();
		});

		it("indicators link redirects user and closes menu", function () {
			cy.get("a[aria-label='indicators']").click();
			cy.checkIfNotLoggedNavLinksAreNotVisible();
			cy.url().should("eq", "http://localhost:3000/indicators");
			cy.contains("Leading Indicators");
		});

		it("home link redirects user and closes menu", function () {
			cy.visit("http://localhost:3000/indicators");
			cy.get("button[aria-label='menu']").click();
			cy.get("a[aria-label='home']").click();
			cy.checkIfNotLoggedNavLinksAreNotVisible();
			cy.url().should("eq", "http://localhost:3000/");
			cy.contains("Learn How to Adapt to Ever-Changing Market");
		});

		it("login link redirects user and closes menu", function () {
			cy.get("a[aria-label='login']").click();
			cy.checkIfNotLoggedNavLinksAreNotVisible();
			cy.url().should("eq", "http://localhost:3000/login");
			cy.contains("Don't have an account? Sign up right now!");
		});

		describe("When logged in", function () {
			let user_id;

			beforeEach(function () {
				cy.createUser("John", "1234qwer").then((res) => (user_id = res));
				cy.login({ username: "John", password: "1234qwer" });
				cy.get("button[aria-label='menu']").click();
			});

			afterEach(function () {
				cy.request("DELETE", `http://localhost:3001/api/users/${user_id}`);
			});

			it("quote link redirects user and closes menu", function () {
				cy.checkIfLoggedNavLinksAreVisible();
				cy.get("a[aria-label='quote']").click();
				cy.checkIfLoggedNavLinksAreNotVisible();
				cy.url().should("eq", "http://localhost:3000/quote");
				cy.contains("Look up stock");
			});

			it("logout link redirects user, log user out and closes menu", function () {
				cy.get("a[aria-label='logout']").click();
				cy.checkIfNotLoggedNavLinksAreNotVisible();
				cy.contains(`user John logged out`);
				cy.contains("Learn How to Adapt to Ever-Changing Market");
				cy.url().should("eq", "http://localhost:3000/");
			});
		});
	});
});
