# Ukiyo Case Study Stage 1 Audit

## Scope

This audit maps the current Ukiyo case study before any redesign or copy rewrite.

Routes reviewed:

- `/proyectos/ukiyo/`
- `/en/projects/ukiyo/`

Source files reviewed:

- `src/pages/proyectos/ukiyo.astro`
- `src/pages/en/projects/ukiyo.astro`
- `src/data/i18n.ts`
- `public/projects/ukiyo/*`
- `public/videos/ukiyo-walkthrough.mp4`

Important implementation note:

- The English case study reuses the Spanish Astro page through `src/pages/en/projects/ukiyo.astro` with `<UkiyoCaseStudyPage locale="en" />`.
- The page structure lives in `src/pages/proyectos/ukiyo.astro`.
- The ES/EN copy, labels, screenshots, metrics, and section content live in `src/data/i18n.ts`.
- Any redesign should preserve this architecture unless there is a clear maintainability reason to extract small components.

## Current Section Map

Current order in `src/pages/proyectos/ukiyo.astro`:

1. Back link
2. Hero
3. Three metric cards
4. Video walkthrough
5. Demo scope
6. Context
7. Problem / Solution cards
8. Architecture section
9. Stack by layers
10. Admin calculator
11. Data model
12. Backend decisions + stack aside
13. Impact
14. Screenshot gallery

## Current Content Density Diagnosis

The current case study is credible but too dense because most sections use similar visual weight:

- rounded card containers
- dark translucent backgrounds
- border/glow accents
- headings plus descriptive paragraphs
- bullet lists or card grids

This creates a long sequence of equally important blocks. The reader gets strong evidence, but the hierarchy does not clearly separate:

- first-scan recruiter information
- core project story
- differentiated proof points
- secondary technical depth

The page currently reads more like a complete evidence archive than a guided case study.

## Strong Content To Preserve

These points should remain visible in the redesigned case study:

- Ukiyo is a real e-commerce and admin system for a physical-products business.
- It replaced or improved an Excel-based cost/pricing workflow.
- It was built with ASP.NET Core MVC, EF Core, SQL Server, Identity, Stripe, Facebook OAuth, and ES/EN localization.
- It includes public store flows and protected admin flows.
- It has real business logic around costs, margins, wholesale/retail pricing, orders, users, companies, and roles.
- SQL views and triggers are relevant backend proof points.
- The video walkthrough is central evidence.
- Screenshots prove both public and admin areas.
- The admin pricing calculator is the most differentiated feature and should receive more prominence.

## Repeated Ideas Found

The following concepts appear many times across home and case-study copy. They should not be removed, but they should be placed more strategically:

- Excel-based costs/pricing workflow
- real business / real operations
- store/catalog/cart/orders
- roles and protected admin flows
- payments / Stripe
- SQL Server
- costs, margins, wholesale, retail, final prices
- backend rules / business logic
- admin panel / management modules
- localization ES/EN

Recommended handling:

- Use the hero and bento summary for the high-level version.
- Use `From Excel to a Web System` for the business problem.
- Use `Admin Pricing Calculator` for cost/pricing depth.
- Use `Key Backend Decisions` for SQL Server, roles, views, triggers, and integrations.
- Avoid restating the full list of modules in every section.

## Section-Level Recommendations

### Hero

Current role:

- Introduces Ukiyo, stack, real business, Excel workflow, and full feature scope.
- Shows `store-home.jpg`.
- Provides demo and GitHub CTAs.

Keep:

- Project name.
- Case-study eyebrow.
- Demo and GitHub CTAs.
- Hero image.

Change later:

- Shorten the intro.
- Avoid listing every module in the hero.
- Use the optimized intro from the roadmap:

```txt
Ukiyo Designs is an ASP.NET Core MVC + SQL Server application built to replace an Excel-based pricing workflow with a web system for storefront, orders, roles, payments, and cost administration.
```

### Metrics

Current role:

- Three cards: roles, pricing, integrations.

Problem:

- Useful but too small and generic for the top summary.
- Does not fully answer project type, role, scope, evidence, and recruiter takeaway.

Change later:

- Replace or expand into a bento executive summary.
- Include project type, role, core problem, stack, scope, technical proof, evidence, and recruiter takeaway.

### Video Walkthrough

Current role:

- Strong evidence near the top.
- Contains six highlights.

Keep:

- Video placement near the top.
- Poster using `store-home.jpg`.
- `preload="metadata"`.

Change later:

- Reduce highlights from six to three.
- Recommended highlight groups:
  - customer purchase flow
  - persisted order/admin tracking
  - pricing or management workflow

### Demo Scope

Current role:

- Explains public demo, protected admin areas, and screenshot evidence.

Keep:

- This clarification is important because admin actions should not be publicly exposed.

Change later:

- Make it more compact.
- Place it near CTAs or below the video.
- Avoid giving it the same visual dominance as architecture or calculator.

### Context + Problem + Solution

Current role:

- Context explains spreadsheet-to-system story.
- Problem/Solution cards list operational problems and system capabilities.

Problem:

- These sections overlap and repeat Excel, prices, admin, products, orders, and SQL consistency.

Change later:

- Merge into one section: `From Excel to a Web System`.
- Use a short narrative plus a compact Problem / Solution comparison.
- Keep problem bullets to 3 maximum.
- Keep solution bullets to 4 maximum.

### Architecture + Stack By Layers

Current role:

- Architecture explains ASP.NET Core MVC, EF Core, SQL Server, external services, public/admin flows.
- Stack by layers repeats UI, application, data, and services responsibilities.

Problem:

- High overlap.
- Both sections explain layers and responsibilities.

Change later:

- Merge into `Architecture In One Glance`.
- Keep the simple diagram.
- Keep a compact layer responsibility grid if useful.
- Move flow descriptions into smaller cards or accordions if they become too long.

### Admin Calculator

Current role:

- Lists calculator inputs and final-price dashboard features.

Keep:

- This is the most differentiated proof point.

Change later:

- Move earlier, before secondary backend/data-model depth.
- Give it stronger visual prominence.
- Pair it with `final-prices.png` or `cost-by-product.png`.
- Frame it around business value, not just inputs.

Recommended framing:

```txt
The pricing calculator turns materials, fixed costs, percentage-based costs, and margins into suggested prices for administrative decisions.
```

### Data Model

Current role:

- Shows conceptual relationships and entity/domain groups.

Keep:

- Conceptual relationship diagram.
- Safe, non-sensitive abstraction.

Change later:

- Reduce visible entity-chip density.
- Move detailed entity groups into accordions or compact cards.
- Keep the section focused on what the model demonstrates, not every entity name.

### Backend Decisions + Stack Aside

Current role:

- Lists multi-company, roles, SQL views, SQL triggers, migrations, seed data.
- Shows stack chips.

Problem:

- Some points overlap with architecture, stack layers, data model, and metrics.

Change later:

- Convert into `Key Backend Decisions`.
- Each card should explain why the decision mattered.
- Keep visible decisions high-signal:
  - Identity roles
  - multi-company model
  - SQL views
  - SQL triggers
  - EF Core migrations/seed
  - Stripe/Facebook OAuth
  - localization

### Impact

Current role:

- Explains what the project demonstrates and lists validation/readiness items.

Problem:

- Strong idea, but arrives late.
- One item is defensive: pending improvements are documented internally.

Change later:

- Move a short professional takeaway into the bento summary.
- Keep final impact as concise closing proof.
- Avoid ending high-impact sections with defensive wording.

### Screenshot Gallery

Current role:

- Six screenshots shown at the end.

Problem:

- Visual evidence arrives too late after heavy technical content.

Change later:

- Move 1 or 2 strongest screenshots before deep technical sections.
- Keep full gallery near the end.
- Group final gallery by flow.

Recommended groups:

- Customer flow: `store-home.jpg`, `product-detail.jpg`
- Admin flow: `admin-products.png`, `orders-admin.png`
- Pricing workflow: `cost-by-product.png`, `final-prices.png`

## Visual Asset Inventory

Available screenshots:

- `public/projects/ukiyo/store-home.jpg` - 0.28 MB
- `public/projects/ukiyo/product-detail.jpg` - 0.15 MB
- `public/projects/ukiyo/admin-products.png` - 0.10 MB
- `public/projects/ukiyo/cost-by-product.png` - 0.08 MB
- `public/projects/ukiyo/final-prices.png` - 0.09 MB
- `public/projects/ukiyo/orders-admin.png` - 0.08 MB

Available video:

- `public/videos/ukiyo-walkthrough.mp4` - 10.12 MB

Recommended early visual evidence:

1. `store-home.jpg`
   - Best for immediate product recognition.
   - Already used in the hero and video poster.

2. `final-prices.png`
   - Best proof of the differentiated pricing/admin workflow.
   - Should appear close to the calculator section or early visual proof area.

3. `orders-admin.png` or `cost-by-product.png`
   - `orders-admin.png` proves admin/order management.
   - `cost-by-product.png` supports the pricing workflow.

Recommended early placement:

- Keep `store-home.jpg` in hero.
- Keep video directly after summary/bento.
- Add an early compact visual strip using `final-prices.png` and either `orders-admin.png` or `cost-by-product.png`.

## Candidate New Information Architecture

Recommended future order:

1. Back link
2. Hero
3. Bento executive summary
4. Video walkthrough
5. Early visual proof strip
6. Compact demo scope
7. From Excel to a Web System
8. My role and scope
9. Architecture In One Glance
10. Admin Pricing Calculator
11. Key Backend Decisions
12. Data model and secondary technical details
13. Results and professional takeaway
14. Grouped final gallery
15. Final CTAs

Notes:

- `My role and scope` is currently implicit, not a dedicated section. Adding it could improve recruiter clarity.
- `Final CTAs` are currently only in the hero. Repeating compact CTAs at the end would improve conversion after long reading.
- Avoid global tabs.
- Use accordions only for secondary detail.

## Candidate Bento Cards

Recommended cards for Stage 2/3 implementation:

- Project type: E-commerce + admin business system.
- Role: Backend/data/business-logic implementation, with fullstack delivery where needed.
- Core problem: Excel-based pricing and operational workflows.
- Stack: ASP.NET Core MVC, EF Core, SQL Server, Identity, Stripe, Facebook OAuth, ES/EN.
- Scope: Storefront, cart, orders, users, companies, admin modules, pricing.
- Technical proof: SQL views/triggers, roles, protected admin flows, conceptual data model.
- Evidence: Video walkthrough, live demo, GitHub, screenshots.
- Recruiter takeaway: Demonstrates backend .NET work with real business rules and relational data.

## Candidate Content To Move Into Accordions

Use accordions for secondary details only. Do not hide primary proof points.

Good candidates:

- Detailed data-model entity groups.
- Long SQL views/triggers explanation.
- Full protected demo/admin scope details.
- Detailed architecture flow descriptions.
- Implementation notes around migrations, seed data, and startup repair flows.

Keep visible:

- What Ukiyo is.
- Problem solved.
- Emmanuel's role.
- Core stack.
- Video evidence.
- Admin calculator value.
- Key backend decisions.
- Final professional takeaway.

## Acceptance Criteria For Stage 1

Completed:

- Current sections were mapped.
- Current ES/EN implementation structure was identified.
- Repeated concepts were identified.
- Candidate merges/reductions were documented.
- Media assets were inventoried with file sizes.
- Strong early visual assets were selected.
- Next-stage information architecture was proposed.

Stage 1 does not change application code.
