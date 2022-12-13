const axios = require("axios");

const vantageNote =
  "Thank you for using Alpha Vantage! Our standard API call frequency is 5 calls per minute and 500 calls per day. Please visit https://www.alphavantage.co/premium/ if you would like to target a higher API call frequency.";

const getMPMI = async (request, response) => {
  const ism_manufacturing = await axios.get(
    "https://api.db.nomics.world/v22/series/ISM/pmi/pm?observations=1"
  );
  return response.status(200).json(ism_manufacturing.data);
};

const getSPMI = async (request, response) => {
  const ism_non_manufacturing = await axios.get(
    "https://api.db.nomics.world/v22/series?observations=1&series_ids=ISM%2Fnm-pmi%2Fpm"
  );
  return response.status(200).json(ism_non_manufacturing.data);
};

const getMichigan = async (request, response) => {
  const michigan_sentiment = await axios.get(
    "https://api.db.nomics.world/v22/series/SCSMICH/MICS/ICS?observations=1"
  );
  return response.status(200).json(michigan_sentiment.data);
};

const getTreasury10Yield = async (request, response) => {
  const options = {
    method: "GET",
    url: `https://www.alphavantage.co/query?function=TREASURY_YIELD&interval=monthly&maturity=10year&apikey=${process.env.VANTAGE_KEY}`,
    headers: {
      "Accept-Encoding": "json",
    },
  };

  const bondYield = await axios.request(options);

  if (bondYield.Note === vantageNote) {
    return response.status(429).json({
      error: "too many requests, reached Vantage api limit (500/day 5/minute)",
    });
  }
  return response.status(200).json(bondYield.data);
};

const getGDP = async (request, response) => {
  const options = {
    method: "GET",
    url: `https://www.alphavantage.co/query?function=REAL_GDP&interval=quarterly&apikey=${process.env.VANTAGE_KEY}`,
    headers: {
      "Accept-Encoding": "json",
    },
  };

  const gdp = await axios.request(options);

  if (gdp.Note === vantageNote) {
    return response.status(429).json({
      error: "too many requests, reached Vantage api limit (500/day 5/minute)",
    });
  }

  return response.status(200).json(gdp.data);
};

const getPayrolls = async (request, response) => {
  const options = {
    method: "GET",
    url: `https://www.alphavantage.co/query?function=NONFARM_PAYROLL&apikey=${process.env.VANTAGE_KEY}`,
    headers: {
      "Accept-Encoding": "json",
    },
  };

  const payroll = await axios.request(options);

  if (payroll.Note === vantageNote) {
    return response.status(429).json({
      error: "too many requests, reached Vantage api limit (500/day 5/minute)",
    });
  }

  return response.status(200).json(payroll.data);
};

exports.getMPMI = getMPMI;
exports.getSPMI = getSPMI;
exports.getMichigan = getMichigan;
exports.getTreasury10Yield = getTreasury10Yield;
exports.getGDP = getGDP;
exports.getPayrolls = getPayrolls;
