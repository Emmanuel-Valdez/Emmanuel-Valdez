# Emmanuel Valdez Portfolio

Personal developer portfolio for Emmanuel Valdez Montigel, built with Astro and Tailwind CSS.

The current public UI content is Spanish. Code, comments, repository documentation, and implementation notes should stay in English until an on-demand Spanish-English translation feature is added.

## Tech Stack

- Astro
- Tailwind CSS
- TypeScript
- `@fontsource-variable/onest`

## Project Structure

```text
/
├── public/
│   ├── media/
│   ├── projects/
│   └── favicon.svg
├── src/
│   ├── components/
│   ├── icons/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Main Files

- `src/pages/index.astro`: single portfolio page route.
- `src/layouts/Layout.astro`: HTML shell, metadata, font loading, global styles, header, and footer.
- `src/components/Hero.astro`: intro section and social links.
- `src/components/Experience.astro`: experience section.
- `src/components/Projects.astro`: project data and project cards.
- `src/components/AboutMe.astro`: personal profile section.
- `src/components/Contact.astro`: contact and CV download section.

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

## Deployment

The primary deployment target is Netlify:

```text
https://evalmondev.netlify.app
```

The project also has a Vercel deployment, but Netlify is the preferred production target for now because the provided domain is simpler.

Netlify should run the configured build command:

```sh
npm run build
```

The build command runs `astro check` before `astro build`, so type/configuration errors should fail the deployment before publishing. The publish directory is `dist/`.

## SEO Configuration

`Layout.astro` uses the `site` value from `astro.config.mjs` to generate canonical and social image URLs. The current primary production URL is configured as:

```js
export default defineConfig({
  site: 'https://evalmondev.netlify.app',
  integrations: [tailwind()],
});
```

## Repository Notes

- Do not commit local assistant context files.
- Keep generated build output out of Git.
- Keep visible Spanish UI copy unchanged until the translation feature is implemented.
