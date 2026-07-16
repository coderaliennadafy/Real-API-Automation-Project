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

        const response = await request.get("/posts/1");

        expect(response.status).to.equal(200);

        expect(response.body).to.be.an("object");

        expect(response.body.id).to.equal(1);

        expect(response.body).to.have.property("title");

        expect(response.body).to.have.property("body");

        });

    it("should create a new post", async () => {

        const payload = {
            title: "QA Automation",
            body: "Learning Supertest",
            userId: 1
        };

        const response = await request
            .post("/posts")
            .send(payload);

        expect(response.status).to.equal(201);

        expect(response.body).to.be.an("object");

        expect(response.body).to.have.property("id");

        expect(response.body.title).to.equal(payload.title);

        expect(response.body.body).to.equal(payload.body);

        expect(response.body.userId).to.equal(payload.userId);

        });

    it("should update a post", async () => {

        const payload = {
            id: 1,
            title: "Updated Title",
            body: "Updated Body",
            userId: 1
        };

        const response = await request
            .put("/posts/1")
            .send(payload);

        expect(response.status).to.equal(200);

        expect(response.body).to.be.an("object");

        expect(response.body.id).to.equal(1);

        expect(response.body.title).to.equal(payload.title);

        expect(response.body.body).to.equal(payload.body);

        expect(response.body.userId).to.equal(payload.userId);

    });

    it("should partially update a post", async () => {

        const payload = {
            title: "Patched Title"
        };

        const response = await request
            .patch("/posts/1")
            .send(payload);

        expect(response.status).to.equal(200);

        expect(response.body).to.be.an("object");

        expect(response.body.id).to.equal(1);

        expect(response.body.title).to.equal(payload.title);

    });

    it("should delete a post", async () => {

        const response = await request.delete("/posts/1");

        expect(response.status).to.equal(200);

        expect(response.body).to.be.an("object");

    });

});