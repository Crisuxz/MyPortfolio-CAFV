import type { Project } from '../types/portfolio'

export const profile = {
  name: 'Cristian Alexis Figueroa Vega',
  firstName: 'Cristian Alexis',
  lastName: 'Figueroa Vega',
  shortName: 'Cristian Figueroa',
  initials: 'CF',
  role: 'Estudiante de Ingeniería de Software',
  location: 'Colima, México',
  email: 'dev.crisfive.mx@gmail.com',
  github: 'https://github.com/Crisuxz',
  handle: 'Crisuxz',
  description: 'Enfocado en backend, bases de datos y construcción de soluciones de software.',
  availability: 'Disponible para prácticas y colaboración',
  about: [
    'Estudio Ingeniería de Software en la Universidad de Colima. Me interesa entender cómo funcionan las cosas detrás de una interfaz: la lógica, los datos y las decisiones que conectan un sistema.',
    'Aprendo construyendo, documentando y resolviendo problemas paso a paso. Mi enfoque está en backend y bases de datos, con interés en integrar inteligencia artificial en soluciones concretas.',
    'Busco sumar a un equipo de desarrollo, aportar mis conocimientos y seguir construyendo experiencia a través de prácticas profesionales y proyectos colaborativos.',
  ],
  interests: ['Backend', 'Bases de datos', 'IA aplicada'],
  languages: ['Español nativo', 'Inglés B1'],
  cvFile: null as string | null,
}

export const navigation = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'sobre-mi', label: 'Sobre mí' },
  { id: 'proyectos', label: 'Proyectos' },
  { id: 'tecnologias', label: 'Tecnologías' },
  { id: 'trayectoria', label: 'Trayectoria' },
  { id: 'contacto', label: 'Contacto' },
] as const

export const education = {
  institution: 'Universidad de Colima',
  degree: 'Ingeniería de Software',
  period: '2023 — 2027',
  status: 'En curso',
  grade: '9.4 / 10',
  focus: 'Backend y bases de datos',
}

export const certifications = [
  { name: 'Python', issuer: 'FreeCodeCamp', year: '2026' },
]

export const skillGroups = [
  { title: 'Lenguajes', note: 'Lógica y desarrollo', icon: 'code', items: ['Python', 'JavaScript', 'GDScript'] },
  { title: 'Backend y datos', note: 'Mi principal área de interés', icon: 'database', items: ['MySQL', 'Node.js · en proyectos', 'Express · en proyectos'] },
  { title: 'Herramientas', note: 'Entorno de trabajo', icon: 'tools', items: ['Git', 'GitHub', 'Docker', 'Visual Studio Code'] },
  { title: 'Desarrollo en proyectos', note: 'Tecnologías verificadas en código', icon: 'layers', items: ['Godot', 'HTML', 'CSS', 'CustomTkinter'] },
] as const

export const projects: Project[] = [
  {
    id: 'into-the-dark', number: '01', name: 'Into the Dark',
    category: 'Videojuego · Proyecto académico', status: 'Builds disponibles',
    description: 'Survival horror 2D desarrollado en equipo: progresión por oleadas, combate y exploración en un entorno hostil.',
    objective: 'Construir una experiencia de supervivencia que integre mecánicas de juego, interfaz y sistemas coordinados.',
    technologies: ['Godot 4.5', 'GDScript'],
    repository: 'https://github.com/Crisuxz/Into-the-Dark',
    details: [
      'Sistema de oleadas con estados y señales para coordinar enemigos, puntuación y final de partida.',
      'Scripts de jugador, linterna, armas, cofres y controles táctiles organizados por responsabilidad.',
      'Documentos GDD y TDD, guías de sistemas y archivos de exportación para Windows y Android.',
    ],
    result: 'Código, recursos, documentación y builds publicados en el repositorio. Las builds no se presentan como una demo web.',
    collaboration: 'Proyecto colaborativo del equipo DevCrew. La documentación acredita a cinco integrantes; no se atribuyen sistemas específicos como contribución individual.',
    visual: 'game',
  },
  {
    id: 'aerg', number: '02', name: 'Asistente de Evaluación Automatizada con Retroalimentación Generativa',
    category: 'Proyecto de tesis', status: 'En desarrollo',
    description: 'Una propuesta para apoyar la evaluación de trabajos académicos y proporcionar retroalimentación mediante inteligencia artificial.',
    objective: 'Explorar cómo asistir al docente en la evaluación académica con herramientas de software e IA generativa.',
    technologies: ['Python', 'Bases de datos', 'Integración de IA'], technologyLabel: 'Tecnologías previstas',
    repository: 'https://github.com/Crisuxz/Prototipo-AERG', repositoryLabel: 'Repositorio del prototipo',
    details: [
      'Contexto académico: tesis de Ingeniería de Software en la Universidad de Colima, semestres 6–7.',
      'Fase declarada en el CV: documentación y diseño, previa al desarrollo del sistema.',
      'El repositorio público contiene un prototipo exploratorio; su existencia no implica que la tesis ni el sistema estén terminados.',
    ],
    result: 'Diseño y documentación en curso. La representación visual muestra el objetivo conceptual, no una aplicación en funcionamiento.',
    visual: 'thesis',
  },
  {
    id: 'pizza-express', number: '03', name: 'PizzaExpress',
    category: 'Aplicación web · Proyecto académico', status: 'Código disponible',
    description: 'Proyecto de Programación Web que conecta una interfaz de pizzería con un servidor y persistencia en MySQL.',
    objective: 'Gestionar usuarios y un catálogo de pizzas mediante una aplicación cliente-servidor.',
    technologies: ['JavaScript', 'Node.js', 'Express', 'MySQL'],
    repository: 'https://github.com/Crisuxz/PizzaExpress',
    details: [
      'Rutas y controladores para registro, inicio de sesión, consulta y creación de pizzas.',
      'Consultas SQL parametrizadas y hashing de contraseñas con bcrypt en el controlador de usuarios.',
      'Separación de recursos públicos, rutas, controladores y configuración del servidor.',
    ],
    result: 'Código académico disponible para consulta y ejecución local con un servidor Node.js y una base de datos MySQL.',
    visual: 'backend',
  },
  {
    id: 'yt-mp3', number: '04', name: 'Conversor de YouTube a MP3',
    category: 'Aplicación de escritorio · Python', status: 'Código disponible',
    description: 'Una interfaz de escritorio para consultar información de un video y extraer su audio en formato MP3.',
    objective: 'Reunir la selección de destino, la vista previa y el proceso de conversión en una herramienta de escritorio.',
    technologies: ['Python', 'CustomTkinter', 'yt-dlp', 'FFmpeg'],
    repository: 'https://github.com/Crisuxz/Conversor-de-Videos-YT-a-mp3',
    details: [
      'Consulta de título y miniatura a partir de la URL, con espera breve antes de procesar cambios.',
      'Uso de hilos para la consulta y descarga, y actualización de interfaz mediante after().',
      'Selección de carpeta y extracción de audio con yt-dlp y el posprocesador FFmpeg.',
    ],
    result: 'Implementación disponible en Python. Requiere dependencias locales y FFmpeg; no se ofrece una demo web.',
    visual: 'audio',
  },
]

export const sectionCopy = {
  about: { number: '01', label: 'Sobre mí', title: 'Entender. Construir. Seguir aprendiendo.' },
  projects: { number: '02', label: 'Proyectos seleccionados', title: 'Del concepto al código.', description: 'Una selección de trabajo académico y personal. Cada proyecto, un problema distinto y una oportunidad de aprender.' },
  skills: { number: '03', label: 'Tecnologías', title: 'Las herramientas detrás del trabajo.', description: 'Mi base de trabajo y las tecnologías que he aplicado en proyectos académicos y personales.' },
  journey: { number: '04', label: 'Trayectoria', title: 'Una base sólida. Un camino en curso.' },
  contact: { number: '05', label: 'Contacto', title: 'La próxima oportunidad empieza con una conversación.', description: 'Busco prácticas profesionales y proyectos donde pueda aportar, aprender y trabajar en equipo. Si crees que podemos colaborar, hablemos.' },
}
