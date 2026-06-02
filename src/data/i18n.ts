export type Locale = 'es' | 'en';

export const routes = {
  es: {
    home: '/',
    ukiyo: '/proyectos/ukiyo/',
  },
  en: {
    home: '/en/',
    ukiyo: '/en/projects/ukiyo/',
  },
} as const;

export const cvFiles = {
  es: {
    href: '/media/Emmanuel_Valdez_CV_Backend_NET_2026_ES.pdf',
    download: 'Emmanuel-Valdez-CV-Backend-NET-ES.pdf',
  },
  en: {
    href: '/media/Emmanuel_Valdez_CV_Backend_NET_2026_EN.pdf',
    download: 'Emmanuel-Valdez-CV-Backend-NET-EN.pdf',
  },
} as const;

export const common = {
  es: {
    skipLink: 'Saltar al contenido principal',
    headerAriaLabel: 'Navegación principal',
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
      about: 'Sobre mí',
      contact: 'Contacto',
    },
  },
  en: {
    skipLink: 'Skip to main content',
    headerAriaLabel: 'Main navigation',
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
      about: 'About',
      contact: 'Contact',
    },
  },
} as const;

export const homeContent = {
  es: {
    meta: {
      title: 'Portfolio de Emmanuel Valdez - Backend Developer .NET, C# y SQL',
      description:
        'Portfolio de Emmanuel Valdez, backend developer orientado a .NET, C#, SQL, e-commerce, sistemas de gestión y bases de datos.',
    },
    sections: {
      experience: 'Experiencia Laboral',
      projects: 'Proyectos',
      about: 'Sobre mí',
      contact: 'Hablemos',
    },
    hero: {
      title: 'Backend .NET Developer enfocado en e-commerce, datos y sistemas de gestión',
      lines: [
        {
          text: 'Convierto procesos operativos -costos, stock, órdenes y precios- en software usable y mantenible para negocios reales.',
        },
        {
          text: ' En Ukiyo, transformé un flujo de costos en Excel en un sistema web con tienda, roles, pagos, órdenes y cálculo administrativo de precios.',
          class: 'text-blue-200/90',
        },
        {
          text: ' Desde Mendoza, Argentina.',
          class: 'text-red-200/90',
        },
      ],
      stackAriaLabel: 'Competencias backend demostradas',
      stack: ['Lógica de negocio', 'Modelado relacional', 'Roles y autenticación', 'Pagos', 'E-commerce'],
      availabilityLabel: 'Disponible para trabajar',
      ctas: {
        ariaLabel: 'Acciones principales',
        project: 'Ver proyecto Ukiyo',
        projectHref: routes.es.ukiyo,
        contact: 'Escribirme por email',
        contactHref: 'mailto:evalmon.dev@gmail.com',
        cv: 'Descargar CV',
        cvFile: cvFiles.es,
      },
      recruiter: {
        title: 'Perfil rápido',
        ariaLabel: 'Resumen profesional rápido',
        items: [
          { label: 'Stack', value: '.NET, C#, SQL Server' },
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
        title: 'Operación e-commerce y análisis de procesos para sistema propio',
        company: 'Ukiyo Mochilas y algo más',
        description:
          'Trabajo en la operación de un negocio de productos físicos: catálogo, stock, publicaciones, ventas, pedidos, atención al cliente, logística y datos comerciales. Esa experiencia me permitió detectar procesos repetitivos, criterios de precio y necesidades administrativas que luego transformé en módulos de Ukiyo, un sistema propio construido con ASP.NET Core y SQL Server.',
        highlights: [
          'Administración de catálogo, stock, publicaciones, ventas y migración entre plataformas e-commerce.',
          'Seguimiento de pedidos, coordinación logística y revisión de datos comerciales para decisiones operativas.',
          'Identificación de procesos repetitivos convertidos luego en módulos de software: productos, usuarios, órdenes, compañías, costos y precios.',
          'Modelado de reglas reales de negocio dentro de una aplicación ASP.NET Core con persistencia en SQL Server.',
        ],
        tags: ['E-commerce', 'Procesos de negocio', 'Datos comerciales', 'Pricing', 'SQL Server'],
        tagsAriaLabel: 'Áreas de experiencia',
        link: 'https://ukiyo.tiendanegocio.com/',
        linkLabel: 'Ver tienda actual',
      },
    ],
    projects: {
      featuredStudyLabel: 'Leer caso de estudio',
      featuredStudyHref: routes.es.ukiyo,
      supportingLabel: 'Proyectos de soporte',
      stackAriaPrefix: 'Stack técnico de',
      metricsAriaPrefix: 'Métricas técnicas de',
      buttons: {
        code: 'Ver código en GitHub',
        preview: 'Ver demo',
      },
      items: [
        {
          title: 'Ukiyo Designs',
          eyebrow: 'Proyecto destacado · solución real para e-commerce',
          description:
            'Sistema e-commerce y administrativo para un negocio real. Convierte un flujo de costos en Excel en una aplicación web con tienda, roles, pagos, órdenes y cálculo de precios basado en SQL Server.',
          stack: [
            'ASP.NET Core 8 MVC',
            'Entity Framework Core',
            'SQL Server',
            'Identity + Facebook OAuth',
            'Stripe',
            'ES/EN localization',
          ],
          highlights: [
            'Calculadora administrativa con telas, herrajes, packaging, costos fijos, costos porcentuales y márgenes de ganancia.',
            'Dashboard de precios finales con comparación entre precios actuales, costos calculados, márgenes, filtros y exportación.',
            'Soporte multi-compañía, Identity, Facebook OAuth, Stripe, localización ES/EN y SQL views/triggers para cálculos.',
          ],
          metrics: [
            { value: '4', label: 'roles de usuario' },
            { value: '5', label: 'módulos admin' },
            { value: '2', label: 'integraciones' },
            { value: 'SQL', label: 'views/triggers' },
            { value: 'ES/EN', label: 'localización' },
          ],
          link: 'https://ukiyo.bsite.net/',
          github: 'https://github.com/Emmanuel-Valdez/Ukiyo',
          image: '/projects/ukiyo/store-home.jpg',
          imageAlt: 'Captura real de la tienda virtual Ukiyo Designs con catálogo de productos',
          tags: ['CSharp', 'GitHub', 'MSSQL'],
        },
        {
          title: 'Proyecto final C# QUARK Academy',
          description:
            'Calculadora de costos para tienda de ropa creada en C# con Windows Forms. Incluye historial de cotización, restricciones de stock y manejo de errores.',
          link: '',
          github: 'https://github.com/Emmanuel-Valdez/ProyectoCQuarq',
          image: '/projects/CotizadorTiendaRopa.webp',
          imageAlt: 'Captura de la calculadora de costos para tienda de ropa en C#',
          tags: ['CSharp', 'GitHub'],
        },
        {
          title: 'Funko shop',
          description:
            'Tienda virtual de funkos creada con Node.js, Express y MySQL. Incluye operaciones CRUD, carrito de compras, paginación y autenticación.',
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
          description: '.NET, C#, SQL Server, reglas de negocio, roles, cálculos y persistencia relacional.',
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
      strong: 'backend con .NET, C# y SQL',
      paragraphs: [
        'Vengo de una base técnica en producción industrial y automatización, por eso tiendo a pensar el software como una herramienta para ordenar procesos reales: costos, inventario, ventas, logística, usuarios y decisiones administrativas.',
        'Esa mirada se refleja en Ukiyo, un sistema e-commerce y administrativo construido con ASP.NET Core y SQL Server. El proyecto me permitió trabajar con autenticación, roles, pagos, modelos relacionales, reglas de precio y pantallas administrativas conectadas a necesidades concretas del negocio.',
        'Actualmente estoy consolidando el portfolio alrededor de evidencia verificable: sistemas de negocio, datos relacionales, autenticación, roles, pagos y reglas backend aplicadas.',
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
      title: 'Emmanuel Valdez Portfolio - .NET, C# and SQL Backend Developer',
      description:
        'Portfolio of Emmanuel Valdez, a backend developer focused on .NET, C#, SQL, e-commerce, business management systems, and databases.',
    },
    sections: {
      experience: 'Work Experience',
      projects: 'Projects',
      about: 'About Me',
      contact: 'Let\'s Talk',
    },
    hero: {
      title: '.NET Backend Developer focused on e-commerce, data, and business management systems',
      lines: [
        {
          text: 'I turn operational workflows - costs, stock, orders, and pricing - into usable, maintainable software for real businesses.',
        },
        {
          text: ' In Ukiyo, I turned an Excel-based cost workflow into a web system with a store, roles, payments, orders, and admin price calculation.',
          class: 'text-blue-200/90',
        },
        {
          text: ' Based in Mendoza, Argentina.',
          class: 'text-red-200/90',
        },
      ],
      stackAriaLabel: 'Demonstrated backend competencies',
      stack: ['Business logic', 'Relational modeling', 'Roles and auth', 'Payments', 'E-commerce'],
      availabilityLabel: 'Available for work',
      ctas: {
        ariaLabel: 'Primary actions',
        project: 'View Ukiyo project',
        projectHref: routes.en.ukiyo,
        contact: 'Email me',
        contactHref: 'mailto:evalmon.dev@gmail.com',
        cv: 'Download CV',
        cvFile: cvFiles.en,
      },
      recruiter: {
        title: 'Quick profile',
        ariaLabel: 'Quick professional summary',
        items: [
          { label: 'Stack', value: '.NET, C#, SQL Server' },
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
        title: 'E-commerce operations and process analysis for a custom system',
        company: 'Ukiyo Mochilas y algo más',
        description:
          'I work on the operation of a physical-products business: catalog, stock, listings, sales, orders, customer service, logistics, and commercial data. That experience helped me detect repetitive processes, pricing criteria, and admin needs that I later turned into modules inside Ukiyo, a custom system built with ASP.NET Core and SQL Server.',
        highlights: [
          'Managed catalog, stock, listings, sales, and migration between e-commerce platforms.',
          'Tracked orders, coordinated logistics, and reviewed commercial data for operational decisions.',
          'Identified repetitive processes later converted into software modules: products, users, orders, companies, costs, and prices.',
          'Modeled real business rules inside an ASP.NET Core application with SQL Server persistence.',
        ],
        tags: ['E-commerce', 'Business processes', 'Commercial data', 'Pricing', 'SQL Server'],
        tagsAriaLabel: 'Experience areas',
        link: 'https://ukiyo.tiendanegocio.com/',
        linkLabel: 'View current store',
      },
    ],
    projects: {
      featuredStudyLabel: 'Read case study',
      featuredStudyHref: routes.en.ukiyo,
      supportingLabel: 'Supporting projects',
      stackAriaPrefix: 'Technical stack for',
      metricsAriaPrefix: 'Technical metrics for',
      buttons: {
        code: 'View code on GitHub',
        preview: 'View demo',
      },
      items: [
        {
          title: 'Ukiyo Designs',
          eyebrow: 'Featured project · real e-commerce solution',
          description:
            'E-commerce and admin system for a real business. It turns an Excel-based cost workflow into a web application with a store, roles, payments, orders, and SQL Server-based price calculation.',
          stack: [
            'ASP.NET Core 8 MVC',
            'Entity Framework Core',
            'SQL Server',
            'Identity + Facebook OAuth',
            'Stripe',
            'ES/EN localization',
          ],
          highlights: [
            'Admin calculator for fabrics, hardware, packaging, fixed costs, percentage costs, and profit margins.',
            'Final-price dashboard comparing current prices, calculated costs, margins, filters, and export options.',
            'Multi-company support, Identity, Facebook OAuth, Stripe, ES/EN localization, and SQL views/triggers for calculations.',
          ],
          metrics: [
            { value: '4', label: 'user roles' },
            { value: '5', label: 'admin modules' },
            { value: '2', label: 'integrations' },
            { value: 'SQL', label: 'views/triggers' },
            { value: 'ES/EN', label: 'localization' },
          ],
          link: 'https://ukiyo.bsite.net/',
          github: 'https://github.com/Emmanuel-Valdez/Ukiyo',
          image: '/projects/ukiyo/store-home.jpg',
          imageAlt: 'Real screenshot of the Ukiyo Designs online store product catalog',
          tags: ['CSharp', 'GitHub', 'MSSQL'],
        },
        {
          title: 'C# QUARK Academy final project',
          description:
            'Cost quotation tool for a clothing store built with C# and Windows Forms. Includes quote history, stock restrictions, and error handling.',
          link: '',
          github: 'https://github.com/Emmanuel-Valdez/ProyectoCQuarq',
          image: '/projects/CotizadorTiendaRopa.webp',
          imageAlt: 'Screenshot of a C# cost quotation tool for a clothing store',
          tags: ['CSharp', 'GitHub'],
        },
        {
          title: 'Funko shop',
          description:
            'Virtual Funko store built with Node.js, Express, and MySQL. Includes CRUD operations, shopping cart, pagination, and authentication.',
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
          description: '.NET, C#, SQL Server, business rules, roles, calculations, and relational persistence.',
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
        'That perspective is reflected in Ukiyo, an e-commerce and admin system built with ASP.NET Core and SQL Server. The project let me work with authentication, roles, payments, relational models, pricing rules, and admin screens connected to concrete business needs.',
        'I am currently consolidating the portfolio around verifiable evidence: business systems, relational data, authentication, roles, payments, and applied backend rules.',
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

export const ukiyoContent = {
  es: {
    meta: {
      title: 'Caso de estudio Ukiyo Designs - ASP.NET Core, SQL Server y e-commerce',
      description:
        'Caso de estudio de Ukiyo Designs, sistema e-commerce y gestión de precios construido con ASP.NET Core 8 MVC, Entity Framework Core, SQL Server, Identity, Stripe y localización ES/EN.',
      image: '/projects/ukiyo/store-home.jpg',
    },
    backHref: '/#projects',
    backLabel: 'Volver a proyectos',
    eyebrow: 'Caso de estudio · ASP.NET Core + SQL Server',
    title: 'Ukiyo Designs',
    intro:
      'Ukiyo Designs es una aplicación ASP.NET Core MVC + SQL Server creada para reemplazar un flujo de pricing en Excel por un sistema web con tienda, órdenes, roles, pagos y administración de costos.',
    buttons: {
      demo: 'Ver demo de Ukiyo',
      code: 'Ver código en GitHub',
    },
    heroImageAlt: 'Captura real de Ukiyo Designs con catálogo de productos',
    metricsAriaLabel: 'Resumen del proyecto',
    metrics: [
      { label: 'Roles', value: 'Customer, Company, Employee, Admin' },
      { label: 'Pricing', value: 'Costos, márgenes, mayorista y minorista' },
      { label: 'Integraciones', value: 'Stripe + Facebook OAuth + ES/EN' },
    ],
    summaryCards: [
      { label: 'Tipo de proyecto', value: 'E-commerce + sistema administrativo', emphasis: true },
      { label: 'Rol', value: 'Backend, datos y lógica de negocio con entrega fullstack' },
      { label: 'Problema central', value: 'Pricing operativo que dependía de Excel y decisiones manuales', emphasis: true },
      { label: 'Stack', value: 'ASP.NET Core MVC, EF Core, SQL Server, Identity, Stripe' },
      { label: 'Alcance', value: 'Tienda, carrito, órdenes, usuarios, compañías, admin y pricing' },
      { label: 'Prueba técnica', value: 'Roles, SQL views/triggers, modelo relacional y flujos protegidos' },
      { label: 'Evidencia', value: 'Demo, GitHub, video walkthrough y capturas reales' },
      { label: 'Lectura recruiter', value: 'Backend .NET aplicado a reglas de negocio y datos reales', emphasis: true },
    ],
    walkthrough: {
      eyebrow: 'Video walkthrough',
      title: 'El flujo completo como evidencia central',
      description:
        'El video muestra el flujo principal sin exponer permisos sensibles: compra del cliente, creación de la orden y seguimiento administrativo sobre datos persistidos.',
      videoLabel: 'Video recorrido del caso de estudio Ukiyo Designs',
      fallback: 'Tu navegador no puede reproducir este video. Podés revisar las capturas del caso de estudio más abajo.',
      highlights: [
        'Flujo de cliente: sesión, catálogo, carrito y avance hacia pago.',
        'Persistencia de órdenes y datos necesarios para seguimiento administrativo.',
        'Gestión admin de estados para preparación, envío, entrega y visibilidad del cliente.',
      ],
    },
    demoScope: {
      eyebrow: 'Alcance de la demo',
      title: 'Qué se puede probar y qué se muestra como evidencia',
      description:
        'La demo publicada permite revisar el producto en funcionamiento sin exponer datos operativos sensibles ni permisos administrativos completos.',
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
        'Las capturas documentan roles, órdenes, módulos administrativos, pagos, pricing y datos persistidos en SQL Server.',
        'Las pantallas protegidas se muestran con datos demo para explicar alcance técnico sin abrir permisos sensibles.',
      ],
    },
    context: {
      eyebrow: 'Contexto',
      title: 'Del Excel al sistema web',
      paragraphs: [
        'Ukiyo nace para ordenar dos necesidades del negocio: vender productos físicos desde una tienda pública y calcular precios con criterios más consistentes que una planilla.',
        'La aplicación concentra tienda, administración y pricing en un sistema ASP.NET Core donde SQL Server persiste datos operativos y sostiene reglas de cálculo.',
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
    architecture: {
      eyebrow: 'Arquitectura',
      title: 'Arquitectura en una mirada',
      description:
        'La aplicación mantiene tienda pública y panel administrativo dentro de un monolito ASP.NET Core MVC. EF Core conecta el dominio con SQL Server, mientras Identity, Stripe y OAuth cubren autenticación, pagos e integraciones externas.',
      flowAriaLabel: 'Flujo técnico de Ukiyo Designs',
      steps: [
        { title: 'Cliente / Admin', description: 'Tienda pública, carrito, órdenes y panel administrativo.' },
        { title: 'ASP.NET Core MVC', description: 'Controladores, vistas, autenticación, roles y reglas de negocio.' },
        { title: 'Entity Framework Core', description: 'Mapeo entre entidades del dominio y persistencia relacional.' },
        { title: 'SQL Server', description: 'Catálogo, usuarios, empresas, órdenes, costos, precios, views y triggers.' },
      ],
      diagram: {
        title: 'Diagrama simple de arquitectura',
        description:
          'Vista resumida de cómo se conectan los flujos público y administrativo con la aplicación, la base de datos y los servicios externos.',
        browser: 'Cliente / Admin',
        browserDetails: ['Tienda', 'Admin'],
        app: 'ASP.NET Core MVC',
        appDetails: ['Controladores y vistas', 'Identity + roles', 'Reglas de negocio', 'Localización ES/EN'],
        data: 'SQL Server',
        dataDetails: ['EF Core', 'Views', 'Triggers', 'Costos y precios'],
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
            'El panel admin concentra productos, usuarios, compañías, órdenes y datos de cálculo. La lógica de negocio vive en el backend y se apoya en SQL Server para persistencia y cálculos consistentes.',
        },
        {
          title: 'Base de datos y cálculos',
          description:
            'SQL Server guarda catálogo, usuarios, empresas, órdenes, costos y precios. Las views y triggers ayudan a centralizar totales y mantener sincronizados los valores usados por la calculadora.',
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
        { layer: 'Datos', items: ['Entity Framework Core', 'SQL Server', 'Views y triggers'] },
        { layer: 'Servicios externos', items: ['Stripe', 'Facebook OAuth', 'DotNetEnv para secretos locales'] },
      ],
    },
    calculator: {
      eyebrow: 'Calculadora administrativa',
      title: 'Reglas de precio basadas en costos reales',
      description: 'La calculadora convierte materiales, costos fijos, costos porcentuales y márgenes en precios sugeridos para decisiones administrativas.',
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
        ariaLabel: 'Diagrama relacional conceptual del modelo de datos de Ukiyo',
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
      title: 'Decisiones técnicas relevantes',
      stackTitle: 'Stack',
      stackAriaLabel: 'Stack técnico de Ukiyo Designs',
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
        'SQL Server',
        'ASP.NET Core Identity',
        'Facebook OAuth',
        'Stripe',
        'Localización ES/EN',
        'DotNetEnv',
      ],
    },
    impact: {
      eyebrow: 'Impacto',
      title: 'Qué demuestra este proyecto',
      description:
        'Ukiyo demuestra capacidad para convertir un problema operativo real en software backend funcional: modelado relacional, autenticación, roles, pagos, reglas de pricing, persistencia SQL y administración de órdenes.',
      items: [
        'Flujo de compra, carrito, login, disponibilidad de productos y acceso a órdenes revisados manualmente antes de publicar la demo.',
        'Pantallas públicas y administrativas documentadas con video y capturas reales.',
        'Separación clara entre demo pública, áreas protegidas y evidencia visual de flujos internos.',
        'Proyecto fullstack con valor principal en backend, base de datos y reglas de negocio aplicadas.',
      ],
    },
    media: {
      eyebrow: 'Media real',
      title: 'Capturas del producto funcionando',
      description:
        'Capturas tomadas desde la app publicada con una cuenta demo, mostrando tanto el flujo público como pantallas administrativas.',
      screenshots: [
        {
          src: '/projects/ukiyo/store-home.jpg',
          alt: 'Tienda pública de Ukiyo Designs con catálogo de productos',
          title: 'Tienda pública',
          description: 'Catálogo visible para clientes con búsqueda, navegación, favoritos y acceso al carrito.',
        },
        {
          src: '/projects/ukiyo/product-detail.jpg',
          alt: 'Detalle de producto en Ukiyo Designs',
          title: 'Detalle de producto',
          description: 'Vista de compra con información del producto, precio y flujo hacia carrito.',
        },
        {
          src: '/projects/ukiyo/admin-products.png',
          alt: 'Panel administrativo de productos en Ukiyo Designs',
          title: 'Gestión de productos',
          description: 'Administración del catálogo, categorías, imágenes y datos comerciales.',
        },
        {
          src: '/projects/ukiyo/cost-by-product.png',
          alt: 'Tabla de costos por producto en Ukiyo Designs',
          title: 'Costos por producto',
          description: 'Desglose de costos fijos, packaging, herrajes, telas y total por producto.',
        },
        {
          src: '/projects/ukiyo/final-prices.png',
          alt: 'Pantalla de precios finales en Ukiyo Designs',
          title: 'Precios finales',
          description: 'Dashboard con variables de ganancia, costos, precios actuales, valores calculados y productos disponibles.',
        },
        {
          src: '/projects/ukiyo/orders-admin.png',
          alt: 'Panel de gestión de órdenes en Ukiyo Designs',
          title: 'Órdenes',
          description: 'Listado administrativo con clientes demo, estados, totales, filtros, exportación y acceso al detalle.',
        },
      ],
    },
  },
  en: {
    meta: {
      title: 'Ukiyo Designs Case Study - ASP.NET Core, SQL Server and e-commerce',
      description:
        'Case study for Ukiyo Designs, an e-commerce and pricing management system built with ASP.NET Core 8 MVC, Entity Framework Core, SQL Server, Identity, Stripe, and ES/EN localization.',
      image: '/projects/ukiyo/store-home.jpg',
    },
    backHref: '/en/#projects',
    backLabel: 'Back to projects',
    eyebrow: 'Case study · ASP.NET Core + SQL Server',
    title: 'Ukiyo Designs',
    intro:
      'Ukiyo Designs is an ASP.NET Core MVC + SQL Server application built to replace an Excel-based pricing workflow with a web system for storefront, orders, roles, payments, and cost administration.',
    buttons: {
      demo: 'View Ukiyo demo',
      code: 'View code on GitHub',
    },
    heroImageAlt: 'Real screenshot of Ukiyo Designs with product catalog',
    metricsAriaLabel: 'Project summary',
    metrics: [
      { label: 'Roles', value: 'Customer, Company, Employee, Admin' },
      { label: 'Pricing', value: 'Costs, margins, wholesale and retail' },
      { label: 'Integrations', value: 'Stripe + Facebook OAuth + ES/EN' },
    ],
    summaryCards: [
      { label: 'Project type', value: 'E-commerce + admin business system', emphasis: true },
      { label: 'Role', value: 'Backend, data, and business logic with fullstack delivery' },
      { label: 'Core problem', value: 'Operational pricing depended on Excel and manual decisions', emphasis: true },
      { label: 'Stack', value: 'ASP.NET Core MVC, EF Core, SQL Server, Identity, Stripe' },
      { label: 'Scope', value: 'Storefront, cart, orders, users, companies, admin, and pricing' },
      { label: 'Technical proof', value: 'Roles, SQL views/triggers, relational model, and protected flows' },
      { label: 'Evidence', value: 'Demo, GitHub, video walkthrough, and real screenshots' },
      { label: 'Recruiter takeaway', value: '.NET backend work applied to business rules and real data', emphasis: true },
    ],
    walkthrough: {
      eyebrow: 'Video walkthrough',
      title: 'The full flow as the central evidence',
      description:
        'The video shows the main flow without exposing sensitive permissions: customer purchase, order creation, and admin tracking over persisted data.',
      videoLabel: 'Video walkthrough for the Ukiyo Designs case study',
      fallback: 'Your browser cannot play this video. You can review the case study screenshots below.',
      highlights: [
        'Customer flow: session, catalog, cart, and movement toward payment.',
        'Persisted orders and data required for administrative tracking.',
        'Admin status management for preparation, shipping, delivery, and customer visibility.',
      ],
    },
    demoScope: {
      eyebrow: 'Demo scope',
      title: 'What can be tested and what is shown as evidence',
      description:
        'The published demo lets visitors inspect the working product without exposing sensitive operational data or full admin permissions.',
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
        'Screenshots document roles, orders, admin modules, payments, pricing, and SQL Server-backed data.',
        'Protected screens are shown with demo data to explain technical scope without opening sensitive permissions.',
      ],
    },
    context: {
      eyebrow: 'Context',
      title: 'From Excel to a web system',
      paragraphs: [
        'Ukiyo was built to organize two business needs: selling physical products through a public store and calculating prices with more consistent criteria than a spreadsheet.',
        'The application brings storefront, administration, and pricing into an ASP.NET Core system where SQL Server persists operational data and supports calculation rules.',
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
    architecture: {
      eyebrow: 'Architecture',
      title: 'Architecture in one glance',
      description:
        'The application keeps the public store and admin panel inside a maintainable ASP.NET Core MVC monolith. EF Core connects the domain to SQL Server, while Identity, Stripe, and OAuth cover authentication, payments, and external integrations.',
      flowAriaLabel: 'Technical flow for Ukiyo Designs',
      steps: [
        { title: 'Customer / Admin', description: 'Public store, cart, orders, and admin panel.' },
        { title: 'ASP.NET Core MVC', description: 'Controllers, views, authentication, roles, and business rules.' },
        { title: 'Entity Framework Core', description: 'Mapping between domain entities and relational persistence.' },
        { title: 'SQL Server', description: 'Catalog, users, companies, orders, costs, prices, views, and triggers.' },
      ],
      diagram: {
        title: 'Simple architecture diagram',
        description:
          'A summarized view of how the public and admin flows connect with the application, database, and external services.',
        browser: 'Customer / Admin',
        browserDetails: ['Store', 'Admin'],
        app: 'ASP.NET Core MVC',
        appDetails: ['Controllers and views', 'Identity + roles', 'Business rules', 'ES/EN localization'],
        data: 'SQL Server',
        dataDetails: ['EF Core', 'Views', 'Triggers', 'Costs and prices'],
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
            'The admin panel centralizes products, users, companies, orders, and calculation data. Business logic lives in the backend and relies on SQL Server for persistence and consistent calculations.',
        },
        {
          title: 'Database and calculations',
          description:
            'SQL Server stores catalog, users, companies, orders, costs, and prices. Views and triggers help centralize totals and keep values used by the calculator synchronized.',
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
        { layer: 'Data', items: ['Entity Framework Core', 'SQL Server', 'Views and triggers'] },
        { layer: 'External services', items: ['Stripe', 'Facebook OAuth', 'DotNetEnv for local secrets'] },
      ],
    },
    calculator: {
      eyebrow: 'Admin calculator',
      title: 'Pricing rules based on real costs',
      description: 'The calculator turns materials, fixed costs, percentage-based costs, and margins into suggested prices for administrative decisions.',
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
        ariaLabel: 'Conceptual relational diagram for the Ukiyo data model',
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
      title: 'Relevant technical decisions',
      stackTitle: 'Stack',
      stackAriaLabel: 'Technical stack for Ukiyo Designs',
      highlights: [
        'Multi-company model to separate users and company operations without mixing responsibilities.',
        'Identity and roles to distinguish permissions for customers, companies, employees, and admins.',
        'SQL views to centralize fixed costs, percentage costs, product costs, and calculated final prices.',
        'SQL triggers to keep totals consistent when input quantities or prices change.',
        'Migrations, seed data, and startup repair flows to ensure the calculator has valid base rows.',
      ],
      stack: [
        'ASP.NET Core 8 MVC',
        'Entity Framework Core',
        'SQL Server',
        'ASP.NET Core Identity',
        'Facebook OAuth',
        'Stripe',
        'ES/EN localization',
        'DotNetEnv',
      ],
    },
    impact: {
      eyebrow: 'Impact',
      title: 'What this project demonstrates',
      description:
        'Ukiyo demonstrates the ability to turn a real operational problem into functional backend software: relational modeling, authentication, roles, payments, pricing rules, SQL persistence, and order administration.',
      items: [
        'Purchase flow, cart, login, product availability, and order access were manually reviewed before publishing the demo.',
        'Public and admin screens are documented with video and real screenshots.',
        'The case study clearly separates public demo access, protected areas, and visual evidence for internal flows.',
        'Fullstack project with its main value in backend, database design, and applied business rules.',
      ],
    },
    media: {
      eyebrow: 'Real media',
      title: 'Screenshots of the working product',
      description:
        'Screenshots taken from the published app using a demo account, showing both the public flow and admin screens.',
      screenshots: [
        {
          src: '/projects/ukiyo/store-home.jpg',
          alt: 'Ukiyo Designs public store with product catalog',
          title: 'Public store',
          description: 'Customer-facing catalog with search, navigation, favorites, and cart access.',
        },
        {
          src: '/projects/ukiyo/product-detail.jpg',
          alt: 'Product detail page in Ukiyo Designs',
          title: 'Product detail',
          description: 'Purchase view with product information, price, and flow toward the cart.',
        },
        {
          src: '/projects/ukiyo/admin-products.png',
          alt: 'Product admin panel in Ukiyo Designs',
          title: 'Product management',
          description: 'Catalog, categories, images, and commercial data administration.',
        },
        {
          src: '/projects/ukiyo/cost-by-product.png',
          alt: 'Cost-by-product table in Ukiyo Designs',
          title: 'Cost by product',
          description: 'Breakdown of fixed costs, packaging, hardware, fabrics, and total per product.',
        },
        {
          src: '/projects/ukiyo/final-prices.png',
          alt: 'Final prices screen in Ukiyo Designs',
          title: 'Final prices',
          description: 'Dashboard with profit variables, costs, current prices, calculated values, and available products.',
        },
        {
          src: '/projects/ukiyo/orders-admin.png',
          alt: 'Order management panel in Ukiyo Designs',
          title: 'Orders',
          description: 'Admin list with demo customers, statuses, totals, filters, export, and detail access.',
        },
      ],
    },
  },
} as const;
