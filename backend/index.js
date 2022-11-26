require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

const Fred = require("fred-api");
apiKey = process.env.FRED_KEY;

const fred = new Fred(apiKey);

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

fred.getSeries({ series_id: "GNPCA" }, function (error, result) {
  console.log(result);
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
