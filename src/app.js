import express from "express";
import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Read version from package.json
const packageJson = JSON.parse(readFileSync(join(__dirname, "..", "package.json"), "utf8"));

// Health endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    version: packageJson.version
  });
});

export default app;