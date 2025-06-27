import request from "supertest";
import express from "express";
import materialsRouter from "../../routes/materials";

const app = express();
app.use("/materials", materialsRouter);

describe("GET /materials", () => { 
  it("should return a list of materials", async() => { 
    const res = await request(app).get("/materials")
    expect(res.statusCode).toEqual(200);
    expect(res.headers["content-type"]).toMatch(/json/)
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.error).toBeUndefined();
   })
})