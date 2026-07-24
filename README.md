# Company Library

Company Library is a Vercel-ready CompanyFinder application inspired by NetBox's library approach and the `netbox-community/devicetype-library` data model. It provides a browsable website plus API endpoints that expose company/vendor records.

## Features

- Responsive company directory landing page
- Company dataset with categories, tags, headquarters, and website links
- JSON API for list, search, category filtering, and detail lookup
- OpenAPI 3.0 specification at `/api/openapi`
- Swagger UI documentation at `/api/docs`

## Getting started

```bash
npm install
npm run dev
```

Open <http://localhost:3000> for the website, <http://localhost:3000/api/companies> for JSON, or <http://localhost:3000/api/docs> for Swagger UI.

## API examples

```bash
curl http://localhost:3000/api/companies
curl "http://localhost:3000/api/companies?q=switches"
curl http://localhost:3000/api/companies/cisco
```

## Deploying to Vercel

Import this repository in Vercel. The included `vercel.json` routes the static website and serverless API functions without a custom server.
