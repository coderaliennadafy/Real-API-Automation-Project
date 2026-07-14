import request from "../../utils/request.js";
import { expect } from "chai";

describe("Posts API Tests", () => {

    it("should get all posts", async () => {

        const response = await request.get("/posts");

        expect(response.status).to.equal(200);

        expect(response.body).to.be.an("array");

        expect(response.body.length).to.be.greaterThan(0);

        expect(response.body[0]).to.have.property("id");

        expect(response.body[0]).to.have.property("title");

        expect(response.body[0]).to.have.property("body");

    });

});