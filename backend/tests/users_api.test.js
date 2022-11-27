const supertest = require("supertest");
const app = require("../app");

const helper = require("./test_helper.js");
const api = supertest(app);

test("New user can be created", async () => {
  const newUser = {
    username: "john",
    password: "123",
  };

  await api
    .post("/api/users")
    .send(newUser)
    .expect(201)
    .expect("Content-Type", /application\/json/);

  const usersAtEnd = await helper.usersInDb();
  expect(usersAtEnd).toHaveLength(1);
});
