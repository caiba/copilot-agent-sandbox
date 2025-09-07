# Copilot Instructions

## Project
- Node.js (ESM) + Express
- Tests: Jest + Supertest

## Build & Test (Ubuntu runner)
- Use Node 18+
- Install: `npm ci || npm i`
- Run tests: `npm test`
- The failing tests define the desired behavior.

## Conventions
- Implement feature to satisfy tests first.
- Keep app logic in `src/app.js`; `src/server.js` is entrypoint only.
