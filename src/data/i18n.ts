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
      title: 'Emmanuel Valdez | Desarrollador Backend .NET',
      description:
        'Portfolio de Emmanuel Valdez, Desarrollador Backend .NET enfocado en ASP.NET Core, C#, PostgreSQL, EF Core, autenticación, pagos y sistemas de negocio.',
    },
    sections: {
      experience: 'Experiencia Laboral',
      projects: 'Proyectos',
      about: 'Sobre mí',
      contact: 'Hablemos',
    },
    hero: {
      name: 'Emmanuel Valdez',
      brandLine: 'evaldez.ar · Portfolio backend .NET',
      title: 'Backend .NET Developer enfocado en sistemas de negocio, datos y lógica operativa',
      lines: [
        {
          text: 'Convierto procesos operativos -costos, stock, órdenes y precios- en software usable y mantenible para negocios reales.',
        },
        {
          text: ' Como prueba principal, construí y desplegué VaultShop: una aplicación ASP.NET Core 8 MVC con PostgreSQL, Docker Compose, MinIO, Stripe, Identity roles y Nginx HTTPS en un VPS real.',
          class: 'text-blue-200/90',
        },
        {
          text: ' Desde Mendoza, Argentina.',
          class: 'text-red-200/90',
        },
      ],
      stackAriaLabel: 'Competencias backend demostradas',
      stack: ['ASP.NET Core 8', 'PostgreSQL', 'Docker', 'Stripe', 'Nginx', 'Linux VPS'],
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
          { label: 'Stack', value: '.NET, C#, PostgreSQL' },
          { label: 'Ubicación', value: 'Mendoza, Argentina' },
          { label: 'Modalidad', value: 'Remoto / híbrido' },
          { label: 'Roles objetivo', value: 'Backend .NET, Fullstack .NET' },
          { label: 'Idioma', value: 'Español / Inglés' },
        ],
      },
      socialAriaLabel: 'Perfiles profesionales',
    },
    experience: [
      {
        date: '2020 - Actualmente...',
        title: 'Operaciones e-commerce y administración',
        company: 'VaultShop / Emprendimiento familiar',
        description:
          'Gestioné operaciones completas de tienda online: catálogo, stock, pedidos, atención al cliente, despacho y logística. Identifiqué problemas operativos (costos manuales, errores de precio, falta de historial) y los transformé en requisitos para la plataforma VaultShop.',
        highlights: [
          'Coordiné migración de TiendaNube a Tienda Negocio manteniendo continuidad operativa.',
          'Identifiqué necesidades de pricing, roles y administración que se convirtieron en el alcance de VaultShop.',
          'Gestión diaria de catálogo, stock, pedidos, atención al cliente y logística de despacho.',
        ],
        tags: ['E-commerce', 'TiendaNube', 'Tienda Negocio', 'Logística', 'Pricing'],
        tagsAriaLabel: 'Áreas de experiencia',
        link: '',
        linkLabel: '',
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
            'Aplicación ASP.NET Core 8 MVC desplegada en un VPS Ubuntu con PostgreSQL, Docker Compose, MinIO, Stripe, Identity roles, localización ES/EN y Nginx HTTPS.',
          stack: [
            'ASP.NET Core 8 MVC',
            'Entity Framework Core + PostgreSQL',
            'ASP.NET Core Identity',
            'Stripe Checkout + webhooks',
            'MinIO / S3 storage',
            'Docker Compose',
            'Nginx HTTPS',
            'Ubuntu VPS',
          ],
          highlights: [
            'Self-hosted en Oracle Cloud VPS con Docker Compose y Nginx HTTPS reverse proxy.',
            'Backup/restore validado para PostgreSQL y MinIO. Monitoreo básico de uptime/TLS.',
            'CI con GitHub Actions: restore, build y tests en cada push a main.',
            'Theme configurable, admin order guards, PWA manifest dinámico.',
          ],
          metrics: [
            { value: '8', label: 'tecnologías' },
            { value: '3', label: 'servicios' },
            { value: 'CI', label: 'GitHub Actions' },
            { value: 'VPS', label: 'Ubuntu 24.04' },
          ],
          link: 'https://vaultshop.evaldez.ar',
          github: 'https://github.com/Emmanuel-Valdez/VaultShop',
          image: '/projects/vaultshop/storefront.webp',
          imageMobile: '/projects/vaultshop/mobile-storefront.webp',
          imageAlt: 'Captura real de la tienda VaultShop con catálogo de productos',
          tags: ['CSharp', 'GitHub', 'PostgreSQL'],
        },
        {
          title: 'Proyecto final C# QUARK Academy',
          description:
            'Proyecto C# de base para practicar lógica de negocio, historial de cotización, restricciones de stock y manejo de errores en Windows Forms.',
          link: '',
          github: 'https://github.com/Emmanuel-Valdez/ProyectoCQuarq',
          image: '/projects/CotizadorTiendaRopa.webp',
          imageAlt: 'Captura de la calculadora de costos para tienda de ropa en C#',
          tags: ['CSharp', 'GitHub'],
        },
        {
          title: 'Funko shop',
          description:
            'Proyecto web de aprendizaje con Node.js, Express y MySQL. Sirve como soporte para mostrar CRUD, carrito, paginación y autenticación fuera del stack .NET principal.',
          link: 'https://fullstackproject-backend.vercel.app/',
          github: 'https://github.com/Emmanuel-Valdez/fullstackproject-backend',
          image: '/projects/funko_shopWeb.webp',
          imageAlt: 'Captura de la tienda virtual Funko shop',
          tags: ['NodeJS', 'Express', 'MySQL', 'GitHub'],
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
          title: 'Dirección técnica',
          description: 'Arquitectura, mantenibilidad y sistemas backend con reglas de negocio claras.',
        },
      ],
      intro:
        'Soy Emmanuel Valdez, desarrollador backend .NET enfocado en aplicaciones donde la lógica de negocio, los datos y la operación importan tanto como la interfaz.',
      strong: 'Backend con .NET, C# y SQL',
      paragraphs: [
        'Vengo de una base técnica en producción industrial y automatización, por eso tiendo a pensar el software como una herramienta para ordenar procesos reales: costos, inventario, ventas, logística, usuarios y decisiones administrativas.',
        'Esa mirada se refleja en VaultShop, una aplicación ASP.NET Core 8 MVC desplegada en un VPS real con PostgreSQL, Docker Compose, MinIO, Stripe, Identity roles y Nginx HTTPS. El proyecto me permitió trabajar con persistencia relacional, pagos, roles, almacenamiento de objetos, CI/CD y monitoreo.',
        'Actualmente estoy consolidando el portfolio alrededor de evidencia verificable: sistemas desplegados, datos relacionales, pagos, roles, infraestructura y documentación operativa.',
      ],
      closing:
        'También fui maestro particular y ayudante de cátedra en matemáticas, física e inglés. Esa experiencia fortaleció mi forma de explicar problemas complejos, documentar decisiones y colaborar con otras personas.',
      imageAlt: 'Retrato de Emmanuel Valdez',
    },
    contact: {
      text: '¿Buscás un desarrollador backend .NET para sistemas internos, e-commerce o aplicaciones con lógica de negocio real? Escribime por email o descargá mi CV.',
      emailLabel: 'Escribirme por email',
      cvLabel: 'Descargar CV en PDF',
      cv: cvFiles.es,
    },
  },
  en: {
    meta: {
      title: 'Emmanuel Valdez | Backend .NET Developer',
      description:
        'Portfolio of Emmanuel Valdez, Backend .NET Developer focused on ASP.NET Core, C#, PostgreSQL, EF Core, authentication, payments, and business systems.',
    },
    sections: {
      experience: 'Work Experience',
      projects: 'Projects',
      about: 'About Me',
      contact: 'Let\'s Talk',
    },
    hero: {
      name: 'Emmanuel Valdez',
      brandLine: 'evaldez.ar · .NET backend portfolio',
      title: '.NET Backend Developer focused on business systems, data, and operational logic',
      lines: [
        {
          text: 'I turn operational workflows - costs, stock, orders, and pricing - into usable, maintainable software for real businesses.',
        },
        {
          text: ' As the main proof point, I built and deployed VaultShop: an ASP.NET Core 8 MVC application with PostgreSQL, Docker Compose, MinIO, Stripe, Identity roles, and Nginx HTTPS on a real VPS.',
          class: 'text-blue-200/90',
        },
        {
          text: ' Based in Mendoza, Argentina.',
          class: 'text-red-200/90',
        },
      ],
      stackAriaLabel: 'Demonstrated backend competencies',
      stack: ['ASP.NET Core 8', 'PostgreSQL', 'Docker', 'Stripe', 'Nginx', 'Linux VPS'],
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
          { label: 'Stack', value: '.NET, C#, PostgreSQL' },
          { label: 'Location', value: 'Mendoza, Argentina' },
          { label: 'Work mode', value: 'Remote / hybrid' },
          { label: 'Target roles', value: '.NET Backend, .NET Fullstack' },
          { label: 'Languages', value: 'Spanish / English' },
        ],
      },
      socialAriaLabel: 'Professional profiles',
    },
    experience: [
      {
        date: '2020 - Present',
        title: 'E-commerce operations and administration',
        company: 'VaultShop / Family business',
        description:
          'I managed full online store operations: catalog, stock, orders, customer service, shipping, and logistics. I identified operational issues (manual costs, pricing errors, lack of history) and turned them into requirements for the VaultShop platform.',
        highlights: [
          'Coordinated migration from TiendaNube to Tienda Negocio while maintaining operational continuity.',
          'Identified pricing, roles, and administration needs that became VaultShop\'s scope.',
          'Daily management of catalog, stock, orders, customer service, and shipping logistics.',
        ],
        tags: ['E-commerce', 'TiendaNube', 'Tienda Negocio', 'Logistics', 'Pricing'],
        tagsAriaLabel: 'Experience areas',
        link: '',
        linkLabel: '',
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
            'ASP.NET Core 8 MVC application deployed on an Ubuntu VPS with PostgreSQL, Docker Compose, MinIO, Stripe, Identity roles, ES/EN localization, and Nginx HTTPS.',
          stack: [
            'ASP.NET Core 8 MVC',
            'Entity Framework Core + PostgreSQL',
            'ASP.NET Core Identity',
            'Stripe Checkout + webhooks',
            'MinIO / S3 storage',
            'Docker Compose',
            'Nginx HTTPS',
            'Ubuntu VPS',
          ],
          highlights: [
            'Self-hosted on Oracle Cloud VPS with Docker Compose and Nginx HTTPS reverse proxy.',
            'Backup/restore validated for PostgreSQL and MinIO. Basic uptime/TLS monitoring.',
            'CI with GitHub Actions: restore, build, and tests on every push to main.',
            'Configurable theme, admin order guards, dynamic PWA manifest.',
          ],
          metrics: [
            { value: '8', label: 'technologies' },
            { value: '3', label: 'services' },
            { value: 'CI', label: 'GitHub Actions' },
            { value: 'VPS', label: 'Ubuntu 24.04' },
          ],
          link: 'https://vaultshop.evaldez.ar',
          github: 'https://github.com/Emmanuel-Valdez/VaultShop',
          image: '/projects/vaultshop/storefront.webp',
          imageMobile: '/projects/vaultshop/mobile-storefront.webp',
          imageAlt: 'Real screenshot of VaultShop online store with product catalog',
          tags: ['CSharp', 'GitHub', 'PostgreSQL'],
        },
        {
          title: 'C# QUARK Academy final project',
          description:
            'Foundational C# project for practicing business logic, quote history, stock restrictions, and error handling in Windows Forms.',
          link: '',
          github: 'https://github.com/Emmanuel-Valdez/ProyectoCQuarq',
          image: '/projects/CotizadorTiendaRopa.webp',
          imageAlt: 'Screenshot of a C# cost quotation tool for a clothing store',
          tags: ['CSharp', 'GitHub'],
        },
        {
          title: 'Funko shop',
          description:
            'Learning web project with Node.js, Express, and MySQL. It supports the portfolio by showing CRUD, cart, pagination, and authentication outside the main .NET stack.',
          link: 'https://fullstackproject-backend.vercel.app/',
          github: 'https://github.com/Emmanuel-Valdez/fullstackproject-backend',
          image: '/projects/funko_shopWeb.webp',
          imageAlt: 'Screenshot of the Funko shop online store',
          tags: ['NodeJS', 'Express', 'MySQL', 'GitHub'],
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
          title: 'Technical direction',
          description: 'Architecture, maintainability, and backend systems with clear business rules.',
        },
      ],
      intro:
        'I am Emmanuel Valdez, a .NET backend developer focused on applications where business logic, data, and operations matter as much as the interface.',
      strong: 'backend development with .NET, C#, and SQL',
      paragraphs: [
        'I come from a technical background in industrial production and automation, so I tend to think of software as a tool for organizing real processes: costs, inventory, sales, logistics, users, and administrative decisions.',
        'That perspective is reflected in VaultShop, an ASP.NET Core 8 MVC application deployed on a real VPS with PostgreSQL, Docker Compose, MinIO, Stripe, Identity roles, and Nginx HTTPS. The project let me work with relational persistence, payments, roles, object storage, CI/CD, and monitoring.',
        'I am currently consolidating the portfolio around verifiable evidence: deployed systems, relational data, payments, roles, infrastructure, and operational documentation.',
      ],
      closing:
        'I also worked as a private teacher and teaching assistant in math, physics, and English. That experience strengthened how I explain complex problems, document decisions, and collaborate with other people.',
      imageAlt: 'Portrait of Emmanuel Valdez',
    },
    contact: {
      text: 'Looking for a .NET backend developer for internal systems, e-commerce, or applications with real business logic? Email me or download my CV.',
      emailLabel: 'Email me',
      cvLabel: 'Download CV as PDF',
      cv: cvFiles.en,
    },
  },
} as const;

export const vaultshopContent = {
  es: {
    meta: {
      title: 'Caso de estudio VaultShop - ASP.NET Core, PostgreSQL y e-commerce',
      description:
        'Caso de estudio de VaultShop, aplicación e-commerce desplegada en VPS real con ASP.NET Core 8 MVC, Entity Framework Core, PostgreSQL, Docker Compose, MinIO, Stripe, Identity roles y Nginx HTTPS.',
      image: '/projects/vaultshop/storefront.webp',
    },
    backHref: '/#projects',
    backLabel: 'Volver a proyectos',
    eyebrow: 'Caso de estudio · ASP.NET Core + PostgreSQL + VPS',
    title: 'VaultShop',
    intro:
      'VaultShop es una aplicación ASP.NET Core 8 MVC desplegada en un VPS Ubuntu real con PostgreSQL, Docker Compose, MinIO para almacenamiento de imágenes, Stripe para pagos, Identity roles para autenticación y Nginx HTTPS como reverse proxy.',
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
      { label: 'Integraciones', value: 'Stripe + Facebook OAuth + ES/EN' },
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
        'Integraciones acotadas con Stripe, Facebook OAuth y localización ES/EN.',
        'Calculadora de precios con costos, márgenes, views/triggers SQL y revisión administrativa.',
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
    problemTitle: 'Problema',
    solutionTitle: 'Solución',
    problemItems: [
      'El pricing dependía de una planilla y de decisiones administrativas difíciles de centralizar.',
      'La información comercial vivía separada entre catálogo, pedidos, costos y usuarios.',
      'El negocio necesitaba una base consistente para vender, calcular precios y revisar órdenes.',
    ],
    solutionItems: [
      'Tienda pública para catálogo, favoritos, carrito y flujo de compra.',
      'Panel administrativo para productos, compañías, usuarios, roles y órdenes.',
      'Calculadora que conecta costos, márgenes y precios finales sobre datos persistidos.',
      'Integraciones con Identity, Facebook OAuth, Stripe y localización ES/EN.',
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
        dataDetails: ['EF Core', 'Views/triggers', 'Costos y precios', 'Imágenes'],
        services: 'Servicios externos',
        serviceDetails: ['Stripe', 'Facebook OAuth'],
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
            'PostgreSQL guarda catálogo, usuarios, empresas, órdenes, costos y precios. Las views y triggers ayudan a centralizar totales y mantener sincronizados los valores usados por la calculadora.',
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
        { layer: 'Datos', items: ['Entity Framework Core', 'PostgreSQL', 'Views y triggers'] },
        { layer: 'Servicios externos', items: ['Stripe', 'Facebook OAuth', 'DotNetEnv para secretos locales'] },
      ],
    },
    calculator: {
      eyebrow: 'Calculadora administrativa',
      title: 'Reglas de precio basadas en costos reales',
      description: 'La calculadora convierte materiales, costos fijos, costos porcentuales y márgenes en precios sugeridos para decisiones administrativas.',
      proofTitle: 'Por qué es el proof point diferencial',
      proofItems: [
        { title: 'Inputs de costo', description: 'Materiales, packaging, costos fijos y comisiones alimentan el cálculo desde datos administrables.' },
        { title: 'Reglas de negocio', description: 'Los márgenes mayoristas y minoristas se aplican como criterios explícitos, no como decisiones sueltas en una planilla.' },
        { title: 'Soporte SQL', description: 'Views y triggers ayudan a mantener totales y precios calculados consistentes.' },
        { title: 'Resultado admin', description: 'El administrador compara costos, precios actuales y precios sugeridos antes de decidir cambios comerciales.' },
      ],
      finalTitle: 'Dashboard de precios finales',
      finalDescription:
        'El dashboard permite comparar precios vigentes contra valores calculados, detectar productos que requieren revisión y mantener la decisión comercial final en manos del administrador.',
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
          ['Insumos de costo', 'SQL views', 'Precios calculados'],
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
            'CostByProductView',
            'FinalPriceView',
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
        { title: 'SQL views para pricing y costos', description: 'Las views centralizan cálculos de costos por producto y precios finales para que la UI no replique lógica crítica.' },
        { title: 'SQL triggers para consistencia de totales', description: 'Los triggers ayudan a mantener valores derivados sincronizados cuando cambian cantidades o precios de insumos.' },
        { title: 'Stripe y Facebook OAuth como integraciones externas', description: 'Pagos y autenticación social se integran como servicios acotados alrededor del flujo principal de compra.' },
        { title: 'Localización ES/EN para contenido público', description: 'La interfaz bilingüe permite validar navegación y contenido visible en español e inglés desde el mismo sistema.' },
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
        'SQL views para centralizar costos fijos, costos porcentuales, costos por producto y precios finales calculados.',
        'SQL triggers para mantener totales consistentes cuando cambian cantidades o precios de insumos.',
        'Migraciones, seed data y reparación inicial para asegurar que la calculadora tenga filas base válidas.',
      ],
      stack: [
        'ASP.NET Core 8 MVC',
        'Entity Framework Core',
        'PostgreSQL',
        'ASP.NET Core Identity',
        'Facebook OAuth',
        'Stripe',
        'Localización ES/EN',
        'DotNetEnv',
      ],
    },
    lessonsLearned: {
      eyebrow: 'Aprendizajes y mejoras',
      title: 'Qué aprendí y qué haría distinto',
      description:
        'Lo que resultó más complejo de lo esperado, qué cambiaría en una segunda versión y qué faltaría para producción real.',
      items: [
        'La calculadora fue más difícil de diseñar de lo esperado: modelar costos variables, márgenes y triggers para mantener totales consistentes requirió varias iteraciones.',
        'Docker simplificó el deploy pero el monitoreo sigue siendo básico: en producción agregaría health checks, logs centralizados y alertas.',
        'La demo pública fue clave para mostrar valor sin abrir permisos sensibles, pero un sistema real necesita CI/CD, backups automatizados y observabilidad.',
      ],
    },
    infrastructure: {
      eyebrow: 'Infraestructura',
      title: 'Docker, Nginx y VPS',
      description:
        'El despliegue usa Docker Compose para aislamiento de servicios, Nginx como reverse proxy con HTTPS, y un VPS Ubuntu real para control total del entorno.',
      items: [
        { title: 'Docker Compose', description: 'Tres servicios aislados: ASP.NET Core, PostgreSQL y MinIO. Un solo comando para levantar todo el entorno.' },
        { title: 'Nginx HTTPS', description: 'Terminación SSL con Let\'s Encrypt y reverse proxy hacia el contenedor de la aplicación.' },
        { title: 'MinIO', description: 'Almacenamiento de imágenes compatible con S3, autoalojado para no depender de servicios externos.' },
        { title: 'VPS Ubuntu', description: 'Control total del entorno de producción, aprendizaje real de administración de servidores y despliegue manual.' },
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
        { label: 'Backup', value: 'pg_dump + MinIO, restauración verificada' },
        { label: 'Deploy', value: 'Docker Compose, actualización manual' },
      ],
    },
    limitations: {
      eyebrow: 'Limitaciones',
      title: 'Qué es y qué no es',
      description:
        'Un caso de estudio backend con despliegue real, no un sistema empresarial en producción.',
      items: [
        'Monolito MVC, no microservicios: suficiente para el alcance actual pero no escalable horizontalmente.',
        'Un solo VPS, sin redundancia ni balanceo de carga.',
        'Datos demo, no clientes reales.',
        'Sin CI/CD a producción: el deploy es manual.',
        'Sin stack de observabilidad: no hay Grafana, logs centralizados ni métricas.',
        'Stripe en modo test, no en producción real.',
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
          alt: 'Integración Stripe en VaultShop',
          title: 'Integración Stripe',
          description: 'Procesamiento de pagos con Stripe Checkout y webhooks firmados.',
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
        'Case study for VaultShop, an e-commerce application deployed on a real VPS with ASP.NET Core 8 MVC, Entity Framework Core, PostgreSQL, Docker Compose, MinIO, Stripe, Identity roles, and Nginx HTTPS.',
      image: '/projects/vaultshop/storefront.webp',
    },
    backHref: '/en/#projects',
    backLabel: 'Back to projects',
    eyebrow: 'Case study · ASP.NET Core + PostgreSQL + VPS',
    title: 'VaultShop',
    intro:
      'VaultShop is an ASP.NET Core 8 MVC application deployed on a real Ubuntu VPS with PostgreSQL, Docker Compose, MinIO for image storage, Stripe for payments, Identity roles for authentication, and Nginx HTTPS as reverse proxy.',
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
      { label: 'Integrations', value: 'Stripe + Facebook OAuth + ES/EN' },
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
        'Bounded integrations with Stripe, Facebook OAuth, and ES/EN localization.',
        'Pricing calculator with costs, margins, SQL views/triggers, and admin review.',
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
    problemTitle: 'Problem',
    solutionTitle: 'Solution',
    problemItems: [
      'Pricing depended on a spreadsheet and administrative decisions that were hard to centralize.',
      'Commercial information was split across catalog, orders, costs, and users.',
      'The business needed a consistent base for selling, calculating prices, and reviewing orders.',
    ],
    solutionItems: [
      'Public store for catalog, favorites, cart, and purchase flow.',
      'Admin panel for products, companies, users, roles, and orders.',
      'Calculator that connects costs, margins, and final prices over persisted data.',
      'Integrations with Identity, Facebook OAuth, Stripe, and ES/EN localization.',
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
        dataDetails: ['EF Core', 'Views/triggers', 'Costs and prices', 'Images'],
        services: 'External services',
        serviceDetails: ['Stripe', 'Facebook OAuth'],
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
            'PostgreSQL stores catalog, users, companies, orders, costs, and prices. Views and triggers help centralize totals and keep values used by the calculator synchronized.',
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
        { layer: 'Data', items: ['Entity Framework Core', 'PostgreSQL', 'Views and triggers'] },
        { layer: 'External services', items: ['Stripe', 'Facebook OAuth', 'DotNetEnv for local secrets'] },
      ],
    },
    calculator: {
      eyebrow: 'Admin calculator',
      title: 'Pricing rules based on real costs',
      description: 'The calculator turns materials, fixed costs, percentage-based costs, and margins into suggested prices for administrative decisions.',
      proofTitle: 'Why this is the differentiated proof point',
      proofItems: [
        { title: 'Cost inputs', description: 'Materials, packaging, fixed costs, and fees feed the calculation from admin-managed data.' },
        { title: 'Business rules', description: 'Wholesale and retail margins are applied as explicit criteria instead of isolated spreadsheet decisions.' },
        { title: 'SQL support', description: 'Views and triggers help keep totals and calculated prices consistent.' },
        { title: 'Admin outcome', description: 'The admin compares costs, current prices, and suggested prices before making commercial changes.' },
      ],
      finalTitle: 'Final-price dashboard',
      finalDescription:
        'The dashboard compares current prices against calculated values, highlights products that need review, and keeps the final commercial decision in the admin\'s hands.',
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
          ['Cost inputs', 'SQL views', 'Calculated prices'],
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
            'CostByProductView',
            'FinalPriceView',
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
        { title: 'ASP.NET Core MVC for store and admin', description: 'A MVC monolith keeps views, controllers, and domain rules close without adding unnecessary distributed complexity.' },
        { title: 'EF Core + PostgreSQL for relational persistence', description: 'The model connects catalog, users, orders, costs, and prices in one consistent operational database.' },
        { title: 'Identity roles for protected flows', description: 'Customers, companies, employees, and admins can have distinct permissions without exposing sensitive actions in the public demo.' },
        { title: 'SQL views for pricing and costs', description: 'Views centralize cost-by-product and final-price calculations so the UI does not duplicate critical logic.' },
        { title: 'SQL triggers for total consistency', description: 'Triggers help keep derived values synchronized when input quantities or prices change.' },
        { title: 'Stripe and Facebook OAuth as external integrations', description: 'Payments and social authentication are integrated as bounded services around the main purchase flow.' },
        { title: 'ES/EN localization for public content', description: 'The bilingual interface validates navigation and visible content in Spanish and English from the same system.' },
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
        'SQL views to centralize fixed costs, percentage costs, product costs, and calculated final prices.',
        'SQL triggers to keep totals consistent when input quantities or prices change.',
        'Migrations, seed data, and startup repair flows to ensure the calculator has valid base rows.',
      ],
      stack: [
        'ASP.NET Core 8 MVC',
        'Entity Framework Core + PostgreSQL',
        'ASP.NET Core Identity',
        'Stripe Checkout + webhooks',
        'MinIO / S3 storage',
        'Docker Compose',
        'Nginx HTTPS',
        'Ubuntu VPS',
      ],
    },
    lessonsLearned: {
      eyebrow: 'Lessons and improvements',
      title: 'What I learned and what I would do differently',
      description:
        'What was harder than expected, what I would change in a second version, and what production would require.',
      items: [
        'The calculator was harder to design than expected: modeling variable costs, margins, and triggers to keep totals consistent required several iterations.',
        'Docker simplified deployment but monitoring remains basic: in production I would add health checks, centralized logging, and alerts.',
        'The public demo was key to showing value without opening sensitive permissions, but a real system needs CI/CD, automated backups, and observability.',
      ],
    },
    infrastructure: {
      eyebrow: 'Infrastructure',
      title: 'Docker, Nginx, and VPS',
      description:
        'Deployment uses Docker Compose for service isolation, Nginx as reverse proxy with HTTPS, and a real Ubuntu VPS for full environment control.',
      items: [
        { title: 'Docker Compose', description: 'Three isolated services: ASP.NET Core, PostgreSQL, and MinIO. One command to bring up the entire environment.' },
        { title: 'Nginx HTTPS', description: 'SSL termination with Let\'s Encrypt and reverse proxy to the application container.' },
        { title: 'MinIO', description: 'S3-compatible image storage, self-hosted to avoid external service dependencies.' },
        { title: 'Ubuntu VPS', description: 'Full control of the production environment, real server administration learning, and manual deployment.' },
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
        { label: 'Backup', value: 'pg_dump + MinIO, restore verified' },
        { label: 'Deploy', value: 'Docker Compose, manual update' },
      ],
    },
    limitations: {
      eyebrow: 'Limitations',
      title: 'What it is and what it is not',
      description:
        'A backend case study with real deployment, not an enterprise production system.',
      items: [
        'MVC monolith, not microservices: sufficient for current scope but not horizontally scalable.',
        'Single VPS, no redundancy or load balancing.',
        'Demo data, not real customers.',
        'No CI/CD to production: deployment is manual.',
        'No observability stack: no Grafana, centralized logging, or metrics.',
        'Stripe in test mode, not real production.',
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
          alt: 'VaultShop Stripe payment integration',
          title: 'Stripe integration',
          description: 'Payment processing with Stripe Checkout and signed webhooks.',
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
