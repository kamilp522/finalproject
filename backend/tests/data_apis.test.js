const supertest = require("supertest");
const app = require("../app");
const axios = require("axios");
const helper = require("./helpers/user_api_helper.js");

const api = supertest(app);

jest.mock("axios");
