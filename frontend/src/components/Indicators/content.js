export const latestContent = {
  leading:
    "An indicator is a piece of economic data that can be used to better understand trends in economy. Leading indicators are data sets that are showing the potential change in economic activity that may occur in the future. These indicators are the most important for the traders, as one of the main job of the trader is to predict future economic conditions.",
  coincident:
    "Coincident indicators show current economic conditions. They may be used to confirm if forecasts made by using leading indicators were correct or not.",
  manufacturing_pmi: {
    title: "ISM Manufacturing PMI",
    interpretation:
      "The Manufacturing Purchasing Managers Index (MPMI) is based on monthly surveys of supply chain managers. Thanks to data aggregated over the years this index is widely used as the tool for prognosing future state of American industry. Levels Above 50 are showing improvment, below 50 - deterioration.",
    periods: "months",
  },
  non_manufacturing_pmi: {
    title: "ISM Non-Manufacturing PMI",
    interpretation:
      "The Services Purchasing Managers Index (SPMI) is based on surveys with executives in private sector service companies. Similar to MPMI, it is used by many experts in predicting direction US service sector will take in the coming months. Levels Above 50 are showing improvment, below 50 - deterioration.",
    periods: "months",
  },
  michigan_sentiment: {
    title: "University of Michigan Index of Consumer Sentiment",
    interpretation:
      "Consumer Index published by University of Michigan monthly since 1966. It is calculated using data from at least 500 telephone interviews. The sheer size of data aggregated over the many years made UMCSI one of the most important leading indicators in US economy.",
    periods: "months",
  },
  treasury_10_yield: {
    title: "10-Year Treasury Constant Maturity Rate",
    interpretation:
      "Bonds have a long-going history of predicting the future movements of the stock market, hence they are widely used as a leading indicator (values in %).",
    periods: "months",
  },
  gdp: {
    title: "Real Gross Domestic Product",
    interpretation:
      "Gross domestic product (GDP) is a monetary measure of the current market value of all financial goods and services in the economy. It is used as a broad measure of current economic health (values in trillions of USD).",
    periods: "quarters",
  },
  payroll: {
    title: "Total Nonfarm Payroll",
    interpretation:
      "Nonfarm payroll is the measure of the size of the labor force in the US excluding farm workers (and some other sectors despite the name). As about 80% of US GDP comes from business sectors information about employment situtation there is crucial to determining the current economic conditions (values in thousands).",
    periods: "months",
  },
};
