const request = require("supertest");
const server = require("./server");
const db = require("./data/dbConfig");

let token;

describe("Tests for: users endpoints", () => {
  beforeEach(async () => {
    await db("users").truncate();
  });

  describe("Endpoints tests", () => {
    it("/ SUCCESS => 🌚", () => {
      return request(server)
        .get("/")
        .then(res => {
          expect(res.text).toBe("🌚");
        });
    });

    it("/users/register SUCCESS => 201", async () => {
      return request(server)
        .post("/users/register")
        .set("Accept", "application/json")
        .send({ username: "test", email: "test@email.com", password: "test" })
        .expect(201);
    });

    it("/users/register FAIL => 500", async () => {
      return request(server)
        .post("/users/register")
        .set("Accept", "application/json")
        .send({ username: "test", password: "test" })
        .expect(400);
    });

    it("/users/login SUCCESS => 200", async () => {
      await request(server)
        .post("/users/register")
        .set("Accept", "application/json")
        .send({ username: "test", email: "test@email.com", password: "test" });
      const res = await request(server)
        .post("/users/login")
        .set("Accept", "application/json")
        .send({ username: "test", password: "test" })
        .expect(200);

        token = res.body.token;
    });
  });
});

describe("Tests for: stories endpoint", () => {
  describe("Endpoints tests", () => {
    it("/stories NO TOKEN => 401", async () => {
      return request(server)
        .get("/stories")
        .expect(401);
    });

    it("/stories TOKEN => 200", async () => {
      await request(server)
        .get("/stories")
        .set("Authorization", token)
        .expect(200)
    });
  });
});
