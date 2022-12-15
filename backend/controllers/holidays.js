const holidaysRouter = require("express").Router();
const middleware = require("../utils/middleware");

holidaysRouter.get("/", async (request, response) => {
  const holidays = await middleware.getHolidays();
  response.status(200).send(holidays);
});

module.exports = holidaysRouter;
