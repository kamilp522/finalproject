describe("Navbar", function () {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("links are not visible at start", function () {
    cy.checkIfNotLoggedNavIsNotVisible();
  });

  it("menu can be opened", function () {
    cy.get("button[aria-label='menu']").click();
  });

  describe("When menu is open:", function () {
    beforeEach(function () {
      cy.get("button[aria-label='menu']").click();
    });

    it("links are visible", function () {
      cy.checkIfNotLoggedNavIsVisible();
    });

    it("indicators link redirects user and closes menu", function () {
      cy.get("a[aria-label='indicators']").click();
      cy.checkIfNotLoggedNavIsNotVisible();
      cy.url().should("eq", "http://localhost:3000/indicators");
      cy.contains("Leading Indicators");
    });

    it("home link redirects user and closes menu", function () {
      cy.visit("http://localhost:3000/indicators");
      cy.get("button[aria-label='menu']").click();
      cy.get("a[aria-label='home']").click();
      cy.checkIfNotLoggedNavIsNotVisible();
      cy.url().should("eq", "http://localhost:3000/");
      cy.contains("Learn How to Adapt to Ever-Changing Market");
    });

    it("login link redirects user and closes menu", function () {
      cy.get("a[aria-label='login']").click();
      cy.checkIfNotLoggedNavIsNotVisible();
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
        cy.checkIfLoggedNavIsVisible();
        cy.get("a[aria-label='quote']").click();
        cy.checkIfLoggedNavIsNotVisible();
        cy.url().should("eq", "http://localhost:3000/quote");
        cy.contains("look up stock");
      });

      it("logout link redirects user, log user out and closes menu", function () {
        cy.get("a[aria-label='logout']").click();
        cy.checkIfNotLoggedNavIsNotVisible();
        cy.contains(`user John logged out`);
        cy.contains("Learn How to Adapt to Ever-Changing Market");
        cy.url().should("eq", "http://localhost:3000/");
      });

      describe("Pairs trades menu", function () {
        it("pairs trades link opens up pairs trade menu", function () {
          cy.checkIfPairsTradesNavIsNotVisible();
          cy.get("a[aria-label='pairs trades']").click();
          cy.checkIfPairsTradesNavIsVisible();
        });

        describe("When pairs trade menu is open", function () {
          beforeEach(() => {
            cy.get("a[aria-label='pairs trades']").click();
          });

          it("about pairs trade link redirects user and closes menu", function () {
            cy.get("a[aria-label='about pairs trades']").click();
            cy.checkIfLoggedNavIsNotVisible();
            cy.url().should("eq", "http://localhost:3000/about-pairs-trades");
            cy.contains("What are pairs trades?");
          });

          it("ratio chart link redirects user and closes menu", function () {
            cy.get("a[aria-label='ratio chart']").click();
            cy.checkIfLoggedNavIsNotVisible();
            cy.url().should("eq", "http://localhost:3000/ratio-chart");
            cy.contains("Ratio Chart");
          });

          it("calculator link redirects user and closes menu", function () {
            cy.get("a[aria-label='calculator']").click();
            cy.checkIfLoggedNavIsNotVisible();
            cy.url().should("eq", "http://localhost:3000/calculator");
            cy.contains("Pairs Trade Calculator");
          });
        });
      });

      describe("Ideas for trades menu", function () {
        it("ideas for trades link opens up ideas for trades menu", function () {
          cy.checkIfIdeasForTradesNavIsNotVisible();
          cy.get("a[aria-label='ideas for trades']").click();
          cy.checkIfIdeasForTradesNavIsVisible();
        });

        describe("Ideas for trades menu is open", function () {
          beforeEach(() => {
            cy.get("a[aria-label='ideas for trades']").click();
          });

          it("about pairs trade link redirects user and closes menu", function () {
            cy.get("a[aria-label='write down your ideas']").click();
            cy.checkIfLoggedNavIsNotVisible();
            cy.url().should(
              "eq",
              "http://localhost:3000/write-down-your-ideas"
            );
            cy.contains("Write Down Your Ideas");
          });

          it("ratio chart link redirects user and closes menu", function () {
            cy.get("a[aria-label='your ideas']").click();
            cy.checkIfLoggedNavIsNotVisible();
            cy.url().should("eq", "http://localhost:3000/your-ideas");
            cy.contains("John's Ideas for Trades");
          });
        });
      });
    });
  });
});
