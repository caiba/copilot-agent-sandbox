import request from "supertest";
import app from "../src/app.js";

describe("GET /api/health", () => {
  test("returns {status:'ok', version:'X.Y.Z'}", async () => {
    const res = await request(app).get("/api/health");
    expect(res.status).toBe(200);
    expect(res.headers["content-type"]).toMatch(/application\/json/);
    expect(res.body).toHaveProperty("status", "ok");
    expect(typeof res.body.version).toBe("string");
  });
});
