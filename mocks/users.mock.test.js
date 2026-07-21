
const nock = require("nock");
const request = require("../utils/request");
const { expect } = require("chai");

describe("Users API Mock tests", () => {

    it("should get mocked users", async () => {

        nock("https://jsonplaceholder.typicode.com")
            .get("/users")
            .reply(200, [
                {
                    id: 1,
                    name: "Leanne Graham",
                    username: "Bret",
                    email: "ennadafy@gmail.com"
                }
            ]);

        const response = await request.get("/users");

        expect(response.status).to.equal(200);
        expect(response.body).to.be.an("array");
        expect(response.body[0].id).to.equal(1);
        expect(response.body[0].username).to.equal("Bret");
        expect(response.body[0].name).to.equal("Leanne Graham");
        expect(response.body[0].email).to.equal("ennadafy@gmail.com");

    });

    it("should create a mocked user", async () => {

        const payload = {
            name: "Aliennadafy",
            username: "alaoui99",
            email: "johndoe@gmail.com"
        };

        nock("https://jsonplaceholder.typicode.com")
            .post("/users", payload)
            .reply(201, {
                id: 2,
                ...payload
            });

        const response = await request.post("/users", payload);

        expect(response.status).to.equal(201);
        expect(response.body).to.be.an("object");
        expect(response.body.id).to.equal(2);
        expect(response.body.name).to.equal("Aliennadafy");
        expect(response.body.username).to.equal("alaoui99");
        expect(response.body.email).to.equal("johndoe@gmail.com");

});