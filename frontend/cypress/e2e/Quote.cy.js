describe("Quote", function () {
	let user_id;

	beforeEach(function () {
		cy.createUser("John", "1234qwer").then((res) => (user_id = res));
		cy.login({ username: "John", password: "1234qwer" });
	});

	afterEach(function () {
		cy.request("DELETE", `http://localhost:3001/api/users/${user_id}`);
	});

	it("can look up stock", function () {
		cy.get("button[aria-label='menu']").click();
		cy.get("a[aria-label='quote']").click();
		cy.contains("Look up stock");
		cy.get("#quote-symbol").type("AAPL");
		cy.get("#quote-button").click();
		cy.checkIfLoggedNavLinksAreNotVisible();
		cy.contains("Apple Inc");
		cy.contains("NASDAQ");
		cy.get("#quote-chart").should("exist");
	});
});
