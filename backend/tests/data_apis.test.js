const supertest = require("supertest");
const app = require("../app");
const api = supertest(app);

describe("\nCheck if api calls return correct data in correct format", () => {
  test("MPMI data is returned as json", async () => {
    const response = await api
      .get("/api/indicators/pmi-manufacturing")
      .expect(200)
      .expect("Content-Type", /application\/json/);

    const code = response.body.series.docs[0].dataset_code;
    expect(code).toBe("pmi");
  });

  test("SPMI data is returned as json", async () => {
    const response = await api
      .get("/api/indicators/pmi-non-manufacturing")
      .expect(200)
      .expect("Content-Type", /application\/json/);

    const code = response.body.series.docs[0].dataset_code;
    expect(code).toBe("nm-pmi");
  });

  test("Michigan Sentiment Index data is returned as json", async () => {
    const response = await api
      .get("/api/indicators/michigan-sentiment")
      .expect(200)
      .expect("Content-Type", /application\/json/);

    const code = response.body.series.docs[0].dataset_code;
    expect(code).toBe("MICS");
  });

  test("10 year treasury bond yield data is returned as json", async () => {
    const response = await api
      .get("/api/indicators/treasury-10-yield")
      .expect(200)
      .expect("Content-Type", /application\/json/);

    const name = response.body.name;
    expect(name).toBe("10-Year Treasury Constant Maturity Rate");
  });

  test("quote data is returned as json", async () => {
    const response = await api
      .post("/api/quote")
      .send({ symbol: "AAPL" })
      .expect(200)
      .expect("Content-Type", /application\/json/);

    const symbol = response.body.symbol;
    expect(symbol).toBe("AAPL");
  });

  test("timeseries data is returned as json", async () => {
    const response = await api
      .post("/api/timeseries")
      .send({ symbol: "AAPL", chartInterval: "4h" })
      .expect(200)
      .expect("Content-Type", /application\/json/);

    const symbol = response.body.meta.symbol;
    const interval = response.body.meta.interval;

    expect(symbol).toBe("AAPL");
    expect(interval).toBe("4h");
  });

  test("Nonfarm payroll data is returned as json", async () => {
    const response = await api
      .get("/api/indicators/payroll")
      .expect(200)
      .expect("Content-Type", /application\/json/);

    const name = response.body.name;

    console.log(response.body);

    expect(name).toBe("Total Nonfarm Payroll");
  });
});
