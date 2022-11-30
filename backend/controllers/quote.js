const quoteRouter = require("express").Router();

const axios = require("axios");

quoteRouter.post("/", async (request, response) => {
  const { symbol } = request.body;

  const options = {
    method: "GET",
    url: `https://api.twelvedata.com/quote`,
    params: {
      country: "USA",
      type: "stock",
      interval: "1min",
      symbol: `${symbol}`,
    },
    headers: {
      "Accept-Encoding": "json",
      Authorization: `apikey ${process.env.TWELVE_KEY}`,
    },
  };

  const stock = await axios.request(options);

  response.json(stock.data);
});

module.exports = quoteRouter;
