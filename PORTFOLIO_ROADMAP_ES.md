# Portfolio Roadmap

## Purpose

Keep the portfolio ready for backend/fullstack .NET job applications by showing real evidence from Ukiyo: e-commerce, business management, data modeling, roles, payments, localization, and business logic.

The portfolio should position Emmanuel Valdez as a backend-focused .NET developer who can build useful business software with ASP.NET Core, C#, SQL Server, authentication, payments, and operational data.

Do not present Docker, Linux, cloud, automated testing, production observability, or production-grade DevOps as experience until they are implemented, verified, and documented with evidence.

## Current State

Already implemented:

- Bilingual Spanish/English portfolio.
- Home routes at `/` and `/en/`.
- Ukiyo case study routes at `/proyectos/ukiyo/` and `/en/projects/ukiyo/`.
- Ukiyo highlighted as the main project.
- Projects shown before work experience on the home page.
- Main copy oriented toward Backend .NET, e-commerce, data, and business management systems.
- Simplified hero CTAs: Ukiyo as primary action, CV as secondary action, email as tertiary action.
- Recruiter quick-profile block near the hero with stack, location, work mode, target roles, and language.
- Featured Ukiyo card with technical metrics: roles, admin modules, integrations, SQL views/triggers, and ES/EN localization.
- Ukiyo case study now starts with a bento executive summary after the hero.
- Ukiyo case study with embedded video walkthrough.
- Ukiyo case study with early visual evidence before architecture/data-model depth.
- Admin pricing calculator promoted as a central proof point.
- Technical depth consolidated into `Key Backend Decisions` with secondary details in accordions.
- Demo-scope block that separates public flows, protected areas, and screenshot/video evidence.
- Safe conceptual data model and implementation details kept as expandable secondary depth.
- Real screenshots grouped by flow and a simple Ukiyo architecture diagram.
- HyperFrames source for the walkthrough video versioned in `ukiyo-walkthrough/` and final MP4 served from `public/videos/`.
- Separate CVs by language in `public/media/`.
- Localized metadata, canonical, hreflang, and Open Graph.
- Stage 9 accessibility/mobile pass: skip link, visible focus, improved touch targets, accessible video summary, semantic details/summary, and build verification.

## Positioning To Preserve

Primary message:

```txt
Backend .NET Developer focused on e-commerce, data, and business management systems
```

Recommended stronger direction:

```txt
Backend .NET Developer focused on business systems, data, and operational logic
```

Spanish option:

```txt
Desarrollador Backend .NET enfocado en sistemas de negocio, datos y logica operativa
```

English option:

```txt
.NET Backend Developer focused on business systems, data, and operational logic
```

Criteria:

- Backend .NET, C#, ASP.NET Core, and SQL Server stay as the main focus.
- Fullstack is presented as a delivery capability, not the primary identity.
- Ukiyo must read as real business software, not a clone, tutorial, or academic project.
- E-commerce experience should explain better software decisions, not replace the backend narrative.
- Keep the tone confident but not inflated; junior/early-career credibility comes from ownership, clarity, and evidence.
- Do not overclaim infrastructure, DevOps, Docker, Linux, cloud, observability, or automated testing.

## Main Diagnosis From Review

The portfolio already meets its main goal, but the Ukiyo case study is too dense.

The issue is not content quality. The issue is that too much evidence has the same visual and narrative weight:

- video walkthrough
- demo scope
- context
- problem and solution
- architecture
- stack by layers
- admin calculator
- data model
- backend highlights
- impact
- screenshots

This makes the page exhaustive but cognitively heavy. The next improvement should reduce perceived load, improve scanability, and preserve technical credibility.

## Strategic Direction For The Next Iteration

Do not redesign the whole portfolio.

Focus on a narrative and visual refactor of the Ukiyo case study:

```txt
Fewer blocks, stronger hierarchy, earlier visual evidence, clearer technical story, and deeper details only where they add signal.
```

Preferred UX direction:

```txt
Bento summary-first + narrative scroll + early visual evidence + discreet internal navigation + accordions for secondary technical details
```

Do not use global tabs as the main pattern. Tabs hide important evidence, add interaction friction, complicate mobile/accessibility, and fragment the case-study story.

## Priority Roadmap

### Stage 1: Audit And Map Current Ukiyo Content

Goal: understand what exists before editing.

Tasks:

- Review both Ukiyo routes: `/proyectos/ukiyo/` and `/en/projects/ukiyo/`.
- Inspect `src/pages/proyectos/ukiyo.astro`, `src/pages/en/projects/ukiyo.astro`, and `src/data/i18n.ts`.
- List every current section in order.
- Mark repeated ideas, especially repeated references to Excel, costs, pricing, orders, roles, payments, SQL Server, and real business.
- Identify technical details that should remain visible versus details that can move into accordions.
- Identify the 2 or 3 strongest screenshots for early placement.
- Confirm ES/EN copy remains equivalent in meaning, not necessarily literal word-for-word.

Acceptance criteria:

- The future agent knows which sections will be kept, merged, moved, or reduced.
- No content is deleted blindly; redundant content is consolidated.

### Stage 2: Rewrite The Case Study Narrative

Goal: make Ukiyo read like an engineering story, not a feature inventory.

Target narrative:

1. What Ukiyo is.
2. What business problem existed.
3. What Emmanuel built.
4. What backend decisions mattered.
5. What evidence proves the system works.
6. What the project demonstrates for a backend .NET role.

Recommended Spanish intro:

```txt
Ukiyo Designs es una aplicacion ASP.NET Core MVC + SQL Server creada para reemplazar un flujo de pricing en Excel por un sistema web con tienda, ordenes, roles, pagos y administracion de costos.
```

Recommended English intro:

```txt
Ukiyo Designs is an ASP.NET Core MVC + SQL Server application built to replace an Excel-based pricing workflow with a web system for storefront, orders, roles, payments, and cost administration.
```

Copy principles:

- Prefer short, concrete paragraphs.
- Explain decisions, not just technologies.
- Use active ownership verbs: designed, implemented, modeled, integrated, documented, simplified.
- Keep backend ownership explicit.
- Avoid repeating the same proof points in every section.
- Avoid defensive closing copy; acknowledge future improvements only when needed and without weakening the project.

Concepts to reduce repetition:

- real business
- Excel workflow
- costs and pricing
- SQL Server
- roles
- orders
- payments
- backend rules

These concepts should stay, but each one should appear where it adds the most signal.

Acceptance criteria:

- Backend focus is obvious within 10 seconds.
- Ukiyo is clearly a real business system.
- The case study explains decisions and ownership, not just features.
- Spanish and English versions sound natural in their own language.

### Stage 3: Restructure Ukiyo Into A Summary-First Page

Goal: reduce perceived density while preserving evidence.

Recommended section order:

1. Hero
2. Bento summary
3. Early visual evidence
4. Problem and context
5. My role and scope
6. Solution overview
7. Architecture in one glance
8. Admin pricing calculator
9. Key backend decisions
10. Data model and technical details
11. Results and professional takeaway
12. Final gallery and CTAs

Sections to merge:

- Merge current context + problem + solution into one stronger section, for example: `From Excel to a Web System`.
- Merge architecture + stack by layers into `Architecture In One Glance`.
- Merge backend highlights + data-model details into `Key Backend Decisions`, with secondary details moved into accordions.
- Keep demo scope, but make it compact and close to the video/CTAs.

Sections to reduce:

- Demo scope should be useful but not visually dominant.
- Long bullet lists should be reduced to 3 or 4 high-signal bullets.
- Technical explanations should appear after the reader understands the business value.

Acceptance criteria:

- The page keeps a single vertical narrative scroll.
- No global tab system is introduced.
- The most important project value is visible before deep technical content.

### Stage 4: Add A Bento Executive Summary

Status: completed.

Implemented in:

- `src/pages/proyectos/ukiyo.astro`
- `src/data/i18n.ts`

Notes:

- The bento appears after the hero and before long-form sections.
- It includes project type, role, core problem, stack, scope, technical proof, evidence, and recruiter takeaway.
- Primary cards receive stronger visual weight through `emphasis: true`.
- The implementation is shared by the Spanish and English Ukiyo routes through localized content.

Goal: let recruiters and hiring managers understand the case study at a glance.

The bento summary should appear near the top, after the hero and before long-form sections.

Required bento cards:

- Project type: e-commerce + admin business system.
- Role: backend/data/business-logic implementation, with fullstack delivery where needed.
- Core problem: Excel-based pricing and operational workflows.
- Stack: ASP.NET Core MVC, EF Core, SQL Server, Identity, Stripe, Facebook OAuth, localization.
- Scope: storefront, cart, orders, users, companies, admin modules, pricing.
- Technical proof: SQL views/triggers, roles, protected admin flows, conceptual data model.
- Evidence: video walkthrough, live demo, GitHub, screenshots.
- Recruiter takeaway: demonstrates backend .NET work with real business rules and data.

Writing rules for bento cards:

- Each card must be short and scannable.
- Avoid long paragraphs.
- Use specific labels instead of generic feature names.
- Give primary cards more visual weight than metadata cards.
- The bento is an overview, not a replacement for the full narrative below.

Acceptance criteria:

- A recruiter can understand the project in 20 seconds.
- The bento does not become a decorative dashboard.
- The bento stacks cleanly on mobile.

### Stage 5: Restore Early Visual Impact

Status: completed.

Implemented in:

- `src/pages/proyectos/ukiyo.astro`
- `src/data/i18n.ts`

Notes:

- Visual proof appears before architecture/data-model depth.
- The early evidence uses customer flow and cost data screenshots.
- The final gallery remains available near the end and is grouped by flow.
- `final-prices.png` is reserved for the pricing calculator proof point to avoid duplicate visual weight.

Goal: keep the project visually convincing before the page becomes technical.

Tasks:

- Keep the video walkthrough near the top.
- Reduce video highlights to 3 strong points:
  - customer purchase flow
  - persisted order/admin tracking
  - pricing or management workflow
- Move 1 or 2 strong screenshots above deep technical sections.
- Prefer screenshots that prove business value, such as storefront/product flow and pricing/final prices.
- Keep the full gallery near the end, grouped by flow.

Suggested gallery groups:

- Customer flow
- Admin flow
- Pricing workflow
- Orders and management

Acceptance criteria:

- Visual proof appears before architecture/data-model depth.
- Screenshots support the story instead of feeling like decoration.
- The full gallery remains available without overwhelming the top of the page.

### Stage 6: Give The Admin Pricing Calculator More Prominence

Status: completed.

Implemented in:

- `src/pages/proyectos/ukiyo.astro`
- `src/data/i18n.ts`

Notes:

- The calculator appears before secondary backend/data-model details.
- It is framed through cost inputs, business rules, SQL support, and admin outcome.
- `final-prices.png` is used as the strongest visual proof for this section.

Goal: make the most differentiated part of Ukiyo stand out.

Why this matters:

- The calculator separates Ukiyo from a generic e-commerce project.
- It connects backend, SQL Server, business rules, costs, and administrative decision-making.
- It proves the project solves a real operational problem.

Recommended section framing:

```txt
The pricing calculator turns materials, fixed costs, percentage-based costs, and margins into suggested prices for administrative decisions.
```

Recommended content blocks:

- Cost inputs: materials, packaging, fixed costs, platform/payment fees.
- Business rules: wholesale and suggested retail margins.
- SQL support: views/triggers for consistent totals.
- Admin outcome: final prices and cost visibility for decision-making.

Acceptance criteria:

- The calculator feels like a central proof point, not just another section.
- It appears before secondary backend/data-model details.

### Stage 7: Convert Technical Depth Into Key Decisions

Status: completed.

Implemented in:

- `src/pages/proyectos/ukiyo.astro`
- `src/data/i18n.ts`

Notes:

- Scattered backend/data-model depth was consolidated into `Key Backend Decisions`.
- Decision cards cover ASP.NET Core MVC, EF Core + SQL Server, Identity roles, SQL views, SQL triggers, Stripe + Facebook OAuth, and localization.
- Conceptual data model, stack by layer, and implementation notes now live in native accordions.

Goal: show backend depth without overwhelming the reader.

Replace scattered technical sections with a clearer section:

```txt
Key Backend Decisions
```

Recommended cards:

- ASP.NET Core MVC for storefront and admin flows.
- EF Core + SQL Server for relational persistence.
- Identity roles for customer, company, employee, and admin flows.
- SQL views for pricing/cost calculations.
- SQL triggers for keeping totals consistent.
- Stripe and Facebook OAuth as external integrations.
- Localization for Spanish and English public content.

For each decision, explain one of:

- what problem it solved
- why it was chosen
- what tradeoff existed
- what it demonstrates technically

Move secondary details into accordions:

- entity/domain group details
- detailed SQL explanation
- protected demo/admin scope details
- implementation notes that are useful but not essential to first scan

Acceptance criteria:

- Technical credibility increases while visible density decreases.
- Essential project value remains visible.
- Accordions are used only for secondary depth, not primary story.

### Stage 8: Improve Home Page Copy Only If Needed

Status: completed.

Implemented in:

- `src/data/i18n.ts`

Notes:

- The hero now uses the stronger business-systems/data/operational-logic positioning.
- Secondary project descriptions were reframed as supporting evidence and learning/progression, not equal proof to Ukiyo.
- Home page order and structure stayed unchanged.

Goal: keep the home page focused and avoid letting secondary projects compete with Ukiyo.

Home page order is currently good:

```txt
Hero -> Projects -> Experience -> About -> Contact
```

Potential improvements:

- Keep Ukiyo as the main project with the strongest visual weight.
- Present secondary projects as support/progression, not equal proof.
- Keep project cards short:
  - what the app does
  - what Emmanuel built
  - backend technologies used
  - one concrete result or learning
- Consider target role wording:
  - primary: Backend .NET / ASP.NET Core
  - secondary: fullstack-capable when product delivery requires it

Acceptance criteria:

- The home page still sends users quickly to Ukiyo.
- Backend positioning stays stronger than generic fullstack positioning.
- Secondary projects do not dilute the main brand.

### Stage 9: Mobile, Accessibility, And QA Requirements

Status: completed.

Implemented in:

- `src/layouts/Layout.astro`
- `src/components/Header.astro`
- `src/components/LinkButton.astro`
- `src/components/SocialPill.astro`
- `src/pages/proyectos/ukiyo.astro`
- `src/data/i18n.ts`

Notes:

- Global skip link, page language, localized metadata, canonical, hreflang, and focus-visible styling are present.
- Header links and shared CTA components now have larger mobile touch targets and clearer keyboard focus states.
- Ukiyo technical accordions use native `details`/`summary` with clearer focus styling and visible open indicators.
- The walkthrough video includes an accessible localized summary below the video for users who cannot consume the MP4 directly.
- Build verification remains required after changes; production Netlify/mobile video playback still needs manual post-deploy review.

Goal: preserve usability while introducing bento, navigation, and accordions.

Requirements:

- Mobile-first layout.
- Bento cards stack cleanly on small screens.
- No horizontal scrolling.
- Internal navigation must not block content on mobile.
- If sticky navigation is used, it must be discreet and desktop-focused.
- Accordions must use semantic buttons.
- Accordions must expose expanded/collapsed state with `aria-expanded`.
- Keyboard navigation must work for every interactive element.
- Focus states must be visible.
- Heading hierarchy must remain logical.
- Links and CTAs must have descriptive text.
- Color contrast must meet WCAG AA.
- Visual evidence must include meaningful alt text or accessible labels.
- Motion must respect `prefers-reduced-motion` if animations are added.

QA routes:

- `/`
- `/en/`
- `/proyectos/ukiyo/`
- `/en/projects/ukiyo/`

Required verification after code changes:

```sh
npm run build
```

Acceptance criteria:

- Build passes with 0 errors.
- Desktop and mobile layouts are visually checked.
- Video playback and perceived MP4 load are checked in production after push.
- ES/EN routes remain synchronized.

## Copy Optimization Checklist

Use this checklist during any future rewrite.

### Keep

- Backend .NET as the main identity.
- Business-system framing.
- Real e-commerce and operational context.
- SQL Server, EF Core, Identity, Stripe, OAuth, localization.
- Evidence-based tone.
- Honest scope boundaries.

### Reduce

- Long paragraphs.
- Repeated lists of the same modules.
- Generic fullstack language.
- Defensive disclaimers in high-impact sections.
- Technology lists without explanation.

### Avoid

- Claims of production Docker/cloud/Linux/testing experience without evidence.
- Inflated senior-level language.
- Hiding the strongest project evidence inside tabs or accordions.
- Adding new sections by inertia.
- Rewriting the whole portfolio when only Ukiyo needs focused improvement.

### Prefer

- `Built`, `modeled`, `implemented`, `integrated`, `documented`, `validated`.
- `business rules`, `relational data`, `pricing workflow`, `admin flow`, `role-based access`, `external integrations`.
- Short explanations of why a decision mattered.
- Natural ES/EN equivalents rather than literal translations.

## Future Backend-Signal Improvements

These improvements would strengthen the backend profile, but they must only be added to the public portfolio after they are implemented and verified:

1. Automated tests for critical Ukiyo flows.
2. Short technical documentation for relevant backend decisions.
3. Safe explanations of queries, views, triggers, or migrations.
4. Serilog logging.
5. Centralized exception-handling middleware.
6. Fake email sender for demo transactional flows.
7. Docker for reproducible local execution.
8. Documented Linux/cloud deployment with evidence.

## Maintenance Rules

- If visible Spanish copy changes, update English copy too.
- If visible English copy changes, update Spanish copy too.
- If a route changes, verify canonical, hreflang, and language-switch URLs.
- If media is added, verify file weight, mobile loading, controls, alt text, and accessible labels.
- Do not claim production Docker until it exists.
- Do not present Linux/cloud as experience until there is documented deployment evidence.
- Do not present tests as experience until they are implemented.
- Do not commit `dist/`, secrets, credentials, editor-local files, or sensitive data.
- Do not add sensitive personal data to public CV files or the repository.
- Do not add heavy media without checking mobile load.

## Final Definition Of Done For The Ukiyo Refactor

The iteration is successful when:

- The Ukiyo case study uses a summary-first structure.
- A bento overview appears near the top.
- The page does not use global tabs.
- Visual evidence appears early.
- The page keeps a single narrative scroll.
- Internal navigation, if added, is discreet.
- Secondary technical details move into accessible accordions.
- Repeated content is reduced.
- The admin pricing calculator has stronger prominence.
- Backend decisions are easier to scan.
- Recruiters can understand the project quickly.
- Hiring managers can still see technical depth.
- Mobile layout remains clean.
- Accessibility expectations are met.
- Existing Astro architecture is respected.
- No unnecessary dependencies are added.
- The four public routes build and render correctly.
