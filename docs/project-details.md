# Emmanuel Valdez - Backend .NET Developer Portfolio

Personal developer portfolio for Emmanuel Valdez, a backend-focused .NET developer building and deploying real applications.

## Live Site

```text
https://evaldez.ar
```

## Positioning

Backend-focused developer who can take an ASP.NET Core application from local development to a real Linux VPS deployment. Built, deployed, and operates VaultShop as the primary case study.

Primary focus areas:

- Backend development with .NET, C#, ASP.NET Core, and PostgreSQL.
- E-commerce systems, business logic, roles, payments, and operational workflows.
- Deployment with Docker Compose, Nginx HTTPS, Ubuntu VPS, and MinIO object storage.
- Database backup/restore, uptime monitoring, and production-style operations.

## Featured Project: VaultShop

```text
https://vaultshop.evaldez.ar
```

VaultShop is a self-hosted ASP.NET Core 8 MVC e-commerce application deployed on an Ubuntu VPS with PostgreSQL, Docker Compose, MinIO object storage, Stripe Checkout/webhooks, ASP.NET Core Identity roles, localization, and Nginx HTTPS.

VaultShop is presented as a portfolio case study with demo data and protected admin areas; it is not marketed as a production business platform.

### What it proves

- Built and deployed a realistic e-commerce application end to end.
- Implemented Identity roles, Stripe payments, PostgreSQL/Npgsql, and MinIO storage.
- Validated backup/restore for PostgreSQL and MinIO.
- Basic uptime/TLS monitoring in place.
- Configurable theme system with server-side validation.
- Server-side admin order guards (defense in depth).
- Dynamic PWA manifest endpoint.
- CI pipeline via GitHub Actions (restore, build, test).

### Stack

- ASP.NET Core 8 MVC
- Entity Framework Core + PostgreSQL/Npgsql
- ASP.NET Core Identity roles
- Stripe Checkout + signed webhooks
- MinIO / S3-compatible object storage
- Docker Compose
- Nginx HTTPS reverse proxy
- Ubuntu 24.04 VPS (Oracle Cloud)
- GitHub Actions CI

## Portfolio Tech Stack

- Astro
- Tailwind CSS
- TypeScript
- Netlify static deployment

## Local Development

```sh
npm install
npm run dev
```

Build production:

```sh
npm run build
```

## Deployment

Primary deployment target: Netlify -> `https://evaldez.ar`

```sh
npm run build
```

Publish directory: `dist/`

## Repository Notes

- Do not commit local assistant context files.
- Keep generated build output out of Git.
- Keep secrets out of the repository.
- Spanish and English public UI copy should stay synchronized.

## License

This repository is public for portfolio review. All personal content, CV files, images, screenshots, and written copy are not licensed for reuse.
