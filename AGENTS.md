# AGENTS.md

## Cursor Cloud specific instructions

This workspace is a multi-repo collection of 6 independent Next.js 16 websites under `repos/`. All use npm and the Next.js App Router.

### Repositories

| Repo | Description | Styling |
|------|-------------|---------|
| `dorsa-s-website` | Personal trainer site | Tailwind + TS |
| `drissythebarber` | Barber shop site | Tailwind + TS |
| `lawncare4less` | Lawn care service | Tailwind + TS |
| `magicandmorehairdesign` | Hair salon site | Tailwind + TS |
| `nova55homes` | 55+ real estate site | CSS Modules + TS |
| `premier-allergy` | Medical practice site | CSS Modules + JS |

### Running dev servers

```bash
cd repos/<repo-name>
npm run dev -- --port <port>
```

When running multiple repos simultaneously, assign different ports (e.g. `--port 3001`, `--port 3002`).

### Linting

- 4 repos use `npx eslint .` (dorsa-s-website, drissythebarber, lawncare4less, magicandmorehairdesign)
- 2 repos (`nova55homes`, `premier-allergy`) have a known pre-existing ESLint FlatCompat circular-structure error with `eslint-config-next`. Lint will exit non-zero but the code is correct.

### Building

All repos: `npm run build` (runs `next build`).

### Key notes

- No databases, Docker, or external services required. All sites work without env vars (graceful degradation / mock data).
- Optional env vars: `OPENAI_API_KEY` (nova55homes chatbot), `GOOGLE_PLACES_API_KEY` (premier-allergy reviews), `BLOB_READ_WRITE_TOKEN` / `UPLOAD_PASSWORD` (drissythebarber gallery).
- Node.js 20+ required (v22 works fine).
- All repos use `package-lock.json` (npm).
- No automated test suites exist in any of the repos.
- No git hooks or pre-commit configs.
