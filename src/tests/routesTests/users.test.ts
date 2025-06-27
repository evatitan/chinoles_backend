import request  from 'supertest';
import userRouter from '../../routes/users';
import express from 'express';
const app = express()

app.use("/users", userRouter)

describe("GET /users", () => { 
  it("should return a list of users", async() => {
    const res = await request(app).get("/users")
    expect(res.statusCode).toEqual(200)
    expect(res.headers["content-type"]).toMatch(/json/)
    expect(Array.isArray(res.body)).toBe(true)
    expect(res.body.error).toBeUndefined()
   })
})
