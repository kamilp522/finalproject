const axios = require("axios");
const middleware = require("../utils/middleware");

const vantageNote =
  "Thank you for using Alpha Vantage! Our standard API call frequency is 5 calls per minute and 500 calls per day. Please visit https://www.alphavantage.co/premium/ if you would like to target a higher API call frequency.";

const getMPMI = async (request, response) => {
  const ISMManufacturing = await axios.get(
    "https://api.db.nomics.world/v22/series/ISM/pmi/pm?observations=1"
  );

  if (!ISMManufacturing) {
    return response.status(403).json({
      error: "can't access DB.NOMICS api",
    });
  }

  const parsedISMManufacturing = middleware.parseDBNOMICSData(
    ISMManufacturing.data.series.docs[0]
  );

  return response.status(200).json(parsedISMManufacturing);
};

const getSPMI = async (request, response) => {
  const ISMNonManufacturing = await axios.get(
    "https://api.db.nomics.world/v22/series?observations=1&series_ids=ISM%2Fnm-pmi%2Fpm"
  );

  if (!ISMNonManufacturing) {
    return response.status(403).json({
      error: "can't access DB.NOMICS api",
    });
  }

  const parsedISMNonManufacturing = middleware.parseDBNOMICSData(
    ISMNonManufacturing.data.series.docs[0]
  );

  return response.status(200).json(parsedISMNonManufacturing);
};

const getMichigan = async (request, response) => {
  const michiganSentiment = await axios.get(
    "https://api.db.nomics.world/v22/series/SCSMICH/MICS/ICS?observations=1"
  );

  if (!michiganSentiment) {
    return response.status(403).json({
      error: "can't access DB.NOMICS api",
    });
  }

  const parsedMichiganSentiment = middleware.parseDBNOMICSData(
    michiganSentiment.data.series.docs[0]
  );

  return response.status(200).json(parsedMichiganSentiment);
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

  if (!bondYield) {
    return response.status(403).json({
      error: "can't access Vantage api",
    });
  }

  if (bondYield.Note === vantageNote) {
    return response.status(429).json({
      error: "too many requests, reached Vantage api limit (500/day 5/minute)",
    });
  }

  const parsedYieldData = middleware.parseVANTAGEData(bondYield.data.data);
  response.status(200).json(parsedYieldData);
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

  if (!gdp) {
    return response.status(403).json({
      error: "can't access Vantage api",
    });
  }

  if (gdp.Note === vantageNote) {
    return response.status(429).json({
      error: "too many requests, reached Vantage api limit (500/day 5/minute)",
    });
  }

  const parsedGDPData = middleware.parseVANTAGEData(gdp.data.data);
  return response.status(200).json(parsedGDPData);
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

  if (!payroll) {
    return response.status(403).json({
      error: "can't access Vantage api",
    });
  }

  if (payroll.Note === vantageNote) {
    return response.status(429).json({
      error: "too many requests, reached Vantage api limit (500/day 5/minute)",
    });
  }

  const parsedPayrollData = middleware.parseVANTAGEData(payroll.data.data);
  return response.status(200).json(parsedPayrollData);
};

exports.getMPMI = getMPMI;
exports.getSPMI = getSPMI;
exports.getMichigan = getMichigan;
exports.getTreasury10Yield = getTreasury10Yield;
exports.getGDP = getGDP;
exports.getPayrolls = getPayrolls;
