import request from "supertest";
import express from "express";
import ordersRouter from "../../routes/orders";

const app = express();
app.use("/orders", ordersRouter);

describe("GET /materials", () => { 
  it("should return a list of orders", async() => { 
    const res = await request(app).get("/orders")
    expect(res.statusCode).toEqual(200);
    expect(res.headers["content-type"]).toMatch(/json/)
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.error).toBeUndefined();
   })
})