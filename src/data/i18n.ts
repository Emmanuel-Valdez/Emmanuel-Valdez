export type Locale = 'es' | 'en';

export const routes = {
  es: {
    home: '/',
    vaultshop: '/proyectos/vaultshop/',
  },
  en: {
    home: '/en/',
    vaultshop: '/en/projects/vaultshop/',
  },
} as const;

export const cvFiles = {
  es: {
    href: '/media/Emmanuel_Valdez_Portfolio_CV_ES.pdf',
    download: 'Emmanuel-Valdez-Portfolio-CV-ES.pdf',
  },
  en: {
    href: '/media/Emmanuel_Valdez_Portfolio_CV_EN.pdf',
    download: 'Emmanuel-Valdez-Portfolio-CV-EN.pdf',
  },
} as const;

export const common = {
  es: {
    skipLink: 'Saltar al contenido principal',
    headerAriaLabel: 'Navegación principal',
    brand: {
      label: 'ev_',
      ariaLabel: 'Inicio del portfolio de Emmanuel Valdez, firma ev_',
    },
    nav: {
      experience: 'Experiencia',
      projects: 'Proyectos',
      about: 'Sobre mí',
      contact: 'Contacto',
    },
    language: {
      label: 'Cambiar idioma',
      current: 'ES',
      alternate: 'EN',
      alternateHref: routes.en.home,
    },
    theme: {
      toLight: 'Activar tema claro',
      toDark: 'Activar tema oscuro',
    },
    footer: {
      brand: 'Emmanuel Valdez · evaldez.ar',
      about: 'Sobre mí',
      contact: 'Contacto',
    },
  },
  en: {
    skipLink: 'Skip to main content',
    headerAriaLabel: 'Main navigation',
    brand: {
      label: 'ev_',
      ariaLabel: 'Emmanuel Valdez portfolio home, ev_ signature',
    },
    nav: {
      experience: 'Experience',
      projects: 'Projects',
      about: 'About',
      contact: 'Contact',
    },
    language: {
      label: 'Change language',
      current: 'EN',
      alternate: 'ES',
      alternateHref: routes.es.home,
    },
    theme: {
      toLight: 'Switch to light theme',
      toDark: 'Switch to dark theme',
    },
    footer: {
      brand: 'Emmanuel Valdez · evaldez.ar',
      about: 'About',
      contact: 'Contact',
    },
  },
} as const;

export const homeContent = {
  es: {
    meta: {
      title: 'Emmanuel Valdez | Desarrollador Full-Stack de aplicaciones web',
      description:
        'Portfolio de Emmanuel Valdez, Desarrollador Full-Stack de aplicaciones web con una base fuerte en backend: ASP.NET Core, C# y PostgreSQL, junto con Astro, TypeScript y Tailwind CSS.',
    },
    sections: {
      experience: 'Experiencia y trabajo para clientes',
      projects: 'Proyectos',
      about: 'Sobre mí',
      contact: 'Hablemos',
    },
    hero: {
      name: 'Emmanuel Valdez',
      brandLine: 'evaldez.ar · Desarrollo de software y aplicaciones web',
      title: 'Desarrollador Full-Stack enfocado en aplicaciones web, con una base fuerte en backend',
      lines: [
        {
          text: 'Construyo aplicaciones web usables para necesidades reales, con una base fuerte en backend.',
        },
        {
          text: ' VaultShop es mi ejemplo más profundo de backend y sistemas: ASP.NET Core, PostgreSQL, Docker y pagos en un VPS real.',
          class: 'text-note-blue',
        },
        {
          text: ' También entregué sitios con Astro y TypeScript para clientes, con foco en la experiencia de cara al público.',
        },
        {
          text: ' Desde Mendoza, Argentina.',
          class: 'text-note-red',
        },
      ],
      stackAriaLabel: 'Tecnologías principales',
      stack: ['ASP.NET Core', 'C#', 'PostgreSQL', 'TypeScript', 'Astro', 'Tailwind CSS', 'Docker', 'CI/CD'],
      availabilityLabel: 'Disponible para trabajar',
      ctas: {
        ariaLabel: 'Acciones principales',
        project: 'Ver caso VaultShop',
        projectHref: routes.es.vaultshop,
        contact: 'Escribirme por email',
        contactHref: 'mailto:contact@evaldez.ar',
        cv: 'Descargar CV',
        cvFile: cvFiles.es,
      },
      recruiter: {
        title: 'Perfil rápido',
        ariaLabel: 'Resumen profesional rápido',
        items: [
          { label: 'Stack', value: 'C#, ASP.NET Core, PostgreSQL, TypeScript' },
          { label: 'Ubicación', value: 'Mendoza, Argentina' },
          { label: 'Modalidad', value: 'Remoto / híbrido' },
          { label: 'Roles objetivo', value: 'Desarrollador Full-Stack / Desarrollador de Software' },
          { label: 'Idioma', value: 'Español / Inglés' },
        ],
      },
      socialAriaLabel: 'Perfiles profesionales',
    },
    experience: [
      {
        date: '2020 - Presente',
        title: 'Operaciones e-commerce y desarrollo de plataforma',
        company: 'Ukiyo Studio',
        description:
          'Gestioné operaciones completas de tienda online y desarrollé VaultShop como plataforma backend para Ukiyo Studio: catálogo, stock, pedidos, precios, roles y administración. VaultShop es el entorno de prueba donde validé todas las capacidades que hoy ofrece Ukiyo Studio.',
        highlights: [
          'Coordiné migración de TiendaNube a Tienda Negocio manteniendo continuidad operativa.',
          'Construí VaultShop como plataforma backend con ASP.NET Core, PostgreSQL, Docker, pagos y roles para Ukiyo Studio.',
          'La tienda se instala como app desde el celular, con ícono propio en la pantalla de inicio, sobre la versión web desplegada.',
          'Gestión diaria de catálogo, stock, pedidos, atención al cliente y logística de despacho.',
        ],
        tags: ['E-commerce', 'ASP.NET Core', 'VaultShop', 'Ukiyo Studio', 'Pricing'],
        tagsAriaLabel: 'Áreas de experiencia',
        link: 'https://ukiyostudio.evaldez.ar',
        linkLabel: 'Ukiyo Studio',
      },
      {
        date: '2026',
        title: 'Desarrollo web freelance',
        company: 'Pastelería Ivanna',
        description:
          'Desarrollé el sitio de la pastelería como trabajo freelance: catálogo de productos y contenido en Astro Content Collections, imágenes optimizadas y consultas o pedidos derivados a WhatsApp como único canal de contacto. El despliegue es automático con CI/CD.',
        highlights: [
          'Sitio Astro + TypeScript con catálogo y contenido organizado en Content Collections.',
          'WhatsApp como único canal de pedidos y consultas, sin backend propio.',
          'Imágenes optimizadas con astro:assets y despliegue CI/CD automatizado.',
        ],
        tags: ['Freelance', 'Astro', 'TypeScript', 'Tailwind CSS', 'CI/CD'],
        tagsAriaLabel: 'Áreas de experiencia',
        link: 'https://pasteleriaivanna.evaldez.ar',
        linkLabel: 'Ver sitio',
      },
      {
        date: '2026',
        title: 'Desarrollo web full-stack',
        company: 'Proyecto por encargo',
        description:
          'Construí por encargo una invitación digital interactiva para un evento privado, con confirmación de asistencia (RSVP), playlist colaborativa y concurso votado por los invitados. Stack: Astro SSR, TypeScript, Tailwind 4, SQLite con Drizzle, Docker y CI/CD.',
        highlights: [
          'RSVP, playlist colaborativa y concurso votado por invitados en una sola experiencia.',
          'Astro SSR con TypeScript, Tailwind 4, SQLite/Drizzle y Docker.',
          'CI/CD automatizado y verificación con build/check antes de desplegar.',
          'Trabajo guiado por OpenSpec y agentes de código, con revisión humana y verificación técnica.',
        ],
        tags: ['Full-Stack', 'Astro SSR', 'TypeScript', 'SQLite', 'OpenSpec'],
        tagsAriaLabel: 'Áreas de experiencia',
        link: 'https://juli30.evaldez.ar',
        linkLabel: 'Ver demo',
      },
    ],
    projects: {
      featuredStudyLabel: 'Leer caso de estudio',
      featuredStudyHref: routes.es.vaultshop,
      supportingLabel: 'Otros proyectos técnicos',
      stackAriaPrefix: 'Stack técnico de',
      metricsAriaPrefix: 'Métricas técnicas de',
      buttons: {
        code: 'Ver código en GitHub',
        preview: 'Ver demo',
      },
      items: [
        {
          title: 'VaultShop',
          eyebrow: 'Caso técnico destacado · e-commerce desplegado en VPS real',
          description:
            'Aplicación ASP.NET Core 8 MVC desplegada en un VPS Ubuntu con PostgreSQL, Docker Compose, MinIO, Stripe, Mercado Pago, Identity roles con Google OAuth, localización ES/EN y Nginx HTTPS.',
          stack: [
            'ASP.NET Core 8 MVC',
            'Entity Framework Core + PostgreSQL',
            'ASP.NET Core Identity',
            'Stripe + Mercado Pago',
            'Google OAuth',
            'MinIO / S3 storage',
            'Docker Compose + Nginx',
            'Ubuntu VPS',
          ],
          highlights: [
            'Self-hosted en Oracle Cloud VPS con Docker Compose y Nginx HTTPS reverse proxy.',
            'Multi-store platform: VaultShop + UkiyoStudio comparten codebase con DB/MinIO aislados por store.',
            'Backups automatizados (cron pg_dump + MinIO mirror) con restore verificado. Health checks y rate limiting.',
            'CI con GitHub Actions: restore, build y 821 tests en cada push a main.',
            'Tema configurable, guardas de pedidos en admin, manifest web dinámico por store (nombre, iconos, colores y display standalone).',
          ],
          metrics: [
            { value: '8+', label: 'tecnologías' },
            { value: '3', label: 'métodos de pago' },
            { value: '821', label: 'tests' },
            { value: 'GitHub Actions', label: 'CI/CD' },
            { value: 'Ubuntu 24.04', label: 'VPS' },
          ],
          link: 'https://vaultshop.evaldez.ar',
          github: 'https://github.com/Emmanuel-Valdez/VaultShop',
          image: '/projects/vaultshop/storefront.webp',
          imageMobile: '/projects/vaultshop/mobile-storefront.webp',
          imageAlt: 'Captura real de la tienda VaultShop con catálogo de productos',
          tags: ['CSharp', 'GitHub', 'PostgreSQL'],
        },
        {
          title: 'Cotizador Express para Tienda de Ropa',
          description:
            'Aplicación C# Windows Forms que modela lógica de cotización, historial, restricciones de stock y manejo de errores para una tienda de ropa.',
          link: '',
          github: 'https://github.com/Emmanuel-Valdez/ProyectoCQuarq',
          image: '/projects/CotizadorTiendaRopa.webp',
          imageAlt: 'Captura de la calculadora de costos para tienda de ropa en C#',
          tags: ['CSharp', 'GitHub'],
        },
        {
          title: 'Tarjeta de invitación: cumpleaños temático de disfraces',
          description:
            'Invitación digital interactiva desarrollada por encargo para un evento privado: RSVP, playlist colaborativa y concurso votado por los invitados. Astro SSR, TypeScript, Tailwind 4, SQLite/Drizzle, Docker y CI/CD, con OpenSpec y agentes de código bajo revisión humana.',
          link: 'https://juli30.evaldez.ar',
          github: '',
          image: '/projects/tarjeta-cumple.svg',
          imageAlt: 'Portada ilustrativa de la tarjeta de cumpleaños temático de disfraces: composición abstracta con motivo de cine, no es una captura del sitio',
          tags: ['Astro', 'TypeScript', 'Tailwind', 'SQLite', 'OpenSpec'],
        },
      ],
    },
    about: {
      focusAreas: [
        {
          title: 'Backend y datos',
          description: '.NET, C#, PostgreSQL, reglas de negocio, roles, cálculos y persistencia relacional.',
        },
        {
          title: 'Procesos reales',
          description: 'E-commerce, costos, precios, inventario, órdenes, usuarios y decisiones administrativas.',
        },
        {
          title: 'Entrega y SDD',
          description: 'Requisitos, criterios de aceptación y tareas acotadas antes de implementar; revisión humana y verificación con check/build y comportamiento renderizado.',
        },
      ],
      intro:
        'Soy Emmanuel Valdez, desarrollador de software y aplicaciones web. Trabajo de punta a punta, con una base fuerte en backend:',
      strong: 'C#, ASP.NET Core, PostgreSQL, Astro y TypeScript.',
      paragraphs: [
        'Vengo de una base técnica en producción industrial y automatización, por eso tiendo a pensar el software como una herramienta para ordenar procesos reales: costos, inventario, ventas, logística, usuarios y decisiones administrativas.',
        'Esa mirada se refleja en VaultShop, el caso de estudio que construí, despliegé y documenté en detalle — desde el modelo de datos relacional hasta la calculadora de precios administrativa. También entregué sitios para clientes con Astro y TypeScript, donde la experiencia de cara al público y los detalles de contenido importan.',
        'Trabajo con Spec-Driven Development: antes de implementar, defino requisitos, criterios de aceptación y tareas acotadas. OpenSpec registra la propuesta, la especificación y las tareas; los agentes de código implementan tareas acotadas, y yo tomo las decisiones y reviso el resultado con checks, build y comportamiento renderizado. Eso reduce la ambigüedad y acelera las iteraciones, sin reemplazar la revisión humana.',
        'Actualmente estoy consolidando el portfolio alrededor de evidencia verificable: sistemas desplegados, datos relacionales, pagos, roles, infraestructura y documentación operativa.',
      ],
      closing:
        'También fui maestro particular y ayudante de cátedra en matemáticas, física e inglés. Esa experiencia fortaleció mi forma de explicar problemas complejos, documentar decisiones y colaborar con otras personas.',
      imageAlt: 'Retrato de Emmanuel Valdez',
    },
    contact: {
      text: '¿Buscás un desarrollador full-stack o de software para aplicaciones web, sistemas internos o e-commerce? Estoy abierto a roles full-stack y backend, con una base fuerte en backend y entrega de punta a punta, en modalidad remota o híbrida desde Mendoza. Escribime por email o descargá mi CV.',
      emailLabel: 'Escribirme por email',
      cvLabel: 'Descargar CV en PDF',
      responseTime: 'Respondo en 24-48 hs',
      cv: cvFiles.es,
    },
    proofOfWork: {
      eyebrow: 'Evidencia rápida',
      title: 'Proof of work',
      description: 'Links verificables para hiring managers.',
      updatedLabel: 'Evidencia actualizada el',
      statusOk: 'En vivo',
      statusFail: 'Sin respuesta',
      items: [
        { label: 'Demo en vivo', value: 'vaultshop.evaldez.ar', href: 'https://vaultshop.evaldez.ar' },
        { label: 'GitHub', value: 'github.com/Emmanuel-Valdez/VaultShop', href: 'https://github.com/Emmanuel-Valdez/VaultShop' },
        { label: 'CI', value: 'GitHub Actions — 821 tests', href: 'https://github.com/Emmanuel-Valdez/VaultShop/actions' },
        { label: 'Commit history', value: '300+ commits', href: 'https://github.com/Emmanuel-Valdez/VaultShop/commits/main' },
        { label: 'Runbook', value: 'docs/operations/runbook.md', href: 'https://github.com/Emmanuel-Valdez/VaultShop/blob/main/docs/operations/runbook.md' },
        { label: 'Arquitectura', value: 'docs/architecture.md', href: 'https://github.com/Emmanuel-Valdez/VaultShop/blob/main/docs/architecture.md' },
      ],
    },
    plan306090: {
      eyebrow: 'Plan de trabajo',
      title: 'Qué puedo hacer en 30/60/90 días',
      description: 'Si me sumás a tu equipo, este es mi plan de aporte.',
      items: [
        {
          period: '30 días',
          title: 'Onboarding y primeras contribuciones',
          description: 'Entender el dominio, el stack y los procesos del equipo. Primeros PRs con bugfixes y mejoras pequeñas. Documentar decisiones técnicas.',
        },
        {
          period: '60 días',
          title: 'Autonomía en features',
          description: 'Tomar features end-to-end con supervisión ligera. Mejorar tests, CI/CD y observabilidad. Proponer mejoras de arquitectura.',
        },
        {
          period: '90 días',
          title: 'Impacto real',
          description: 'Liderar un feature o mejora de principio a fin. Mentorizar juniors si aplica. Dejar el codebase mejor que lo encontré.',
        },
      ],
    },
  },
  en: {
    meta: {
      title: 'Emmanuel Valdez | Full-Stack Software Developer — Web Applications',
      description:
        'Portfolio of Emmanuel Valdez, a Full-Stack Software Developer building web applications with a strong backend foundation in ASP.NET Core, C#, and PostgreSQL, plus Astro, TypeScript, and Tailwind CSS.',
    },
    sections: {
      experience: 'Experience & Client Work',
      projects: 'Projects',
      about: 'About Me',
      contact: 'Let\'s Talk',
    },
    hero: {
      name: 'Emmanuel Valdez',
      brandLine: 'evaldez.ar · Software and web application development',
      title: 'Full-Stack Software Developer building web applications, with a strong backend foundation',
      lines: [
        {
          text: 'I build usable web applications for real needs, with a strong backend foundation.',
        },
        {
          text: ' VaultShop is my deepest backend and systems example: ASP.NET Core, PostgreSQL, Docker, and payments on a real VPS.',
          class: 'text-note-blue',
        },
        {
          text: ' I have also delivered Astro and TypeScript sites for clients, focused on the public-facing experience.',
        },
        {
          text: ' Based in Mendoza, Argentina.',
          class: 'text-note-red',
        },
      ],
      stackAriaLabel: 'Core technologies',
      stack: ['ASP.NET Core', 'C#', 'PostgreSQL', 'TypeScript', 'Astro', 'Tailwind CSS', 'Docker', 'CI/CD'],
      availabilityLabel: 'Available for work',
      ctas: {
        ariaLabel: 'Primary actions',
        project: 'View VaultShop case study',
        projectHref: routes.en.vaultshop,
        contact: 'Email me',
        contactHref: 'mailto:contact@evaldez.ar',
        cv: 'Download CV',
        cvFile: cvFiles.en,
      },
      recruiter: {
        title: 'Quick profile',
        ariaLabel: 'Quick professional summary',
        items: [
          { label: 'Stack', value: 'C#, ASP.NET Core, PostgreSQL, TypeScript' },
          { label: 'Location', value: 'Mendoza, Argentina' },
          { label: 'Work mode', value: 'Remote / hybrid' },
          { label: 'Target roles', value: 'Full-Stack Developer / Software Developer' },
          { label: 'Languages', value: 'Spanish / English' },
        ],
      },
      socialAriaLabel: 'Professional profiles',
    },
    experience: [
      {
        date: '2020 - Present',
        title: 'E-commerce operations and platform development',
        company: 'Ukiyo Studio',
        description:
          'I managed full online store operations and built VaultShop as the backend platform for Ukiyo Studio: catalog, stock, orders, pricing, roles, and administration. VaultShop is the testbed where I built and validated all the capabilities that Ukiyo Studio now offers.',
        highlights: [
          'Coordinated migration from TiendaNube to Tienda Negocio while maintaining operational continuity.',
          'Built VaultShop as a backend platform with ASP.NET Core, PostgreSQL, Docker, payments, and roles for Ukiyo Studio.',
          'The store installs as an app from the phone, with its own icon on the home screen, running on the deployed web version.',
          'Daily management of catalog, stock, orders, customer service, and shipping logistics.',
        ],
        tags: ['E-commerce', 'ASP.NET Core', 'VaultShop', 'Ukiyo Studio', 'Pricing'],
        tagsAriaLabel: 'Experience areas',
        link: 'https://ukiyostudio.evaldez.ar',
        linkLabel: 'Ukiyo Studio',
      },
      {
        date: '2026',
        title: 'Freelance Web Developer',
        company: 'Pastelería Ivanna',
        description:
          'I built the bakery\'s website as freelance work: product catalog and content in Astro Content Collections, optimized imagery, and all inquiries and orders routed through WhatsApp as the only contact channel. Deployment runs automatically with CI/CD.',
        highlights: [
          'Astro + TypeScript site with catalog and content organized in Content Collections.',
          'WhatsApp as the only ordering and inquiry channel, with no custom backend.',
          'Optimized imagery with astro:assets and automated CI/CD deployment.',
        ],
        tags: ['Freelance', 'Astro', 'TypeScript', 'Tailwind CSS', 'CI/CD'],
        tagsAriaLabel: 'Experience areas',
        link: 'https://pasteleriaivanna.evaldez.ar',
        linkLabel: 'View website',
      },
      {
        date: '2026',
        title: 'Full-Stack Web Development',
        company: 'Commissioned project',
        description:
          'I built an interactive digital invitation for a private event on commission, with RSVP, a collaborative playlist, and a guest-voted contest. Stack: Astro SSR, TypeScript, Tailwind 4, SQLite with Drizzle, Docker, and CI/CD.',
        highlights: [
          'RSVP, collaborative playlist, and a guest-voted contest in a single experience.',
          'Astro SSR with TypeScript, Tailwind 4, SQLite/Drizzle, and Docker.',
          'Automated CI/CD with build/check verification before deploy.',
          'Delivered with OpenSpec and coding agents, with human review and technical verification.',
        ],
        tags: ['Full-Stack', 'Astro SSR', 'TypeScript', 'SQLite', 'OpenSpec'],
        tagsAriaLabel: 'Experience areas',
        link: 'https://juli30.evaldez.ar',
        linkLabel: 'View demo',
      },
    ],
    projects: {
      featuredStudyLabel: 'Read case study',
      featuredStudyHref: routes.en.vaultshop,
      supportingLabel: 'Additional technical projects',
      stackAriaPrefix: 'Technical stack for',
      metricsAriaPrefix: 'Technical metrics for',
      buttons: {
        code: 'View code on GitHub',
        preview: 'View demo',
      },
      items: [
        {
          title: 'VaultShop',
          eyebrow: 'Featured technical case · e-commerce deployed on a real VPS',
          description:
            'ASP.NET Core 8 MVC application deployed on an Ubuntu VPS with PostgreSQL, Docker Compose, MinIO, Stripe, Mercado Pago, Identity roles with Google OAuth, ES/EN localization, and Nginx HTTPS.',
          stack: [
            'ASP.NET Core 8 MVC',
            'Entity Framework Core + PostgreSQL',
            'ASP.NET Core Identity',
            'Stripe + Mercado Pago',
            'Google OAuth',
            'MinIO / S3 storage',
            'Docker Compose + Nginx',
            'Ubuntu VPS',
          ],
          highlights: [
            'Self-hosted on Oracle Cloud VPS with Docker Compose and Nginx HTTPS reverse proxy.',
            'Multi-store platform: VaultShop + UkiyoStudio share codebase with per-store isolated DB/MinIO.',
            'Automated backups (cron pg_dump + MinIO mirror) with verified restore. Health checks and rate limiting.',
            'CI with GitHub Actions: restore, build, and 821 tests on every push to main.',
            'Configurable theme, admin order guards, dynamic per-store web manifest (name, icons, colors, standalone display).',
          ],
          metrics: [
            { value: '8+', label: 'technologies' },
            { value: '3', label: 'payment methods' },
            { value: '821', label: 'tests' },
            { value: 'GitHub Actions', label: 'CI/CD' },
            { value: 'Ubuntu 24.04', label: 'VPS' },
          ],
          link: 'https://vaultshop.evaldez.ar',
          github: 'https://github.com/Emmanuel-Valdez/VaultShop',
          image: '/projects/vaultshop/storefront.webp',
          imageMobile: '/projects/vaultshop/mobile-storefront.webp',
          imageAlt: 'Real screenshot of VaultShop online store with product catalog',
          tags: ['CSharp', 'GitHub', 'PostgreSQL'],
        },
        {
          title: 'Express Quote Calculator for Clothing Store',
          description:
            'C# Windows Forms application that models quotation logic, quote history, stock restrictions, and error handling for a clothing store.',
          link: '',
          github: 'https://github.com/Emmanuel-Valdez/ProyectoCQuarq',
          image: '/projects/CotizadorTiendaRopa.webp',
          imageAlt: 'Screenshot of a C# cost quotation tool for a clothing store',
          tags: ['CSharp', 'GitHub'],
        },
        {
          title: 'Invitation card: costume-themed birthday party',
          description:
            'Interactive digital invitation commissioned for a private event: RSVP, collaborative playlist, and a guest-voted contest. Astro SSR, TypeScript, Tailwind 4, SQLite/Drizzle, Docker, and CI/CD, built with OpenSpec and coding agents under human review.',
          link: 'https://juli30.evaldez.ar',
          github: '',
          image: '/projects/tarjeta-cumple.svg',
          imageAlt: 'Illustrative cover for the costume-themed birthday invitation: an abstract cinema-themed composition, not a screenshot of the site',
          tags: ['Astro', 'TypeScript', 'Tailwind', 'SQLite', 'OpenSpec'],
        },
      ],
    },
    about: {
      focusAreas: [
        {
          title: 'Backend and data',
          description: '.NET, C#, PostgreSQL, business rules, roles, calculations, and relational persistence.',
        },
        {
          title: 'Real processes',
          description: 'E-commerce, costs, prices, inventory, orders, users, and administrative decisions.',
        },
        {
          title: 'Delivery and SDD',
          description: 'Requirements, acceptance criteria, and scoped tasks before implementation; human review plus check/build and rendered-behavior verification.',
        },
      ],
      intro:
        'I am Emmanuel Valdez, a software and web application developer. I work end to end, with a strong backend foundation:',
      strong: 'C#, ASP.NET Core, PostgreSQL, Astro, and TypeScript.',
      paragraphs: [
        'I come from a technical background in industrial production and automation, so I tend to think of software as a tool for organizing real processes: costs, inventory, sales, logistics, users, and administrative decisions.',
        'That perspective is reflected in VaultShop, the case study I built, deployed, and documented in detail — from the relational data model to the admin pricing calculator. I have also delivered Astro and TypeScript sites for clients, where the public-facing experience and content details matter.',
        'I work with Spec-Driven Development: before implementing, I define requirements, acceptance criteria, and scoped tasks. OpenSpec records the proposal, specification, and tasks; coding agents implement scoped tasks, and I own the decisions and review the result with checks, build, and rendered behavior. This reduces ambiguity and speeds up iterations without replacing human review.',
        'I am currently consolidating the portfolio around verifiable evidence: deployed systems, relational data, payments, roles, infrastructure, and operational documentation.',
      ],
      closing:
        'I also worked as a private teacher and teaching assistant in math, physics, and English. That experience strengthened how I explain complex problems, document decisions, and collaborate with other people.',
      imageAlt: 'Portrait of Emmanuel Valdez',
    },
    contact: {
      text: 'Looking for a full-stack or software developer for web applications, internal systems, or e-commerce? I am open to full-stack and backend roles, with a strong backend foundation and end-to-end delivery, remote or hybrid from Mendoza. Email me or download my CV.',
      emailLabel: 'Email me',
      cvLabel: 'Download CV as PDF',
      responseTime: 'I respond within 24-48 hours',
      cv: cvFiles.en,
    },
    proofOfWork: {
      eyebrow: 'Quick evidence',
      title: 'Proof of work',
      description: 'Verifiable links for hiring managers.',
      updatedLabel: 'Evidence updated',
      statusOk: 'Live',
      statusFail: 'Unreachable',
      items: [
        { label: 'Live demo', value: 'vaultshop.evaldez.ar', href: 'https://vaultshop.evaldez.ar' },
        { label: 'GitHub', value: 'github.com/Emmanuel-Valdez/VaultShop', href: 'https://github.com/Emmanuel-Valdez/VaultShop' },
        { label: 'CI', value: 'GitHub Actions — 821 tests', href: 'https://github.com/Emmanuel-Valdez/VaultShop/actions' },
        { label: 'Commit history', value: '300+ commits', href: 'https://github.com/Emmanuel-Valdez/VaultShop/commits/main' },
        { label: 'Runbook', value: 'docs/operations/runbook.md', href: 'https://github.com/Emmanuel-Valdez/VaultShop/blob/main/docs/operations/runbook.md' },
        { label: 'Architecture', value: 'docs/architecture.md', href: 'https://github.com/Emmanuel-Valdez/VaultShop/blob/main/docs/architecture.md' },
      ],
    },
    plan306090: {
      eyebrow: 'Work plan',
      title: 'What I can do in 30/60/90 days',
      description: 'If you bring me onto your team, this is my contribution plan.',
      items: [
        {
          period: '30 days',
          title: 'Onboarding and first contributions',
          description: 'Understand the domain, stack, and team processes. First PRs with bugfixes and small improvements. Document technical decisions.',
        },
        {
          period: '60 days',
          title: 'Feature autonomy',
          description: 'Take end-to-end features with light supervision. Improve tests, CI/CD, and observability. Propose architecture improvements.',
        },
        {
          period: '90 days',
          title: 'Real impact',
          description: 'Lead a feature or improvement from start to finish. Mentor juniors if applicable. Leave the codebase better than I found it.',
        },
      ],
    },
  },
} as const;

export const vaultshopContent = {
  es: {
    meta: {
      title: 'Caso de estudio VaultShop - ASP.NET Core, PostgreSQL y e-commerce',
      description:
        'Caso de estudio de VaultShop, aplicación e-commerce desplegada en VPS real con ASP.NET Core 8 MVC, Entity Framework Core, PostgreSQL, Docker Compose, MinIO, Stripe, Mercado Pago, Google OAuth y Nginx HTTPS.',
      image: '/projects/vaultshop/storefront.webp',
    },
    backHref: '/#projects',
    backLabel: 'Volver a proyectos',
    eyebrow: 'Caso de estudio · ASP.NET Core + PostgreSQL + VPS',
    title: 'VaultShop',
    intro:
      'VaultShop es la plataforma backend que construí para Ukiyo Studio. Es una aplicación ASP.NET Core 8 MVC desplegada en un VPS Ubuntu real con PostgreSQL, Docker Compose, MinIO, Stripe, Mercado Pago, transferencia bancaria, Identity + Google OAuth y Nginx HTTPS.',
    buttons: {
      demo: 'Ver tienda en vivo',
      code: 'Ver código en GitHub',
    },
    statusBadges: {
      ariaLabel: 'Estado técnico de la demo VaultShop',
      items: [
        { label: 'Estado de la demo', value: '● Live' },
        { label: 'Seguridad de conexión', value: '🔒 HTTPS' },
        { label: 'Estado de respaldo', value: '✓ Backup tested' },
        { label: 'Despliegue', value: '● Docker Compose' },
        { label: 'Tests automatizados', value: '✓ 821 tests' },
      ],
    },
    heroImageAlt: 'Captura real de VaultShop con catálogo de productos',
    metricsAriaLabel: 'Resumen del proyecto',
    summary: {
      eyebrow: 'Resumen técnico',
      title: 'Resumen técnico en 20 segundos',
      description:
        'Una lectura rápida del tipo de sistema, mi rol, el problema operativo, el stack y la evidencia técnica disponible.',
    },
    metrics: [
      { label: 'Roles', value: 'Customer, Company, Employee, Admin' },
      { label: 'Pricing', value: 'Costos, márgenes, mayorista y minorista' },
      { label: 'Integraciones', value: 'Stripe + Mercado Pago + Google OAuth + ES/EN' },
    ],
    whatBuilt: {
      eyebrow: 'Qué construí',
      title: 'Implementación personal detrás del caso',
      description:
        'El foco no es promocionar una marca: es mostrar cómo convertí una operación real en módulos backend verificables.',
      items: [
        'Modelo de datos PostgreSQL para catálogo, usuarios, compañías, órdenes, costos y precios.',
        'Flujos ASP.NET Core MVC para tienda, carrito, administración, órdenes y pricing.',
        'Identity roles para separar cliente, compañía, empleado y administrador.',
        'Integraciones modulares con Stripe, Mercado Pago, transferencia bancaria, Google OAuth y localización ES/EN.',
        'Calculadora de precios con PricingCalculatorService + EF Core, costos, márgenes y revisión administrativa.',
        'Retiro por sucursal con cascada provincia→localidad→sucursal y freeze post-envío.',
        'Resumen de pedido en PDF (QuestPDF) para clientes Company con snapshot fiscal.',
      ],
    },
    walkthrough: {
      eyebrow: 'Evidencia funcional',
      title: 'Flujos implementados antes que arquitectura',
      description:
        'El video muestra el flujo principal sin exponer permisos sensibles: compra del cliente, creación de la orden y seguimiento administrativo sobre datos persistidos.',
      videoLabel: 'Video recorrido del caso de estudio VaultShop',
      fallback: 'Tu navegador no puede reproducir este video. Podés revisar las capturas del caso de estudio más abajo.',
      transcriptLabel: 'Resumen accesible del video',
      transcriptItems: [
        'El recorrido muestra la tienda pública, el catálogo, el detalle de producto y el avance del cliente hacia el carrito.',
        'Luego se evidencia la persistencia de la orden y los datos necesarios para seguimiento administrativo.',
        'El cierre muestra la gestión de estados desde administración para preparación, envío, entrega y visibilidad del cliente.',
      ],
      highlights: [
        'Flujo de cliente: sesión, catálogo, carrito y avance hacia pago.',
        'Persistencia de órdenes y datos necesarios para seguimiento administrativo.',
        'Gestión admin de estados para preparación, envío, entrega y visibilidad del cliente.',
      ],
    },
    demoScope: {
      eyebrow: 'Nota sobre la demo',
      title: 'Demo pública y evidencia protegida',
      description:
        'La demo pública permite revisar la tienda sin exponer permisos administrativos ni datos operativos sensibles. Las áreas de admin, pricing y órdenes se documentan mediante video y capturas con datos demo.',
      publicTitle: 'Disponible públicamente',
      protectedTitle: 'Protegido por rol',
      evidenceTitle: 'Evidencia en capturas',
      publicItems: [
        'Navegación de la tienda, catálogo, detalle de producto y flujo hacia carrito.',
        'Interfaz localizada en español e inglés para validar navegación y contenido visible.',
      ],
      protectedItems: [
        'Panel administrativo, gestión de productos, compañías, órdenes y variables de cálculo.',
        'Acciones que modifican precios, costos, usuarios, estados de orden o datos internos del negocio.',
      ],
      evidenceItems: [
        'Las capturas documentan roles, órdenes, módulos administrativos, pagos, pricing y datos persistidos en PostgreSQL.',
        'Las pantallas protegidas se muestran con datos demo para explicar alcance técnico sin abrir permisos sensibles.',
      ],
    },
    context: {
      eyebrow: 'Contexto',
      title: 'Del Excel al sistema web',
      paragraphs: [
        'VaultShop nace para ordenar dos necesidades del negocio: vender productos físicos desde una tienda pública y calcular precios con criterios más consistentes que una planilla.',
        'La aplicación concentra tienda, administración y pricing en un sistema ASP.NET Core donde PostgreSQL persiste datos operativos y sostiene reglas de cálculo.',
      ],
    },
    beforeAfter: {
      eyebrow: 'Antes / Después',
      title: 'De Excel a sistema web',
      description: 'El cambio principal: de planillas manuales a un sistema con datos persistentes, roles y reglas centralizadas.',
      before: {
        title: 'Antes',
        items: [
          'Precios calculados en Excel manualmente.',
          'Costos y márgenes dispersos en distintas planillas.',
          'Sin histórico de cambios ni auditoría.',
          'Errores de fórmula y versiones desactualizadas.',
        ],
      },
      after: {
        title: 'Después',
        items: [
          'PricingCalculatorService centraliza cálculos con EF Core.',
          'Costos, márgenes y precios persistidos en PostgreSQL.',
          'Historial de cambios y revisión administrativa.',
          'Precios consistentes y auditables en toda la operación.',
        ],
      },
    },
    challengesOvercome: {
      eyebrow: 'Desafíos',
      title: 'Desafíos técnicos resueltos',
      description: 'Los problemas más complejos de resolver y cómo los abordé.',
      items: [
        {
          title: 'Migración de SQL views a servicio portable',
          description: 'La calculadora original usaba vistas y triggers del motor de SQL. Migré la lógica a PricingCalculatorService + EF Core para que sea testeable, portable y sin dependencias del engine.',
        },
        {
          title: 'Stock transaccional sin oversell',
          description: 'Implementé guards en carrito/checkout, decremento atómico en transacción EF Core y badge Sin stock en tienda. El desafío fue consistencia sin distributed lock en instancia única.',
        },
        {
          title: 'Multi-store con aislamiento',
          description: 'VaultShop + UkiyoStudio comparten codebase pero necesitan DB, MinIO y credenciales aisladas. Resuelto con configuración por store y Docker Compose separado.',
        },
        {
          title: 'Webhooks firmados y reconciliación',
          description: 'Los pagos requieren verificación server-side y reconciliación de sesiones pendientes. Implementé verificación de firma, retry y refunds al cancelar.',
        },
      ],
    },
    problemTitle: 'Problema',
    solutionTitle: 'Solución',
    problemItems: [
      'El pricing dependía de una planilla y de decisiones administrativas difíciles de centralizar.',
      'La información comercial vivía separada entre catálogo, pedidos, costos y usuarios.',
      'El negocio necesitaba una base consistente para vender, calcular precios y revisar órdenes.',
    ],
    solutionItems: [
      'Tienda pública para catálogo, favoritos, carrito y flujo de compra.',
        'Panel administrativo para productos, compañías, usuarios, roles, órdenes, retiro por sucursal y resumen PDF del pedido.',
      'Calculadora que conecta costos, márgenes y precios finales sobre datos persistidos.',
      'Integraciones con Identity, Google OAuth, Stripe, Mercado Pago, transferencia bancaria y localización ES/EN.',
    ],
    visualProof: {
      eyebrow: 'Evidencia de flujos implementados',
      title: 'Evidencia funcional antes de arquitectura',
      description:
        'Dos pantallas clave muestran el valor del sistema antes de entrar en arquitectura: compra del cliente y decisiones administrativas de precio.',
      items: [
        {
          screenshotIndex: 1,
          label: 'Flujo de cliente',
          takeaway: 'La tienda conecta catálogo, detalle de producto y carrito en una experiencia de compra verificable.',
        },
        {
          screenshotIndex: 3,
          label: 'Datos de costos',
          takeaway: 'El módulo de costos centraliza los valores base por producto que alimentan el cálculo de precios, márgenes y decisiones comerciales del administrador.',
          emphasis: true,
        },
      ],
    },
      architecture: {
        eyebrow: 'Arquitectura',
        title: 'Arquitectura en una mirada',
        description:
        'Vista liviana del despliegue: Nginx recibe el tráfico HTTPS, Docker Compose coordina la app y los servicios internos, y ASP.NET Core MVC concentra tienda pública, administración y reglas de negocio.',
        flowAriaLabel: 'Flujo técnico de VaultShop',
        steps: [
        { title: 'Internet / usuarios', description: 'Clientes y administradores entran por HTTPS al dominio público.' },
        { title: 'Nginx HTTPS', description: 'Reverse proxy y terminación TLS hacia el contenedor de la aplicación.' },
        { title: 'Docker Compose', description: 'Orquesta ASP.NET Core, PostgreSQL y MinIO en el VPS Ubuntu.' },
        { title: 'Datos e integraciones', description: 'PostgreSQL persiste el dominio, MinIO guarda imágenes y Stripe procesa pagos.' },
        ],
        diagram: {
        title: 'Diagrama de despliegue',
        description:
          'Flujo resumido del tráfico real: usuarios, proxy HTTPS, contenedores internos, persistencia y servicios externos.',
        browser: 'Internet',
        browserDetails: ['Cliente', 'Admin'],
        edge: 'Nginx HTTPS',
        edgeDetails: ['TLS', 'Reverse proxy'],
        app: 'Docker + ASP.NET Core',
        appDetails: ['MVC', 'Identity + roles', 'Reglas de negocio', 'ES/EN'],
        data: 'PostgreSQL + MinIO',
        dataDetails: ['EF Core', 'PricingCalculatorService', 'Costos y precios', 'Imágenes'],
        services: 'Servicios externos',
        serviceDetails: ['Stripe', 'Mercado Pago', 'Google OAuth'],
      },
      flows: [
        {
          title: 'Flujo público',
          description:
            'Los clientes navegan el catálogo, revisan detalles, agregan productos al carrito y avanzan hacia el pago. ASP.NET Core MVC coordina las vistas, la lógica de compra y las integraciones externas.',
        },
        {
          title: 'Flujo administrativo',
          description:
            'El panel admin concentra productos, usuarios, compañías, órdenes y datos de cálculo. La lógica de negocio vive en el backend y se apoya en PostgreSQL para persistencia y cálculos consistentes.',
        },
        {
          title: 'Base de datos y cálculos',
          description:
            'PostgreSQL guarda catálogo, usuarios, empresas, órdenes, costos y precios. PricingCalculatorService centraliza los cálculos de costos y precios de forma portable y testeable.',
        },
      ],
    },
    stackLayers: {
      eyebrow: 'Stack por capas',
      title: 'Responsabilidad por capa',
      description:
        'La estructura separa interfaz, reglas, datos e integraciones sin ocultar que el proyecto sigue siendo un monolito MVC mantenible.',
      items: [
        { layer: 'Interfaz', items: ['Tienda pública', 'Panel administrativo', 'Localización ES/EN'] },
        { layer: 'Aplicación', items: ['ASP.NET Core 8 MVC', 'Identity y roles', 'Reglas de precios'] },
        { layer: 'Datos', items: ['Entity Framework Core', 'PostgreSQL', 'PricingCalculatorService'] },
        { layer: 'Servicios externos', items: ['Stripe', 'Mercado Pago', 'Google OAuth'] },
      ],
    },
    calculator: {
      eyebrow: 'Calculadora administrativa',
      title: 'Reglas de precio basadas en costos reales',
      description: 'La calculadora convierte materiales, costos fijos, costos porcentuales y márgenes en precios sugeridos para decisiones administrativas.',
      proofTitle: 'Por qué es el diferencial',
      proofItems: [
        { title: 'Inputs de costo', description: 'Materiales, packaging, costos fijos y comisiones alimentan el cálculo desde datos administrables.' },
        { title: 'Reglas de negocio', description: 'Los márgenes mayoristas y minoristas se aplican como criterios explícitos, no como decisiones sueltas en una planilla.' },
        { title: 'Cálculo centralizado', description: 'PricingCalculatorService + EF Core centraliza los cálculos de forma portable y testeable, sin depender de vistas o triggers del motor de base de datos.' },
        { title: 'Resultado admin', description: 'El administrador compara costos, precios actuales y precios sugeridos antes de decidir cambios comerciales.' },
      ],
      finalTitle: 'Dashboard de precios finales',
      finalDescription:
        'El dashboard permite comparar precios vigentes contra valores calculados, detectar productos que requieren revisión y mantener la decisión comercial final en manos del administrador.',
      inputsTitle: 'Ver variables de costo',
      inputs: [
        'Materiales, telas, herrajes y packaging por producto o categoría.',
        'Costos fijos como impuestos, alquiler, servicios, herramientas y gastos operativos.',
        'Costos porcentuales como comisiones de plataforma, pasarelas de pago y cargos variables.',
        'Márgenes para precio mayorista justo y precio minorista sugerido.',
      ],
      finalFeatures: [
        'Compara precio actual minorista y mayorista contra precios calculados desde costos reales.',
        'Marca diferencias entre valores vigentes y precios sugeridos para saber qué productos necesitan revisión.',
        'Permite ajustar variables de ganancia, filtrar disponibilidad, controlar columnas y exportar información a PDF.',
        'Mantiene la decisión comercial final en manos del administrador antes de actualizar precios publicados.',
      ],
    },
    dataModel: {
      eyebrow: 'Modelo de datos',
      title: 'Modelo relacional para tienda, pedidos y pricing',
      description:
        'El dominio agrupa catálogo, cuentas, pedidos y costos para separar responsabilidades y convertir datos operativos en precios calculados.',
      diagram: {
        title: 'Relaciones principales del dominio',
        description:
          'Resumen conceptual: muestra cómo se conectan las áreas del sistema sin exponer estructura interna, datos sensibles ni reglas comerciales privadas.',
        ariaLabel: 'Diagrama relacional conceptual del modelo de datos de VaultShop',
        flows: [
          ['Catálogo y carrito', 'Pedidos', 'Operación administrativa'],
          ['Cuentas y empresas', 'Pedidos', 'Roles y permisos'],
          ['Insumos de costo', 'PricingCalculatorService', 'Precios calculados'],
        ],
      },
      groups: [
        { title: 'Catálogo y carrito', items: ['Product', 'Category', 'ProductImage', 'ShoppingCart'] },
        { title: 'Cuentas y empresas', items: ['ApplicationUser', 'Company'] },
        { title: 'Pedidos', items: ['OrderHeader', 'OrderDetail'] },
        {
          title: 'Costos y pricing',
          items: [
            'Fabric',
            'GarmentHardware',
            'Packaging',
            'FixedCost',
            'PercentageCost',
            'PercentageProfit',
            'PricingCalculatorService',
          ],
        },
      ],
    },
    backend: {
      eyebrow: 'Backend',
      title: 'Key Backend Decisions',
      description:
        'Estas decisiones muestran backend .NET aplicado a flujos públicos, administración, persistencia relacional, pricing e integraciones externas.',
      stackTitle: 'Stack',
      stackAriaLabel: 'Stack técnico de VaultShop',
      decisions: [
        { title: 'ASP.NET Core MVC para tienda y admin', description: 'Un monolito MVC mantiene cerca las vistas, controladores y reglas del dominio sin introducir complejidad distribuida innecesaria.' },
        { title: 'EF Core + PostgreSQL para persistencia relacional', description: 'El modelo conecta catálogo, usuarios, órdenes, costos y precios en una base consistente para la operación.' },
        { title: 'Identity roles para flujos protegidos', description: 'Clientes, compañías, empleados y administradores pueden tener permisos distintos sin exponer acciones sensibles en la demo pública.' },
        { title: 'PricingCalculatorService para pricing y costos', description: 'El servicio centraliza cálculos de costos por producto y precios finales de forma portable y testeable con EF Core, sin depender de vistas o triggers del motor de base de datos.' },
        { title: 'Stripe, Mercado Pago y transferencia bancaria como integraciones de pago', description: 'Tres proveedores de pago integrados como servicios modulares con webhooks firmados, verificación server-side, reconciliación de sesiones pendientes y refunds al cancelar, alrededor del flujo principal de compra.' },
        { title: 'Google OAuth para autenticación social', description: 'Autenticación externa integrada como servicio acotado alrededor del flujo principal, con Identity roles para separar permisos.' },
        { title: 'Stock transaccional con guards anti-oversell', description: 'StockQuantity con guards en carrito/checkout, decremento atómico en transacción EF Core y badge Sin stock en tienda. Scope: instancia única, sin test de carga distribuida.' },
      ],
      detailsTitle: 'Detalles técnicos secundarios',
      detailsDescription:
        'Estos detalles siguen disponibles para hiring managers, pero quedan debajo de las decisiones principales para reducir densidad visual.',
      dataModelDetailsTitle: 'Modelo de datos conceptual',
      stackDetailsTitle: 'Stack por capas',
      implementationDetailsTitle: 'Notas de implementación',
      highlights: [
        'Modelo multi-compañía para separar usuarios y operaciones asociadas a empresas sin mezclar responsabilidades.',
        'Identity y roles para diferenciar permisos de clientes, compañías, empleados y administradores.',
        'PricingCalculatorService para centralizar costos, márgenes y precios calculados de forma portable y testeable.',
        'Webhooks firmados y verificación server-side para pagos con Stripe, Mercado Pago y transferencia bancaria.',
        'Migraciones, seed data y configuración para asegurar que la calculadora tenga filas base válidas.',
      ],
      stack: [
        'ASP.NET Core 8 MVC',
        'Entity Framework Core + PostgreSQL',
        'ASP.NET Core Identity',
        'Stripe + Mercado Pago + Transferencia bancaria',
        'Google OAuth',
        'MinIO / S3 storage',
        'Docker Compose + Nginx',
        'Localización ES/EN',
      ],
    },
    lessonsLearned: {
      eyebrow: 'Aprendizajes y mejoras',
      title: 'Qué aprendí y qué haría distinto',
      description:
        'Lo que resultó más complejo de lo esperado, qué cambiaría en una segunda versión y qué faltaría para producción real.',
      items: [
        'La calculadora fue más difícil de diseñar de lo esperado: migrar de SQL views/triggers a PricingCalculatorService + EF Core requirió varias iteraciones para mantener portabilidad y testeabilidad.',
        'Docker simplificó el deploy y los health checks (/health/live, /health/ready) dan visibilidad básica, pero en producción agregaría logs centralizados y alertas.',
        'La demo pública fue clave para mostrar valor sin abrir permisos sensibles. Los backups están automatizados pero los restore drills siguen siendo manuales.',
      ],
    },
    infrastructure: {
      eyebrow: 'Infraestructura',
      title: 'Docker, Nginx y VPS',
      description:
        'El despliegue usa Docker Compose para aislamiento de servicios, Nginx como reverse proxy con HTTPS, y un VPS Ubuntu real para control total del entorno.',
      items: [
        { title: 'Docker Compose', description: 'Tres servicios aislados: ASP.NET Core, PostgreSQL y MinIO. Un solo comando para levantar todo el entorno.' },
        { title: 'Multi-store platform', description: 'VaultShop + UkiyoStudio comparten el mismo codebase con DB, bucket MinIO y credenciales aisladas por store.' },
        { title: 'Backups automatizados', description: 'Cron semanal/diario con pg_dump + mc mirror, chequeos de frescura y disco.' },
        { title: 'Nginx HTTPS', description: 'Terminación SSL con Let\'s Encrypt y reverse proxy hacia el contenedor de la aplicación.' },
        { title: 'MinIO', description: 'Almacenamiento de imágenes compatible con S3, autoalojado para no depender de servicios externos.' },
        { title: 'VPS Ubuntu', description: 'Control total del entorno de ejecución, administración real de servidores y despliegue manual.' },
      ],
    },
    operationalProof: {
      eyebrow: 'Evidencia operativa',
      title: 'Lo que funciona en el VPS real',
      description:
        'Más allá del código: evidencia de que el sistema está desplegado y operativo con procesos básicos de mantenimiento.',
      items: [
        { label: 'Demo', value: 'En vivo en vaultshop.evaldez.ar' },
        { label: 'HTTPS', value: 'Certificado Let\'s Encrypt, renovación automática' },
        { label: 'Backup', value: 'pg_dump + MinIO auto, restore manual verificado' },
        { label: 'Deploy', value: 'Docker Compose, actualización manual' },
        { label: 'Health', value: '/health/live + /health/ready (DB + storage)' },
        { label: 'Seguridad', value: 'Rate limiting + lockout + 404/500 branded' },
      ],
    },
    limitations: {
      eyebrow: 'Limitaciones',
      title: 'Qué es y qué no es',
      description:
        'Un caso de estudio backend con despliegue real, no un sistema empresarial en producción.',
      items: [
        'Monolito MVC en un solo VPS: suficiente para el alcance actual, sin redundancia ni escalado horizontal.',
        'Datos demo y deploy manual, no clientes reales en producción.',
        'Stock con guards y decremento atómico en instancia única; pendiente test de carga concurrente y lock distribuido.',
        'Backups automatizados con restore manual; observabilidad básica con health checks y logs.',
        'La app instalada en el celular corre sobre la web desplegada: requiere conexión, sin service worker ni modo offline.',
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Preguntas frecuentes',
      description: 'Respuestas directas sobre el proyecto para hiring managers.',
      items: [
        {
          question: '¿VaultShop es un proyecto real o un demo?',
          answer: 'Es un proyecto real desplegado en un VPS con datos demo. Uso datos de prueba para no exponer información sensible de clientes reales.',
        },
        {
          question: '¿Qué tan escalable es la arquitectura?',
          answer: 'Es un monolito MVC en un solo VPS, suficiente para el alcance actual. Para escala horizontal se necesitaría separar servicios y agregar redundancia.',
        },
        {
          question: '¿Cómo manejan los pagos y la seguridad?',
          answer: 'Stripe y Mercado Pago con webhooks firmados, verificación server-side, rate limiting y lockout. Los pagos nunca tocan el servidor directamente.',
        },
        {
          question: '¿El código está disponible en GitHub?',
          answer: 'Sí, el repositorio está público en github.com/Emmanuel-Valdez/VaultShop con README, screenshots y documentación técnica.',
        },
      ],
    },
    media: {
      eyebrow: 'Evidencia adicional',
      title: 'Capturas técnicas complementarias',
      description:
        'Capturas usadas como soporte para documentar flujos públicos y pantallas protegidas sin abrir permisos sensibles.',
      groups: [
        { title: 'Flujo de cliente', screenshotIndexes: [0, 1] },
        { title: 'Flujo administrativo', screenshotIndexes: [2, 5] },
        { title: 'Workflow de pricing', screenshotIndexes: [3, 4] },
      ],
      screenshots: [
        {
          src: '/projects/vaultshop/storefront.webp',
          alt: 'Tienda pública de VaultShop con catálogo de productos',
          title: 'Tienda pública',
          description: 'Catálogo visible para clientes con búsqueda, navegación y acceso al carrito.',
        },
        {
          src: '/projects/vaultshop/checkout-summary.webp',
          alt: 'Resumen de checkout en VaultShop',
          title: 'Checkout',
          description: 'Vista de compra con resumen de orden y flujo de pago.',
        },
        {
          src: '/projects/vaultshop/admin-orders.webp',
          alt: 'Panel de órdenes admin en VaultShop',
          title: 'Gestión de órdenes',
          description: 'Listado administrativo con estados, totales, filtros y acceso al detalle.',
        },
        {
          src: '/projects/vaultshop/payment-gate.webp',
          alt: 'Integración de pagos en VaultShop',
          title: 'Integraciones de pago',
          description: 'Procesamiento de pagos con Stripe, Mercado Pago y webhooks firmados.',
        },
        {
          src: '/projects/vaultshop/final-prices.webp',
          alt: 'Dashboard de precios en VaultShop',
          title: 'Dashboard de precios',
          description: 'Dashboard con costos, precios y decisiones comerciales controladas por el admin.',
        },
        {
          src: '/projects/vaultshop/mobile-storefront.webp',
          alt: 'Tienda móvil de VaultShop',
          title: 'Tienda móvil',
          description: 'Vista responsive móvil de la tienda para clientes.',
        },
      ],
    },
  },
  en: {
    meta: {
      title: 'VaultShop Case Study - ASP.NET Core, PostgreSQL and e-commerce',
      description:
        'Case study for VaultShop, an e-commerce application deployed on a real VPS with ASP.NET Core 8 MVC, Entity Framework Core, PostgreSQL, Docker Compose, MinIO, Stripe, Mercado Pago, Google OAuth, and Nginx HTTPS.',
      image: '/projects/vaultshop/storefront.webp',
    },
    backHref: '/en/#projects',
    backLabel: 'Back to projects',
    eyebrow: 'Case study · ASP.NET Core + PostgreSQL + VPS',
    title: 'VaultShop',
    intro:
      'VaultShop is the backend platform I built for Ukiyo Studio. It is an ASP.NET Core 8 MVC application deployed on a real Ubuntu VPS with PostgreSQL, Docker Compose, MinIO, Stripe, Mercado Pago, bank transfer, Identity + Google OAuth, and Nginx HTTPS.',
    buttons: {
      demo: 'View live store',
      code: 'View code on GitHub',
    },
    statusBadges: {
      ariaLabel: 'Technical status for the VaultShop demo',
      items: [
        { label: 'Demo status', value: '● Live' },
        { label: 'Connection security', value: '🔒 HTTPS' },
        { label: 'Backup status', value: '✓ Backup tested' },
        { label: 'Deployment', value: '● Docker Compose' },
        { label: 'Automated tests', value: '✓ 821 tests' },
      ],
    },
    heroImageAlt: 'Real screenshot of VaultShop with product catalog',
    metricsAriaLabel: 'Project summary',
    summary: {
      eyebrow: 'Technical summary',
      title: 'Technical summary in 20 seconds',
      description:
        'A quick read of the system type, my role, the operational problem, the stack, and the available technical evidence.',
    },
    metrics: [
      { label: 'Roles', value: 'Customer, Company, Employee, Admin' },
      { label: 'Pricing', value: 'Costs, margins, wholesale and retail' },
      { label: 'Integrations', value: 'Stripe + Mercado Pago + Google OAuth + ES/EN' },
    ],
    whatBuilt: {
      eyebrow: 'What I built',
      title: 'Personal implementation behind the case',
      description:
        'The goal is not brand promotion: it is to show how I turned a real operation into verifiable backend modules.',
      items: [
        'PostgreSQL data model for catalog, users, companies, orders, costs, and prices.',
        'ASP.NET Core MVC flows for storefront, cart, admin, orders, and pricing.',
        'Identity roles to separate customer, company, employee, and admin permissions.',
        'Scoped integrations with Stripe, Mercado Pago, bank transfer, Google OAuth, and ES/EN localization.',
        'Pricing calculator with PricingCalculatorService + EF Core, costs, margins, and admin review.',
        'Branch pickup with province→locality→branch cascade and post-ship freeze.',
        'Order PDF summary (QuestPDF) for Company customers with fiscal snapshot.',
      ],
    },
    walkthrough: {
      eyebrow: 'Functional evidence',
      title: 'Implemented flows before architecture',
      description:
        'The video shows the main flow without exposing sensitive permissions: customer purchase, order creation, and admin tracking over persisted data.',
      videoLabel: 'Video walkthrough for the VaultShop case study',
      fallback: 'Your browser cannot play this video. You can review the case study screenshots below.',
      transcriptLabel: 'Accessible video summary',
      transcriptItems: [
        'The walkthrough shows the public store, catalog, product detail, and customer movement toward the cart.',
        'It then shows persisted order data and the information required for administrative tracking.',
        'The final part shows admin status management for preparation, shipping, delivery, and customer visibility.',
      ],
      highlights: [
        'Customer flow: session, catalog, cart, and movement toward payment.',
        'Persisted orders and data required for administrative tracking.',
        'Admin status management for preparation, shipping, delivery, and customer visibility.',
      ],
    },
    demoScope: {
      eyebrow: 'Demo note',
      title: 'Public demo and protected evidence',
      description:
        'The public demo lets visitors inspect the storefront without exposing admin permissions or sensitive operational data. Admin, pricing, and order areas are documented through video and screenshots with demo data.',
      publicTitle: 'Publicly available',
      protectedTitle: 'Role-protected',
      evidenceTitle: 'Screenshot evidence',
      publicItems: [
        'Store navigation, catalog, product detail, and flow toward the cart.',
        'Spanish/English localized interface to validate navigation and visible content.',
      ],
      protectedItems: [
        'Admin panel, product management, companies, orders, and calculation variables.',
        'Actions that change prices, costs, users, order statuses, or internal business data.',
      ],
      evidenceItems: [
        'Screenshots document roles, orders, admin modules, payments, pricing, and PostgreSQL-backed data.',
        'Protected screens are shown with demo data to explain technical scope without opening sensitive permissions.',
      ],
    },
    context: {
      eyebrow: 'Context',
      title: 'From Excel to a web system',
      paragraphs: [
        'VaultShop was built to organize two business needs: selling physical products through a public store and calculating prices with more consistent criteria than a spreadsheet.',
        'The application brings storefront, administration, and pricing into an ASP.NET Core system where PostgreSQL persists operational data and supports calculation rules.',
      ],
    },
    beforeAfter: {
      eyebrow: 'Before / After',
      title: 'From Excel to a web system',
      description: 'The main change: from manual spreadsheets to a system with persistent data, roles, and centralized rules.',
      before: {
        title: 'Before',
        items: [
          'Prices calculated manually in Excel.',
          'Costs and margins scattered across different spreadsheets.',
          'No change history or audit trail.',
          'Formula errors and outdated versions.',
        ],
      },
      after: {
        title: 'After',
        items: [
          'PricingCalculatorService centralizes calculations with EF Core.',
          'Costs, margins, and prices persisted in PostgreSQL.',
          'Change history and administrative review.',
          'Consistent and auditable prices across the operation.',
        ],
      },
    },
    challengesOvercome: {
      eyebrow: 'Challenges',
      title: 'Technical challenges overcome',
      description: 'The most complex problems to solve and how I approached them.',
      items: [
        {
          title: 'Migration from SQL views to portable service',
          description: 'The original calculator used SQL views and triggers. I migrated the logic to PricingCalculatorService + EF Core to make it testable, portable, and engine-independent.',
        },
        {
          title: 'Transactional stock without oversell',
          description: 'Implemented cart/checkout guards, atomic decrement in EF Core transaction, and out-of-stock badge on storefront. The challenge was consistency without a distributed lock on a single instance.',
        },
        {
          title: 'Multi-store with isolation',
          description: 'VaultShop + UkiyoStudio share codebase but need isolated DB, MinIO, and credentials. Solved with per-store configuration and separate Docker Compose.',
        },
        {
          title: 'Signed webhooks and reconciliation',
          description: 'Payments require server-side verification and pending session reconciliation. Implemented signature verification, retry, and refunds on cancellation.',
        },
      ],
    },
    problemTitle: 'Problem',
    solutionTitle: 'Solution',
    problemItems: [
      'Pricing depended on a spreadsheet and administrative decisions that were hard to centralize.',
      'Commercial information was split across catalog, orders, costs, and users.',
      'The business needed a consistent base for selling, calculating prices, and reviewing orders.',
    ],
    solutionItems: [
      'Public store for catalog, favorites, cart, and purchase flow.',
      'Admin panel for products, companies, users, roles, orders, branch pickup, and order PDF summary.',
      'Calculator that connects costs, margins, and final prices using persisted data.',
      'Integrations with Identity, Google OAuth, Stripe, Mercado Pago, bank transfer, and ES/EN localization.',
    ],
    visualProof: {
      eyebrow: 'Implemented flow evidence',
      title: 'Functional evidence before architecture',
      description:
        'Two key screens show the system value before architecture details: customer purchase flow and administrative pricing decisions.',
      items: [
        {
          screenshotIndex: 1,
          label: 'Customer flow',
          takeaway: 'The store connects catalog, product detail, and cart into a verifiable purchase experience.',
        },
        {
          screenshotIndex: 3,
          label: 'Cost data',
          takeaway: 'This module centralizes product-level cost data used to calculate prices, margins, and admin-controlled commercial decisions.',
          emphasis: true,
        },
      ],
    },
      architecture: {
        eyebrow: 'Architecture',
        title: 'Architecture in one glance',
        description:
        'A lightweight deployment view: Nginx receives HTTPS traffic, Docker Compose coordinates the app and internal services, and ASP.NET Core MVC owns the storefront, admin area, and business rules.',
        flowAriaLabel: 'Technical flow for VaultShop',
        steps: [
        { title: 'Internet / users', description: 'Customers and admins enter through HTTPS on the public domain.' },
        { title: 'Nginx HTTPS', description: 'Reverse proxy and TLS termination to the application container.' },
        { title: 'Docker Compose', description: 'Orchestrates ASP.NET Core, PostgreSQL, and MinIO on the Ubuntu VPS.' },
        { title: 'Data and integrations', description: 'PostgreSQL persists the domain, MinIO stores images, and Stripe handles payments.' },
        ],
        diagram: {
        title: 'Deployment diagram',
        description:
          'A summarized view of real traffic flow: users, HTTPS proxy, internal containers, persistence, and external services.',
        browser: 'Internet',
        browserDetails: ['Customer', 'Admin'],
        edge: 'Nginx HTTPS',
        edgeDetails: ['TLS', 'Reverse proxy'],
        app: 'Docker + ASP.NET Core',
        appDetails: ['MVC', 'Identity + roles', 'Business rules', 'ES/EN'],
        data: 'PostgreSQL + MinIO',
        dataDetails: ['EF Core', 'PricingCalculatorService', 'Costs and prices', 'Images'],
        services: 'External services',
        serviceDetails: ['Stripe', 'Mercado Pago', 'Google OAuth'],
      },
      flows: [
        {
          title: 'Public flow',
          description:
            'Customers browse the catalog, review details, add products to the cart, and move toward payment. ASP.NET Core MVC coordinates views, purchase logic, and external integrations.',
        },
        {
          title: 'Admin flow',
          description:
            'The admin panel centralizes products, users, companies, orders, and calculation data. Business logic lives in the backend and relies on PostgreSQL for persistence and consistent calculations.',
        },
        {
          title: 'Database and calculations',
          description:
            'PostgreSQL stores catalog, users, companies, orders, costs, and prices. PricingCalculatorService centralizes cost and price calculations in a portable, testable way.',
        },
      ],
    },
    stackLayers: {
      eyebrow: 'Stack by layer',
      title: 'Responsibility by layer',
      description:
        'The structure separates interface, rules, data, and integrations while keeping the project as a maintainable MVC monolith.',
      items: [
        { layer: 'Interface', items: ['Public store', 'Admin panel', 'ES/EN localization'] },
        { layer: 'Application', items: ['ASP.NET Core 8 MVC', 'Identity and roles', 'Pricing rules'] },
        { layer: 'Data', items: ['Entity Framework Core', 'PostgreSQL', 'PricingCalculatorService'] },
        { layer: 'External services', items: ['Stripe', 'Mercado Pago', 'Google OAuth'] },
      ],
    },
    calculator: {
      eyebrow: 'Pricing calculator',
      title: 'Pricing rules based on real costs',
      description: 'The calculator turns materials, fixed costs, percentage-based costs, and margins into suggested prices for administrative decisions.',
      proofTitle: 'Why this is the key differentiator',
      proofItems: [
        { title: 'Cost inputs', description: 'Materials, packaging, fixed costs, and fees feed the calculation from admin-managed data.' },
        { title: 'Business rules', description: 'Wholesale and retail margins are applied as explicit criteria instead of isolated spreadsheet decisions.' },
        { title: 'Centralized calculation', description: 'PricingCalculatorService + EF Core centralizes calculations in a portable, testable way without relying on database engine views or triggers.' },
        { title: 'Admin outcome', description: 'The admin compares costs, current prices, and suggested prices before making commercial changes.' },
      ],
      finalTitle: 'Final-price dashboard',
      finalDescription:
        'The dashboard compares current prices against calculated values, highlights products that need review, and keeps the final commercial decision in the admin\'s hands.',
      inputsTitle: 'View cost variables',
      inputs: [
        'Materials, fabrics, hardware, and packaging by product or category.',
        'Fixed costs such as taxes, rent, utilities, tools, and operating expenses.',
        'Percentage costs such as platform commissions, payment gateway fees, and variable charges.',
        'Margins for fair wholesale price and suggested retail price.',
      ],
      finalFeatures: [
        'Compares current retail and wholesale prices against prices calculated from real costs.',
        'Marks differences between current values and suggested prices so products that need review are visible.',
        'Allows adjusting profit variables, filtering availability, controlling columns, and exporting information to PDF.',
        'Keeps the final commercial decision in the admin\'s hands before updating published prices.',
      ],
    },
    dataModel: {
      eyebrow: 'Data model',
      title: 'Relational model for store, orders, and pricing',
      description:
        'The domain groups catalog, accounts, orders, and costs to separate responsibilities and turn operational data into calculated prices.',
      diagram: {
        title: 'Main domain relationships',
        description:
          'Conceptual summary: it shows how system areas connect without exposing internal structure, sensitive data, or private business rules.',
        ariaLabel: 'Conceptual relational diagram for the VaultShop data model',
        flows: [
          ['Catalog and cart', 'Orders', 'Admin operations'],
          ['Accounts and companies', 'Orders', 'Roles and permissions'],
          ['Cost inputs', 'PricingCalculatorService', 'Calculated prices'],
        ],
      },
      groups: [
        { title: 'Catalog and cart', items: ['Product', 'Category', 'ProductImage', 'ShoppingCart'] },
        { title: 'Accounts and companies', items: ['ApplicationUser', 'Company'] },
        { title: 'Orders', items: ['OrderHeader', 'OrderDetail'] },
        {
          title: 'Costs and pricing',
          items: [
            'Fabric',
            'GarmentHardware',
            'Packaging',
            'FixedCost',
            'PercentageCost',
            'PercentageProfit',
            'PricingCalculatorService',
          ],
        },
      ],
    },
    backend: {
      eyebrow: 'Backend',
      title: 'Key Backend Decisions',
      description:
        '.NET backend decisions applied to public flows, administration, relational persistence, pricing, and external integrations.',
      stackTitle: 'Stack',
      stackAriaLabel: 'Technical stack for VaultShop',
      decisions: [
        { title: 'ASP.NET Core MVC for store and admin', description: 'An MVC monolith keeps views, controllers, and domain rules close without adding unnecessary distributed complexity.' },
        { title: 'EF Core + PostgreSQL for relational persistence', description: 'The model connects catalog, users, orders, costs, and prices in one consistent operational database.' },
        { title: 'Identity roles for protected flows', description: 'Customers, companies, employees, and admins can have distinct permissions without exposing sensitive actions in the public demo.' },
        { title: 'PricingCalculatorService for pricing and costs', description: 'The service centralizes cost-by-product and final-price calculations in a portable, testable way with EF Core, without relying on database engine views or triggers.' },
        { title: 'Stripe, Mercado Pago, and bank transfer as payment integrations', description: 'Three payment providers integrated as scoped services with signed webhooks, server-side verification, stale-session reconciliation, and refunds on cancellation around the main purchase flow.' },
        { title: 'Google OAuth for social authentication', description: 'External authentication integrated as a scoped service around the main flow, with Identity roles for permission separation.' },
        { title: 'Transactional stock with anti-oversell guards', description: 'StockQuantity with cart/checkout guards, atomic decrement inside an EF Core transaction, and an out-of-stock badge on the storefront. Scope: single instance, no distributed load test yet.' },
      ],
      detailsTitle: 'Secondary technical details',
      detailsDescription:
        'These details remain available for hiring managers, but sit below the main decisions to reduce visual density.',
      dataModelDetailsTitle: 'Conceptual data model',
      stackDetailsTitle: 'Stack by layer',
      implementationDetailsTitle: 'Implementation notes',
      highlights: [
        'Multi-company model to separate users and company operations without mixing responsibilities.',
        'Identity and roles to distinguish permissions for customers, companies, employees, and admins.',
        'PricingCalculatorService to centralize costs, margins, and calculated prices in a portable, testable way.',
        'Signed webhooks and server-side verification for payments with Stripe, Mercado Pago, and bank transfer.',
        'Migrations, seed data, and configuration to ensure the calculator has valid base rows.',
      ],
      stack: [
        'ASP.NET Core 8 MVC',
        'Entity Framework Core + PostgreSQL',
        'ASP.NET Core Identity',
        'Stripe + Mercado Pago + Bank Transfer',
        'Google OAuth',
        'MinIO / S3 storage',
        'Docker Compose + Nginx',
        'ES/EN localization',
      ],
    },
    lessonsLearned: {
      eyebrow: 'Lessons and improvements',
      title: 'What I learned and what I would do differently',
      description:
        'What was harder than expected, what I would change in a second version, and what production would require.',
      items: [
        'The calculator was harder to design than expected: migrating from SQL views/triggers to PricingCalculatorService + EF Core required several iterations to maintain portability and testability.',
        'Docker simplified deployment and health checks (/health/live, /health/ready) provide basic visibility, but in production I would add centralized logging and alerts.',
        'The public demo was key to showing value without opening sensitive permissions. Backups are automated but restore drills remain manual.',
      ],
    },
    infrastructure: {
      eyebrow: 'Infrastructure',
      title: 'Docker, Nginx, and VPS',
      description:
        'Deployment uses Docker Compose for service isolation, Nginx as reverse proxy with HTTPS, and a real Ubuntu VPS for full environment control.',
      items: [
        { title: 'Docker Compose', description: 'Three isolated services: ASP.NET Core, PostgreSQL, and MinIO. One command to bring up the entire environment.' },
        { title: 'Multi-store platform', description: 'VaultShop + UkiyoStudio share the same codebase with per-store isolated DB, MinIO bucket, and scoped credentials.' },
        { title: 'Automated backups', description: 'Weekly/daily cron with pg_dump + mc mirror, freshness and disk checks.' },
        { title: 'Nginx HTTPS', description: 'SSL termination with Let\'s Encrypt and reverse proxy to the application container.' },
        { title: 'MinIO', description: 'S3-compatible image storage, self-hosted to avoid external service dependencies.' },
        { title: 'Ubuntu VPS', description: 'Full control of the runtime environment, real server administration, and manual deployment.' },
      ],
    },
    operationalProof: {
      eyebrow: 'Operational proof',
      title: 'What works on the real VPS',
      description:
        'Beyond code: evidence that the system is deployed and operational with basic maintenance processes.',
      items: [
        { label: 'Demo', value: 'Live at vaultshop.evaldez.ar' },
        { label: 'HTTPS', value: 'Let\'s Encrypt certificate, auto-renewal' },
        { label: 'Backup', value: 'pg_dump + MinIO auto, manual restore verified' },
        { label: 'Deploy', value: 'Docker Compose, manual update' },
        { label: 'Health', value: '/health/live + /health/ready (DB + storage)' },
        { label: 'Security', value: 'Rate limiting + lockout + branded 404/500' },
      ],
    },
    limitations: {
      eyebrow: 'Limitations',
      title: 'What it is and what it is not',
      description:
        'A backend case study with real deployment, not an enterprise production system.',
      items: [
        'MVC monolith on a single VPS: enough for the current scope, no redundancy or horizontal scaling.',
        'Demo data and manual deployment, no real production customers.',
        'Stock with guards and atomic decrement on a single instance; concurrent load test and distributed lock still pending.',
        'Automated backups with manual restore; basic observability with health checks and logs.',
        'The app installed on the phone runs on the deployed web app: it requires connectivity, with no service worker or offline mode.',
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'Frequently asked questions',
      description: 'Direct answers about the project for hiring managers.',
      items: [
        {
          question: 'Is VaultShop a real project or a demo?',
          answer: 'It is a real project deployed on a VPS with demo data. I use test data to avoid exposing sensitive customer information.',
        },
        {
          question: 'How scalable is the architecture?',
          answer: 'It is an MVC monolith on a single VPS, sufficient for the current scope. Horizontal scaling would require service separation and redundancy.',
        },
        {
          question: 'How do you handle payments and security?',
          answer: 'Stripe and Mercado Pago with signed webhooks, server-side verification, rate limiting, and lockout. Payments never touch the server directly.',
        },
        {
          question: 'Is the code available on GitHub?',
          answer: 'Yes, the repository is public at github.com/Emmanuel-Valdez/VaultShop with README, screenshots, and technical documentation.',
        },
      ],
    },
    media: {
      eyebrow: 'Additional evidence',
      title: 'Complementary technical screenshots',
      description:
        'Screenshots used as support to document public flows and protected screens without opening sensitive permissions.',
      groups: [
        { title: 'Customer flow', screenshotIndexes: [0, 1] },
        { title: 'Admin flow', screenshotIndexes: [2, 5] },
        { title: 'Pricing workflow', screenshotIndexes: [3, 4] },
      ],
      screenshots: [
        {
          src: '/projects/vaultshop/storefront.webp',
          alt: 'VaultShop public store with product catalog',
          title: 'Public store',
          description: 'Customer-facing catalog with search, navigation, and cart access.',
        },
        {
          src: '/projects/vaultshop/checkout-summary.webp',
          alt: 'VaultShop checkout summary',
          title: 'Checkout',
          description: 'Purchase view with order summary and payment flow.',
        },
        {
          src: '/projects/vaultshop/admin-orders.webp',
          alt: 'VaultShop admin orders panel',
          title: 'Order management',
          description: 'Admin list with statuses, totals, filters, and detail access.',
        },
        {
          src: '/projects/vaultshop/payment-gate.webp',
          alt: 'VaultShop payment integration',
          title: 'Payment integrations',
          description: 'Payment processing with Stripe, Mercado Pago, and signed webhooks.',
        },
        {
          src: '/projects/vaultshop/final-prices.webp',
          alt: 'VaultShop pricing dashboard',
          title: 'Pricing dashboard',
          description: 'Dashboard with costs, prices, and admin-controlled commercial decisions.',
        },
        {
          src: '/projects/vaultshop/mobile-storefront.webp',
          alt: 'VaultShop mobile storefront',
          title: 'Mobile storefront',
          description: 'Responsive mobile view of the customer-facing store.',
        },
      ],
    },
  },
} as const;
