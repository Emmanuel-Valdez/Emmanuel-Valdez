# Emmanuel Valdez Portfolio

Personal developer portfolio for Emmanuel Valdez, a Backend Developer focused on .NET, C#, SQL Server, business systems, data, and operational logic.

The public UI supports Spanish and English static routes. Code, comments, repository documentation, and implementation notes should stay in English unless broader bilingual documentation is explicitly needed.

## Live Site

```text
https://evalmondev.netlify.app
```

## Positioning

This portfolio is intentionally positioned around backend and fullstack-capable work rather than pure frontend specialization.

Primary focus areas:

- Backend development with .NET, C#, and SQL Server.
- E-commerce and business management systems.
- Data modeling, business logic, pricing workflows, and operational processes.
- Fullstack implementation when needed to deliver usable products.
- Infrastructure topics such as Linux, Docker, and cloud are treated as future growth areas unless backed by implemented, documented evidence.

## Featured Project: Ukiyo Designs

Ukiyo Designs is the main technical case study showcased in this portfolio because it proves backend .NET work against a real business problem.

Repository:

```text
https://github.com/Emmanuel-Valdez/Ukiyo
```

Live demo:

```text
https://ukiyo.bsite.net
```

### Context

Ukiyo is an e-commerce and business management system for a family business that manufactures backpacks, bags, and apparel.

Before the web application, pricing and production cost calculations were managed through an Excel spreadsheet. The application centralizes those workflows into a database-backed ASP.NET Core MVC system.

### Problem

The business needed a better way to manage:

- Product catalog and product images.
- Retail and wholesale pricing.
- Production costs by product.
- Operational costs, taxes, platform fees, and profit margins.
- Orders, carts, favorites, users, roles, and company accounts.
- Spanish and English public-facing content.

### Solution

Ukiyo was built as an ASP.NET Core 8 MVC application using Entity Framework Core and SQL Server. It includes a public customer store and an admin area for managing products, companies, users, orders, and price calculations.

The portfolio case study now opens with a reduced technical summary so recruiters can scan role, problem, stack, implementation proof, and backend takeaway before reading the deeper narrative.

The current case study is intentionally developer-centered: brand/product language was reduced, the demo scope was compressed, duplicate stack sections were removed, and screenshots are treated as additional evidence rather than the main story.

The admin price calculator considers:

- Fabrics and material costs.
- Garment hardware such as buttons, zippers, buckles, and other components.
- Packaging costs by category.
- Fixed monthly costs such as taxes, rent, utilities, and operational expenses.
- Percentage-based costs such as platform fees and payment processing fees.
- Profit margins for wholesale and suggested retail pricing.

### My Role

- Designed and implemented backend business logic.
- Modeled the database entities and relationships.
- Built the admin price calculator workflow.
- Integrated authentication and role-based access.
- Connected Stripe payments and Facebook OAuth.
- Added localization support for Spanish and English.
- Prepared the project for portfolio/demo publishing.

### What I Built

- SQL Server-backed data model for catalog, accounts, orders, costs, and pricing.
- ASP.NET Core MVC flows for storefront and administrative workflows.
- Identity role separation for customer, company, employee, and admin access.
- Stripe checkout, Facebook OAuth, and Spanish/English localization.
- Pricing calculator using persisted cost inputs, SQL views, triggers, and admin decision screens.

### Technical Stack

- ASP.NET Core 8.0 MVC
- Entity Framework Core
- SQL Server
- ASP.NET Core Identity
- Facebook OAuth
- Stripe Payment Gateway
- Localization with Spanish and English resources
- DotNetEnv for local secrets management

### Backend Highlights

- Multi-company support for collaborative order and inventory management.
- Role-based flows for customers, company users, employees, and admins.
- SQL views for price and cost calculations.
- SQL triggers to keep unit and product-level totals updated.
- Compact demo scope note that separates public storefront flows from protected admin/pricing areas documented through screenshots.
- Technical decisions section plus accordions for secondary details such as stack by layer, conceptual data model, and implementation notes.
- Seeded demo data and startup repair flows for calculator rows.
- Manual regression testing completed before portfolio/demo publish readiness.

## Portfolio Tech Stack

- Astro
- Tailwind CSS
- TypeScript
- `@fontsource-variable/onest`
- Netlify static deployment

## Project Structure

```text
/
├── public/
│   ├── media/
│   ├── projects/
│   ├── videos/
│   └── favicon.svg
├── src/
│   ├── components/
│   ├── icons/
│   ├── layouts/
│   └── pages/
├── ukiyo-walkthrough/
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Main Files

- `src/pages/index.astro`: single portfolio page route.
- `src/pages/en/index.astro`: English portfolio page route.
- `src/pages/proyectos/ukiyo.astro`: Spanish Ukiyo case study route.
- `src/pages/en/projects/ukiyo.astro`: English Ukiyo case study route.
- `src/data/i18n.ts`: Spanish and English visible copy, localized routes, and CV links.
- `src/layouts/Layout.astro`: HTML shell, metadata, font loading, global styles, header, and footer.
- `src/components/Hero.astro`: backend-focused intro, stack chips, and social links.
- `src/components/Experience.astro`: experience section.
- `src/components/Projects.astro`: featured Ukiyo case study and supporting project cards.
- `src/components/AboutMe.astro`: personal profile section.
- `src/components/Contact.astro`: contact and CV download section.
- `public/videos/ukiyo-walkthrough.mp4`: embedded Ukiyo case study walkthrough.
- `ukiyo-walkthrough/`: HyperFrames source project for the Ukiyo walkthrough video.

## Internationalization

The portfolio currently supports Spanish and English static routes:

```text
/
/en/
/proyectos/ukiyo/
/en/projects/ukiyo/
```

Visible copy, localized routes, metadata, and CV links are centralized in `src/data/i18n.ts`.

The root Spanish version is the default experience. The English version should stay synchronized when visible content changes.

Localized CV files are served from `public/media/`:

```text
Emmanuel_Valdez_CV_Backend_NET_2026_ES.pdf
Emmanuel_Valdez_CV_Backend_NET_2026_EN.pdf
```

## Local Development

Install dependencies:

```sh
npm install
```

Start the development server:

```sh
npm run dev
```

Build the production site:

```sh
npm run build
```

Preview the production build locally:

```sh
npm run preview
```

## Quality Gate

The production build runs `astro check` before `astro build`:

```sh
npm run build
```

This catches Astro and TypeScript diagnostics before generating the static site.

## Deployment

The primary deployment target is Netlify:

```text
https://evalmondev.netlify.app
```

Netlify should use:

```sh
npm run build
```

Publish directory:

```text
dist/
```

The project also has a Vercel deployment, but Netlify is the preferred production target for now because the provided domain is simpler. A custom domain is not required at this stage.

## SEO Configuration

`Layout.astro` uses the `site` value from `astro.config.mjs` to generate canonical and social image URLs. The current primary production URL is configured as:

```js
export default defineConfig({
  site: 'https://evalmondev.netlify.app',
  integrations: [tailwind()],
});
```

## Technical Roadmap

Planned improvements that strengthen the backend/fullstack portfolio signal:

- Review the latest Netlify deployment after each pushed portfolio update.
- Validate the embedded Ukiyo walkthrough experience on desktop and mobile after production deploys.
- Document a Docker-based deployment once a project is running on the Oracle Linux server.
- Add notes about the cloud architecture course and infrastructure decisions when there is concrete deployment evidence.
- Keep the Spanish and English versions synchronized as the portfolio evolves.
- Improve visual polish without shifting the positioning toward pure frontend.
- Continue the staged Ukiyo case-study refactor: early visual evidence, stronger admin pricing calculator prominence, and clearer backend decision cards.

Recently completed portfolio improvements:

- The Ukiyo case study now includes a bilingual bento executive summary directly after the hero.
- The Ukiyo case study narrative was reduced and reorganized around a summary-first single-scroll structure.
- Projects now appear before experience on the homepage.
- Ukiyo includes visible technical metrics on the featured project card.
- Hero actions were simplified around the Ukiyo case study, CV download, and email contact.
- The Ukiyo case study now explains demo scope and protected admin boundaries.
- The Ukiyo data model now includes business-oriented entity groups and a compact conceptual relationship diagram.
- The Ukiyo case study now includes an embedded end-to-end video walkthrough.

## Repository Notes

- Do not commit local assistant context files.
- Keep generated build output out of Git.
- Keep Spanish and English public UI copy synchronized.
- Keep secrets out of the repository. Use environment variables or ignored local files for credentials.

## License and Usage

This repository is public so the portfolio can be reviewed as part of Emmanuel Valdez's professional work.

All personal content, CV files, images, screenshots, branding, written copy, and personal information are not licensed for reuse, redistribution, or commercial use. Unless explicitly stated otherwise, all rights are reserved.

If a separate software license is added in the future, it will apply only to the code covered by that license and not to personal assets, CV files, project media, or portfolio content.
