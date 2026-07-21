const nock = require("nock");
const request = require("../../utils/request");
const { expect } = require("chai");

describe("Users API Mock tests"), () => {

    it ("should get mocked users", async () => {
        nock("https://jsonplaceholder.typicode.com")
            .get("/users")
            .reply(200, [
                {
                    id: 1,
                    name: "Leanne Graham",
                    username: "Bret",
                    email: "ennadafy@gmail.com"
                }
        ])
    });

    expect(reponse.status).to.equal(200);
    expect(response.body).to.be.an("array");
    expect(response.body[0]).to.equal("Leanne Graham");
}