const quoteRouter = require("express").Router();

const axios = require("axios");

quoteRouter.post("/", async (request, response) => {
  const { symbol } = request.body;

  const options = {
    method: "GET",
    url: `https://api.twelvedata.com/quote`,
    params: {
      country: "USA",
      symbol: `${symbol}`,
    },
    headers: {
      "Accept-Encoding": "json",
      Authorization: `apikey ${process.env.TWELVE_KEY}`,
    },
  };

  const quote = await axios.request(options);

  if (quote.data.code === 400) {
    return response.status(400).json({
      error: `asset ${symbol} wasn't found`,
    });
  }

  if (quote.data.code === 401) {
    return response.status(401).json({
      error: "unauthorized request, check validity of an Twelve Data api key",
    });
  }

  if (quote.data.code === 429) {
    return response.status(429).json({
      error:
        "too many requests, reached Twelve Data api limit (5/minute 800/day)",
    });
  }

  response.status(200).json(quote.data);
});

module.exports = quoteRouter;
