const supertest = require("supertest");
const app = require("../app");

const helper = require("./helpers/user_api_helper.js");
const api = supertest(app);
const bcrypt = require("bcrypt");
const User = require("../models/user");

const { dropDb, dropCollections } = require("./database/local_database");

afterAll(async () => {
	await dropDb();
});

describe("\nCreation of users in an empty database:", () => {
	afterEach(async () => {
		await dropCollections();
	});

	test("can't create a user without a username", async () => {
		const usersAtStart = User.find({});

		const newUser = {
			username: "",
			password: "5678asdf",
			repeatedPassword: "5678asdf",
		};

		await api
			.post("/api/users")
			.send(newUser)
			.expect(400)
			.expect("Content-Type", /application\/json/);

		const usersAtEnd = User.find({});
		expect(usersAtEnd.length).toBe(usersAtStart.length);
	});

	test("can't create a user without a password", async () => {
		const usersAtStart = User.find({});

		const newUser = {
			username: "Johnny",
			password: "",
			repeatedPassword: "",
		};

		await api
			.post("/api/users")
			.send(newUser)
			.expect(400)
			.expect("Content-Type", /application\/json/);

		const usersAtEnd = User.find({});
		expect(usersAtEnd.length).toBe(usersAtStart.length);
	});

	test("can't create a user when a repeated password isn't correct", async () => {
		const usersAtStart = User.find({});

		const newUser = {
			username: "Johnny",
			password: "1234qwer",
			repeatedPassword: "1234qwert",
		};

		await api
			.post("/api/users")
			.send(newUser)
			.expect(400)
			.expect("Content-Type", /application\/json/);

		const usersAtEnd = User.find({});
		expect(usersAtEnd.length).toBe(usersAtStart.length);
	});

	test("can't create a user when a password is too short (min 8 characters)", async () => {
		const usersAtStart = User.find({});

		const newUser = {
			username: "Johnny",
			password: "1234asd",
			repeatedPassword: "1234asd",
		};

		await api
			.post("/api/users")
			.send(newUser)
			.expect(400)
			.expect("Content-Type", /application\/json/);

		const usersAtEnd = User.find({});
		expect(usersAtEnd.length).toBe(usersAtStart.length);
	});

	test("can't create a user when a password doesn't contain at least 1 letter", async () => {
		const usersAtStart = User.find({});

		const newUser = {
			username: "Johnny",
			password: "12345678",
			repeatedPassword: "12345678",
		};

		await api
			.post("/api/users")
			.send(newUser)
			.expect(400)
			.expect("Content-Type", /application\/json/);

		const usersAtEnd = User.find({});
		expect(usersAtEnd.length).toBe(usersAtStart.length);
	});

	test("can't create a user when a password doesn't contain at least 1 number", async () => {
		const usersAtStart = User.find({});

		const newUser = {
			username: "Johnny",
			password: "asdfqwer",
			repeatedPassword: "asdfqwer",
		};

		await api
			.post("/api/users")
			.send(newUser)
			.expect(400)
			.expect("Content-Type", /application\/json/);

		const usersAtEnd = User.find({});
		expect(usersAtEnd.length).toBe(usersAtStart.length);
	});

	test("user with correct username and password can be created", async () => {
		const usersAtStart = User.find({});

		const newUser = {
			username: "Johnny",
			password: "asdfqwe1",
			repeatedPassword: "asdfqwe1",
		};

		await api
			.post("/api/users")
			.send(newUser)
			.expect(201)
			.expect("Content-Type", /application\/json/);

		const usersAtEnd = User.find({});
		expect(usersAtEnd.length).toBe(usersAtStart.length);
	});

	test("successful user registration returns correct username and id", async () => {
		const usersAtStart = User.find({});

		const newUser = {
			username: "Johnny",
			password: "asdfqwe1",
			repeatedPassword: "asdfqwe1",
		};

		const response = await api
			.post("/api/users")
			.send(newUser)
			.expect(201)
			.expect("Content-Type", /application\/json/);

		const usersAtEnd = User.find({});
		expect(usersAtEnd.length).toBe(usersAtStart.length);

		const body = response.body;

		expect(body.username).toBe("Johnny");
		expect(body.id.toString()).toHaveLength(24);
	});
});

describe("\nWith one user already in database:", () => {
	beforeEach(async () => {
		await User.deleteMany({});

		const passwordHash = await bcrypt.hash("1234Qwertdd", 10);
		const user = new User({
			username: "John",
			passwordHash,
		});

		await user.save();
	});

	afterEach(async () => {
		await dropCollections();
	});

	test("user with a fresh username is created", async () => {
		const usersAtStart = await helper.usersInDb();

		const newUser = {
			username: "Mike",
			password: "5678asdf",
			repeatedPassword: "5678asdf",
		};

		await api
			.post("/api/users")
			.send(newUser)
			.expect(201)
			.expect("Content-Type", /application\/json/);

		const usersAtEnd = await helper.usersInDb();
		expect(usersAtEnd).toHaveLength(usersAtStart.length + 1);

		const usernames = usersAtEnd.map((u) => u.username);
		expect(usernames).toContain(newUser.username);
	});

	test("user with username that is already in database isn't created", async () => {
		const usersAtStart = await helper.usersInDb();

		const newUser = {
			username: "John",
			password: "1234asf3dsa",
		};

		await api.post("/api/users").send(newUser).expect(400);

		const usersAtEnd = await helper.usersInDb();
		expect(usersAtEnd).toHaveLength(usersAtStart.length);
	});

	describe("Modificating users database", () => {
		test("User can be deleted", async () => {
			const usersAtStart = await helper.usersInDb();
			const id = usersAtStart[0].id;

			await api.delete(`/api/users/${id}`).expect(204);

			const usersAtEnd = await helper.usersInDb();

			expect(usersAtEnd.length).toBe(usersAtStart.length - 1);
		});
	});

	describe("\nLoging in:", () => {
		test("can't log in without a correct username", async () => {
			const credentials = {
				username: "",
				password: "1234Qwertdd",
			};

			await api.post("/api/login").send(credentials).expect(401);
		});

		test("can't log in without a correct password", async () => {
			const credentials = {
				username: "John",
				password: "123",
			};

			await api.post("/api/login").send(credentials).expect(401);
		});

		test("user can log in with correct credentials", async () => {
			const credentials = {
				username: "John",
				password: "1234Qwertdd",
			};

			await api.post("/api/login").send(credentials).expect(200);
		});

		test("successful login request returns correct token and username", async () => {
			const credentials = {
				username: "John",
				password: "1234Qwertdd",
			};

			const response = await api
				.post("/api/login")
				.send(credentials)
				.expect(200);

			const body = response.body;

			expect(body.token).toHaveLength(172);
			expect(body.username).toBe("John");
		});
	});
});
