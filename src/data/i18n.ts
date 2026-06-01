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
      title: 'Backend .NET Developer enfocado en e-commerce y sistemas de gestión',
      lines: [
        {
          text: 'Hola, soy Emmanuel Valdez. Desarrollo aplicaciones con C#, SQL Server y lógica de negocio para procesos reales de venta, gestión y operación.',
        },
        {
          text: 'Tengo experiencia práctica administrando e-commerce y construyendo Ukiyo, un sistema propio con ASP.NET Core, roles, pagos y calculadora de precios.',
          class: 'text-blue-200/90',
        },
        {
          text: ' Actualmente profundizo Linux, Docker y arquitectura cloud.',
          class: 'text-gray-300/90',
        },
        {
          text: ' De Mendoza, Argentina.',
          class: 'text-red-200/90',
        },
      ],
      stackAriaLabel: 'Stack principal y aprendizaje actual',
      stack: ['.NET 8', 'C#', 'SQL Server', 'Node.js', 'Linux', 'Docker', 'Cloud architecture'],
      availabilityLabel: 'Disponible para trabajar',
    },
    experience: [
      {
        date: '2020 - Actualmente...',
        title: 'Operación e-commerce, datos y mejora de procesos',
        company: 'Ukiyo Mochilas y algo más',
        description:
          'Trabajo sobre la operación real de un negocio de productos físicos: catálogo, stock, publicaciones, ventas, pedidos, atención al cliente, logística y datos comerciales. Esa experiencia fue la base para diseñar Ukiyo como sistema propio de e-commerce, costos, precios y gestión administrativa.',
        highlights: [
          'Administración de plataformas e-commerce, incluyendo catálogo, stock, publicaciones, ventas y migración desde Tienda Nube hacia Tienda Negocio.',
          'Seguimiento de pedidos, coordinación logística y revisión de información comercial para tomar mejores decisiones operativas.',
          'Identificación de procesos repetitivos y criterios de precios que luego se transformaron en módulos dentro del sistema Ukiyo.',
          'Contexto real para modelar productos, usuarios, órdenes, empresas, costos y reglas de negocio en una aplicación ASP.NET Core + SQL Server.',
        ],
        tags: ['E-commerce', 'Procesos de negocio', 'Datos comerciales', 'Pricing', 'SQL Server'],
        tagsAriaLabel: 'Áreas de experiencia',
        link: 'https://ukiyo.tiendanegocio.com/',
        linkLabel: 'Ver tienda actual',
      },
    ],
    projects: {
      featuredStudyLabel: 'Ver caso de estudio',
      featuredStudyHref: routes.es.ukiyo,
      supportingLabel: 'Proyectos de soporte',
      stackAriaPrefix: 'Stack técnico de',
      buttons: {
        code: 'Code',
        preview: 'Preview',
      },
      items: [
        {
          title: 'Ukiyo Designs',
          eyebrow: 'Proyecto destacado · solución real para e-commerce',
          description:
            'Sistema ASP.NET Core MVC para un emprendimiento familiar que fabrica mochilas, bolsos e indumentaria. Reemplaza un Excel de costos que había creado previamente y centraliza tienda, productos, usuarios, roles, órdenes, favoritos y cálculo de precios.',
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
          title: 'Infraestructura en progreso',
          description: 'Arquitectura cloud, Linux y Docker para preparar despliegues más controlados y mantenibles.',
        },
      ],
      intro:
        'Soy Emmanuel Valdez. Me enfoco en backend con .NET, C# y SQL, especialmente en aplicaciones donde los datos, la lógica de negocio y los procesos operativos son el centro del producto.',
      strong: 'backend con .NET, C# y SQL',
      paragraphs: [
        'Vengo de una base técnica en producción industrial y automatización, por eso tiendo a mirar el software como una herramienta para ordenar flujos reales: costos, inventario, ventas, logística, usuarios y decisiones administrativas.',
        'Esa mirada se refleja en Ukiyo, un sistema e-commerce y de gestión construido con ASP.NET Core, SQL Server, roles, pagos y una calculadora de precios que transforma una planilla de costos en un flujo administrable desde una aplicación web.',
        'Actualmente estoy profundizando arquitectura cloud, Linux y Docker para llevar este tipo de sistemas a despliegues más controlados. No busco presentar infraestructura como experiencia productiva exagerada, sino como una dirección técnica concreta y en desarrollo.',
      ],
      closing:
        'También fui maestro particular y ayudante de cátedra en matemáticas, física e inglés. Esa experiencia fortaleció mi forma de explicar problemas complejos, documentar decisiones y colaborar con otras personas.',
      imageAlt: 'Retrato de Emmanuel Valdez',
    },
    contact: {
      text: 'Disponible para oportunidades Backend .NET, Full Stack .NET o desarrollo de sistemas internos/e-commerce. Si mi perfil encaja con tu equipo o proyecto, podés escribirme por email o descargar mi CV.',
      cvLabel: 'Descargar CV',
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
      title: '.NET Backend Developer focused on e-commerce and business management systems',
      lines: [
        {
          text: 'Hi, I am Emmanuel Valdez. I build applications with C#, SQL Server, and business logic for real sales, management, and operations workflows.',
        },
        {
          text: 'I have hands-on experience running e-commerce operations and building Ukiyo, my own ASP.NET Core system with roles, payments, and a pricing calculator.',
          class: 'text-blue-200/90',
        },
        {
          text: ' I am currently deepening Linux, Docker, and cloud architecture.',
          class: 'text-gray-300/90',
        },
        {
          text: ' Based in Mendoza, Argentina.',
          class: 'text-red-200/90',
        },
      ],
      stackAriaLabel: 'Main stack and current learning path',
      stack: ['.NET 8', 'C#', 'SQL Server', 'Node.js', 'Linux', 'Docker', 'Cloud architecture'],
      availabilityLabel: 'Available for work',
    },
    experience: [
      {
        date: '2020 - Present',
        title: 'E-commerce operations, data, and process improvement',
        company: 'Ukiyo Mochilas y algo más',
        description:
          'I work on the real operation of a physical-products business: catalog, stock, listings, sales, orders, customer service, logistics, and commercial data. That experience became the foundation for designing Ukiyo as a custom e-commerce, cost, pricing, and admin management system.',
        highlights: [
          'Managed e-commerce platforms, including catalog, stock, listings, sales, and migration from Tienda Nube to Tienda Negocio.',
          'Tracked orders, coordinated logistics, and reviewed commercial information to support better operational decisions.',
          'Identified repetitive processes and pricing criteria that later became modules inside the Ukiyo system.',
          'Real business context for modeling products, users, orders, companies, costs, and business rules in an ASP.NET Core + SQL Server application.',
        ],
        tags: ['E-commerce', 'Business processes', 'Commercial data', 'Pricing', 'SQL Server'],
        tagsAriaLabel: 'Experience areas',
        link: 'https://ukiyo.tiendanegocio.com/',
        linkLabel: 'View current store',
      },
    ],
    projects: {
      featuredStudyLabel: 'View case study',
      featuredStudyHref: routes.en.ukiyo,
      supportingLabel: 'Supporting projects',
      stackAriaPrefix: 'Technical stack for',
      buttons: {
        code: 'Code',
        preview: 'Preview',
      },
      items: [
        {
          title: 'Ukiyo Designs',
          eyebrow: 'Featured project · real e-commerce solution',
          description:
            'ASP.NET Core MVC system for a family business that manufactures backpacks, bags, and apparel. It replaces a cost spreadsheet I had previously created and centralizes the store, products, users, roles, orders, favorites, and price calculation.',
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
          title: 'Infrastructure in progress',
          description: 'Cloud architecture, Linux, and Docker to prepare more controlled and maintainable deployments.',
        },
      ],
      intro:
        'I am Emmanuel Valdez. I focus on backend development with .NET, C#, and SQL, especially in applications where data, business logic, and operational processes are the center of the product.',
      strong: 'backend development with .NET, C#, and SQL',
      paragraphs: [
        'I come from a technical background in industrial production and automation, so I tend to see software as a tool for organizing real workflows: costs, inventory, sales, logistics, users, and administrative decisions.',
        'That perspective is reflected in Ukiyo, an e-commerce and management system built with ASP.NET Core, SQL Server, roles, payments, and a pricing calculator that turns a cost spreadsheet into a manageable web application workflow.',
        'I am currently deepening cloud architecture, Linux, and Docker to move these kinds of systems toward more controlled deployments. I do not present infrastructure as exaggerated production experience, but as a concrete technical direction in progress.',
      ],
      closing:
        'I also worked as a private teacher and teaching assistant in math, physics, and English. That experience strengthened how I explain complex problems, document decisions, and collaborate with other people.',
      imageAlt: 'Portrait of Emmanuel Valdez',
    },
    contact: {
      text: 'Available for .NET Backend, .NET Full Stack, or internal systems/e-commerce development opportunities. If my profile fits your team or project, you can email me or download my CV.',
      cvLabel: 'Download CV',
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
      'Sistema e-commerce y de gestión para un negocio familiar que fabrica mochilas, bolsos e indumentaria. El objetivo fue convertir un flujo de costos basado en Excel en una aplicación web con base de datos, roles, pagos y cálculo administrativo de precios.',
    buttons: {
      demo: 'Demo',
      code: 'Código',
    },
    heroImageAlt: 'Captura real de Ukiyo Designs con catálogo de productos',
    metricsAriaLabel: 'Resumen del proyecto',
    metrics: [
      { label: 'Negocio real', value: 'E-commerce + gestión' },
      { label: 'Modelo de precios', value: 'Mayorista y minorista' },
      { label: 'Usuarios', value: 'Customer, Company, Employee, Admin' },
    ],
    context: {
      eyebrow: 'Contexto',
      title: 'De planilla a sistema de negocio',
      paragraphs: [
        'Ukiyo Designs nace de una necesidad concreta: vender productos fabricados por el negocio y calcular precios con una lógica más confiable que una planilla. El sistema mantiene la parte comercial visible para clientes y agrega una capa administrativa para gestionar operaciones internas.',
        'El proyecto demuestra trabajo backend aplicado a reglas reales: costos variables, costos fijos, impuestos, márgenes, roles, pagos, autenticación y persistencia en SQL Server.',
      ],
    },
    problemTitle: 'Problema',
    solutionTitle: 'Solución',
    problemItems: [
      'El cálculo de precios dependía de un Excel creado previamente para costos, sueldos, impuestos, ganancia y precio final.',
      'La información del negocio estaba separada entre archivos, procesos manuales y decisiones administrativas.',
      'El negocio necesitaba vender productos, gestionar usuarios y mantener criterios consistentes para precios mayoristas y minoristas.',
    ],
    solutionItems: [
      'Tienda pública para explorar productos, buscar, guardar favoritos y comprar.',
      'Panel administrativo para productos, empresas, roles, órdenes y datos de cálculo.',
      'Calculadora de precios con telas, herrajes, packaging, costos fijos, costos porcentuales, márgenes y dashboard de precios finales.',
      'Integración con Identity, Facebook OAuth, Stripe y localización en español/inglés.',
    ],
    architecture: {
      eyebrow: 'Arquitectura',
      title: 'Un sistema web con lógica de negocio centralizada',
      description:
        'Ukiyo separa el uso público y administrativo, pero ambos flujos pasan por la misma aplicación ASP.NET Core MVC. El backend aplica reglas de negocio, Entity Framework Core conecta con SQL Server y los servicios externos cubren pago, autenticación social y localización.',
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
      title: 'Qué responsabilidad cumple cada parte',
      description:
        'La arquitectura prioriza una aplicación monolítica clara: UI, reglas, datos e integraciones en capas fáciles de explicar y mantener.',
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
      description: 'El precio minorista final queda a criterio administrativo, pero el sistema entrega una base objetiva para decidir.',
      finalTitle: 'Dashboard de precios finales',
      finalDescription:
        'La lista de precios finales funciona como control operativo: permite revisar costos, márgenes y precios publicados antes de aplicar cambios comerciales.',
      inputs: [
        'Telas y materiales principales.',
        'Herrajes: botones, cierres, hebillas y componentes por prenda/producto.',
        'Packaging por categoría.',
        'Costos fijos: impuestos, alquiler, servicios, herramientas y gastos operativos.',
        'Costos porcentuales: comisiones de plataforma, pasarelas de pago y otros cargos variables.',
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
      title: 'Entidades pensadas para e-commerce y pricing',
      description:
        'El dominio separa catálogo, usuarios, compañías, órdenes y cálculo de costos para mantener clara la lógica de negocio.',
      groups: [
        { title: 'Comercio', items: ['Product', 'Category', 'ProductImage', 'ShoppingCart'] },
        { title: 'Órdenes y usuarios', items: ['OrderHeader', 'OrderDetail', 'ApplicationUser', 'Company'] },
        { title: 'Calculadora', items: ['Fabric', 'GarmentHardware', 'Packaging', 'FixedCost', 'PercentageCost', 'PercentageProfit'] },
        { title: 'SQL Views', items: ['FixedCostMonthlyView', 'TotalPercentageCostView', 'CostByProductView', 'FinalPriceView'] },
      ],
    },
    backend: {
      eyebrow: 'Backend',
      title: 'Decisiones técnicas relevantes',
      stackTitle: 'Stack',
      stackAriaLabel: 'Stack técnico de Ukiyo Designs',
      highlights: [
        'Modelo multi-compañía para separar operaciones y usuarios asociados a empresas.',
        'Roles diferenciados para clientes, compañías, empleados y administradores.',
        'SQL views específicas para costos fijos mensuales, costos porcentuales, costos por producto y precios finales.',
        'SQL triggers para mantener totales actualizados cuando cambian cantidades o precios de telas, herrajes y packaging.',
        'Migraciones EF Core, seed data y reparación inicial de filas necesarias para la calculadora.',
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
        'Ukiyo muestra capacidad para transformar un problema de negocio en software funcional: modelar datos, implementar reglas, conectar servicios externos y construir una interfaz usable para clientes y administración. Es un proyecto fullstack, pero el valor principal está en el backend, la base de datos y la lógica de negocio.',
      items: [
        'Pruebas manuales completas antes de preparar la demo del portfolio.',
        'Validación de checkout guards, acceso a órdenes, disponibilidad de productos y flujos login/carrito.',
        'Revisión de soft-delete de compañías, deletes de calculadora y metadata de localización.',
        'Backlog técnico honesto: tests automatizados, Docker, fake email sender, Serilog y middleware centralizado de excepciones.',
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
      'E-commerce and management system for a family business that manufactures backpacks, bags, and apparel. The goal was to turn an Excel-based cost workflow into a database-backed web application with roles, payments, and admin price calculation.',
    buttons: {
      demo: 'Demo',
      code: 'Code',
    },
    heroImageAlt: 'Real screenshot of Ukiyo Designs with product catalog',
    metricsAriaLabel: 'Project summary',
    metrics: [
      { label: 'Real business', value: 'E-commerce + management' },
      { label: 'Pricing model', value: 'Wholesale and retail' },
      { label: 'Users', value: 'Customer, Company, Employee, Admin' },
    ],
    context: {
      eyebrow: 'Context',
      title: 'From spreadsheet to business system',
      paragraphs: [
        'Ukiyo Designs started from a concrete need: selling products made by the business and calculating prices with logic more reliable than a spreadsheet. The system keeps the customer-facing commercial layer and adds an admin layer for internal operations.',
        'The project demonstrates backend work applied to real rules: variable costs, fixed costs, taxes, margins, roles, payments, authentication, and SQL Server persistence.',
      ],
    },
    problemTitle: 'Problem',
    solutionTitle: 'Solution',
    problemItems: [
      'Price calculation depended on an Excel file previously created for costs, wages, taxes, profit, and final price.',
      'Business information was split between files, manual processes, and administrative decisions.',
      'The business needed to sell products, manage users, and keep consistent criteria for wholesale and retail prices.',
    ],
    solutionItems: [
      'Public store for browsing products, searching, saving favorites, and buying.',
      'Admin panel for products, companies, roles, orders, and calculation data.',
      'Pricing calculator with fabrics, hardware, packaging, fixed costs, percentage costs, margins, and final-price dashboard.',
      'Integration with Identity, Facebook OAuth, Stripe, and Spanish/English localization.',
    ],
    architecture: {
      eyebrow: 'Architecture',
      title: 'A web system with centralized business logic',
      description:
        'Ukiyo separates public and administrative usage, but both flows run through the same ASP.NET Core MVC application. The backend applies business rules, Entity Framework Core connects to SQL Server, and external services cover payments, social authentication, and localization.',
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
      title: 'What each part is responsible for',
      description:
        'The architecture prioritizes a clear monolithic application: UI, rules, data, and integrations in layers that are easy to explain and maintain.',
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
      description: 'The final retail price remains an admin decision, but the system provides an objective base for that decision.',
      finalTitle: 'Final-price dashboard',
      finalDescription:
        'The final-price list works as an operational control: it lets the admin review costs, margins, and published prices before applying commercial changes.',
      inputs: [
        'Fabrics and main materials.',
        'Hardware: buttons, zippers, buckles, and product/garment components.',
        'Packaging by category.',
        'Fixed costs: taxes, rent, utilities, tools, and operating expenses.',
        'Percentage costs: platform commissions, payment gateway fees, and other variable charges.',
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
      title: 'Entities designed for e-commerce and pricing',
      description:
        'The domain separates catalog, users, companies, orders, and cost calculation to keep business logic clear.',
      groups: [
        { title: 'Commerce', items: ['Product', 'Category', 'ProductImage', 'ShoppingCart'] },
        { title: 'Orders and users', items: ['OrderHeader', 'OrderDetail', 'ApplicationUser', 'Company'] },
        { title: 'Calculator', items: ['Fabric', 'GarmentHardware', 'Packaging', 'FixedCost', 'PercentageCost', 'PercentageProfit'] },
        { title: 'SQL Views', items: ['FixedCostMonthlyView', 'TotalPercentageCostView', 'CostByProductView', 'FinalPriceView'] },
      ],
    },
    backend: {
      eyebrow: 'Backend',
      title: 'Relevant technical decisions',
      stackTitle: 'Stack',
      stackAriaLabel: 'Technical stack for Ukiyo Designs',
      highlights: [
        'Multi-company model to separate operations and users associated with companies.',
        'Different roles for customers, companies, employees, and admins.',
        'Specific SQL views for monthly fixed costs, percentage costs, product costs, and final prices.',
        'SQL triggers to keep totals updated when fabric, hardware, or packaging quantities/prices change.',
        'EF Core migrations, seed data, and startup repair flows for calculator rows required by the system.',
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
        'Ukiyo shows the ability to turn a business problem into functional software: model data, implement rules, connect external services, and build a usable interface for customers and admins. It is a fullstack project, but its main value is in the backend, database, and business logic.',
      items: [
        'Complete manual testing before preparing the portfolio demo.',
        'Validation of checkout guards, order access, product availability, and login/cart flows.',
        'Review of company soft-delete, calculator deletes, and localization metadata.',
        'Honest technical backlog: automated tests, Docker, fake email sender, Serilog, and centralized exception middleware.',
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
