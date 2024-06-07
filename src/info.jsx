import freelance1 from './assets/dentist.webp';
import freelance2 from './assets/chair.webp';
import freelance3 from './assets/truck.webp';
import project1 from './assets/countries-app.webp';
import project2 from './assets/landing-page.webp';

export const links = [
  {
    name: 'Sobre mi',
    section: 'about',
  },
  {
    name: 'Curriculum',
    section: 'curriculum',
  },
  {
    name: 'Proyectos',
    section: 'projects',
  },
];

export const externalLinks = [
  {
    name: 'valenzuela.ahumada4@gmail.com',
    url: 'mailto: valenzuela.ahumada4@gmail.com',
  },
  {
    name: 'Linkedin',
    url: 'https://www.linkedin.com/in/rodrigo-valenzuela-466b0021a',
  },
  {
    name: 'Github',
    url: 'https://github.com/pandaman404',
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/+56988822311',
  },
];

export const jobs = [
  {
    period: 'Ago. 2020 - Ene. 2021',
    position: 'Desarrollador Web Trainee',
    company: 'Op. IT',
    bulletPoints: [
      'Obtuve competencias para trabajar con frameworks y librerías de JavaScript, focalizado en la aplicación de buenas practicas como clean code, principios SOLID, gitflow, entre otros, en un entorno de desarrollo ágil.',
    ],
  },
  {
    period: 'Feb. 2021 - Jun. 2021',
    position: 'Desarrollador WordPress',
    company: 'Freelance',
    bulletPoints: [
      'Renové el diseño de diversos sitios web de emprendimientos en Chile, basándome en requerimientos de alto nivel proporcionados por los clientes.',
      'Desarrollé un ecommerce utilizando WordPress y WooCommerce.',
      'Mejoré el SEO de los sitios web.',
    ],
  },
  {
    period: 'Feb. 2022 - Feb. 2024',
    position: 'Desarrollador Frontend/Web',
    company: 'Fork',
    bulletPoints: [
      'Desarrollé el MVP para la nueva app móvil de Fork, utilizando React Native.',
      'Hice el rediseño del homepage del ecommerce en colaboración con una diseñadora UX/UI.',
      'Desarrollé el flujo de activación de cuenta para nuevos usuarios en el ecommerce, utilizando AngularJS y Spring Boot JPA.',
      'Desarrollé el módulo encargado de la creación y modificación de packs dinámicos desde el backoffice, utilizando AngularJS.',
      'Realicé soporte al ecommerce y backoffice, resolviendo casos de contingencia que impactaban en el funcionamiento operativo.',
      'Colaboré en la migración de cronjobs de Bsale relacionadas a la sincronización de productos, despachos y ventas entre la API de Bsale y la base de datos de Fork.',
    ],
  },
];

export const education = [
  {
    period: '2015 - 2020',
    major: 'Ingeniería Civil Informática',
    institution: 'Universidad San Sebastián (Chile)',
  },
  {
    period: '2021',
    major: 'JavaScript Algorithms and Data Structures',
    institution: 'FreeCodeCamp',
  },
  {
    period: '2021',
    major: 'Responsive Web Design',
    institution: 'FreeCodeCamp',
  },
  {
    period: '2024',
    major: 'Bootcamp Desarrollo Full Stack JavaScript ',
    institution: 'Desafío LATAM',
  },
];

export const freelanceWorkList = [
  {
    src: freelance1,
    title: 'Ortodontik',
    url: 'https://ortodontik.cl/',
  },
  {
    src: freelance2,
    title: 'Mofisillas',
    url: 'https://mofisillas.cl/',
  },
  {
    src: freelance3,
    title: 'DMF Express',
    url: 'https://dmfexpress.cl/',
  },
];

export const FeaturedProjectsList = [
  {
    year: '2023',
    type: 'Web App',
    src: project1,
    title: 'Countries App',
    description:
      'Pagina Web que consume una API de paises, incluye buscador por paises, filtros por continente, navegación entre paises vecinos y darkmode.',
    url: 'https://pandaman404.github.io/rest-countries-spa/',
    tags: ['React', 'Redux', 'Styled Components'],
  },
  {
    year: '2023',
    type: 'Landing Page',
    src: project2,
    title: 'Url Shortening Landing',
    description: 'Landing Page que incluye un acortador de links.',
    url: 'https://url-shortening-landing-lilac.vercel.app/',
    tags: ['Next', 'Tailwind'],
  },
];
