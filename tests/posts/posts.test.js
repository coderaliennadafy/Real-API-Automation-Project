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

    it("should get a post by id", async () => {

        const response = await reques.get("/posts/1");

        expect(response.status).to.equal(200);

        expect(response.body).to.be.an("object");

        expect(response.body.id).to.equal(1);

        expect(response.body).to.have.property("title");

        expect(response.body).to.have.property("body");

    });

});