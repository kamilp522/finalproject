require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

app.use(cors());

app.get("/", (request, response) => {
  response.json("hi");
});

app.get("/api/ism-manufacturing", async (request, response) => {
  const ism_manufacturing = await axios.get(
    "https://api.db.nomics.world/v22/series/ISM/pmi/pm?observations=1"
  );
  response.json(ism_manufacturing.data);
});

app.get("/api/ism-non-manufacturing", async (request, response) => {
  const ism_non_manufacturing = await axios.get(
    "https://api.db.nomics.world/v22/series?observations=1&series_ids=ISM%2Fnm-pmi%2Fpm"
  );
  response.json(ism_non_manufacturing.data);
});

app.get("/api/michigan-sentiment", async (request, response) => {
  const michigan_sentiment = await axios.get(
    "https://api.db.nomics.world/v22/series/SCSMICH/MICS/ICS?observations=1"
  );
  response.json(michigan_sentiment.data);
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
