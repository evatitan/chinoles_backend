import request from "supertest";
import express from "express";
import coursesRouter from "../../routes/courses";

const app = express();
app.use("/courses", coursesRouter);

describe("GET /courses", () => { 
  it("should return a list of courses", async() => { 
    const res = await request(app).get("/courses")
    expect(res.statusCode).toEqual(200);
    expect(res.headers["content-type"]).toMatch(/json/)
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.error).toBeUndefined();
   })
})