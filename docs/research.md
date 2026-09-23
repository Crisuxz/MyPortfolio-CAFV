# Investigación y decisiones de contenido

Revisión realizada el 23 de septiembre de 2026. Fuentes: texto del CV proporcionado por Cristian, perfil público de GitHub, árboles de archivos, documentación y código de sus repositorios. El contenido del portfolio es estático: el navegador no consulta la API de GitHub.

## Repositorio de destino

`Crisuxz/MyPortfolio-CAFV` ya estaba clonado, con remoto SSH y rama `main` en `b1aa015`. Solo contenía un README de dos líneas. El árbol de trabajo estaba limpio. No había dependencias versionadas, servidores, manifests, service workers, recursos que migrar ni PDF. Se creó `feat/portfolio-v1` antes de modificar archivos. No se modificó `Crisuxz.github.io`.

## Perfil y CV

- El perfil público identifica a Cristian Figueroa en Colima y su formación en Telemática.
- El CV y las instrucciones aportan nombre completo, correo, universidad, periodo 2023–2027, promedio 9.4/10, disponibilidad, idiomas, tecnologías y certificación Python de FreeCodeCamp 2026.
- La certificación se presenta según el CV; no se inventa una URL de credencial.
- No se recibió el archivo binario del PDF en el workspace. El texto extraído no se transforma en un supuesto original. El botón se oculta hasta incorporar el documento real.
- No se publican edad, teléfono, LinkedIn, experiencia laboral, porcentajes de dominio ni métricas de impacto.

## Revisión de los 11 repositorios públicos

| Repositorio | Evidencia revisada | Decisión |
| --- | --- | --- |
| [Into-the-Dark](https://github.com/Crisuxz/Into-the-Dark) | Árbol completo mediante Git, `project.godot`, GDD, TDD, scripts de oleadas, jugador, UI, audio, recursos y archivos de builds. | Destacado: mayor amplitud de sistemas, documentación y evidencia de trabajo colaborativo. |
| [PizzaExpress](https://github.com/Crisuxz/PizzaExpress) | Clon y estructura de `servidor_js`, dependencias, rutas y controladores de usuarios/pizzas. | Destacado: conexión cliente-servidor y MySQL, alineados con el enfoque backend. |
| [Conversor-de-Videos-YT-a-mp3](https://github.com/Crisuxz/Conversor-de-Videos-YT-a-mp3) | `README.md`, árbol y `main.py` con interfaz, metadatos, hilos y extracción de audio. | Destacado como herramienta pequeña: evidencia concreta de Python aplicado a una tarea de escritorio. |
| [Prototipo-AERG](https://github.com/Crisuxz/Prototipo-AERG) | Clon, README, arquitectura y estructura backend/frontend/documentación. | Incluido como tesis en desarrollo; se conserva el estado solicitado por el autor. |
| [convertidor-de-archivos](https://github.com/Crisuxz/convertidor-de-archivos) | `index.html`: lectores de documentos, generación ZIP/OOXML/PDF, librerías CDN. | No destacado: implementación monolítica, documentación limitada y discrepancia entre promesa offline y dependencias externas. |
| [Convertidor-Imagenes](https://github.com/Crisuxz/Convertidor-Imagenes) | `index.html`: Canvas, FileReader, escritor TIFF, exportación de imágenes. | No destacado: ofrece GIF usando PNG y depende del soporte de Canvas para BMP. Menor madurez demostrable. |
| [Activity-8-HCI](https://github.com/Crisuxz/Activity-8-HCI) | Árbol con un `index.html` de registro y mejora de mensajes. | Práctica de alcance limitado. |
| [Pr-cticas-M-viles](https://github.com/Crisuxz/Pr-cticas-M-viles) | Estructura de ejercicios HTML, imágenes, página MARCA con Bootstrap/jQuery. | Prácticas, no un producto móvil destacado. No se infiere React Native ni Expo. |
| [Practica1](https://github.com/Crisuxz/Practica1) | Árbol HTML/CSS e `index.html` de programación web/freelancer. | Ejercicio de maquetación; no se presenta como experiencia comercial. |
| [Examen-Practico-1ra-parcial](https://github.com/Crisuxz/Examen-Practico-1ra-parcial) | Solo README con título. | Sin implementación que destacar. |
| [Crisuxz.github.io](https://github.com/Crisuxz/Crisuxz.github.io) | Árbol, `package.json`, servidor Express/MySQL, app y recursos PWA. | Portfolio anterior; no se modifica ni se añade como proyecto destacado. |

## Into the Dark: afirmaciones respaldadas

Revisión: `73dc8a05a44c3c97746d255aa2e3989c22e8d428`.

- **Godot 4.5:** `project.godot`, `config/features`.
- **GDScript y separación por responsabilidad:** `scripts/global`, `scripts/player`, `scripts/ui`, `scenes/enemies`, `scenes/levels`.
- **Oleadas y señales:** `scripts/global/wave_system.gd`, estados `IDLE`, `COUNTDOWN`, `SPAWNING`, `IN_PROGRESS`, `BOSS`, `COMPLETED`, `INTERMISSION`, `FINISHED`; señales para inicio, fin y jefe.
- **Sistemas adicionales:** `scripts/player/player.gd`, `flashlight.gd`, `scripts/ui/mobile_joystick.gd`, escenas de armas y scripts de cofres.
- **Documentación:** `GDD.md`, `TDD_Into the Dark.md`, `WEAPON_SYSTEM.md`, `MOBILE_CONTROLS.md`, `PRUEBAS_PROGRESION.md` y guías de sonido.
- **Builds presentes:** `.exe`, `.pck` y `.apk`. Se constató su presencia, no se ejecutaron ni se certificó su funcionamiento.
- **Colaboración:** GDD y TDD acreditan a Cristian Alexis Figueroa Vega, Nathan Aaron Márquez Larios, Diego Leonardo Michel Rodríguez, Héctor Emiliano Palacios Barreto y Jose Julian Puente Reyes. No hay atribución individual fiable por sistema.
- **Imágenes:** los archivos revisados llamados “Captura de pantalla” son sprites; `image.png` muestra un log de errores. Se eligió el logotipo real `assets/ui/main_menu/title.png`, convertido a WebP. La tarjeta lo identifica como recurso gráfico, no como gameplay. El recurso conserva sus derechos originales.
- **Límites:** el GDD incluye propuestas no necesariamente implementadas; no se anuncia multijugador, monetización funcional ni todas sus mecánicas como terminadas.

## PizzaExpress: alcance

`servidor_js/controllers/pizzaController.js` consulta y crea pizzas mediante SQL parametrizado. `userController.js` registra y verifica usuarios con bcrypt. `routes/` y `public/` muestran separación básica de servidor e interfaz. No se afirma que el proyecto esté preparado para producción, ni que exista una demo con backend público. La responsabilidad individual o el reparto del trabajo no se deducen de la mera propiedad del repositorio.

## Python: alcance del conversor

`main.py` utiliza CustomTkinter, yt-dlp, threading, requests y Pillow. La extracción MP3 está configurada mediante el posprocesador FFmpeg. Se verificó código, no una ejecución de descarga. Se presenta como código disponible; no se añade un botón de demo.

## Tesis: diferencia entre fuentes

El README público de `Prototipo-AERG` describe un prototipo funcional con React, TypeScript, FastAPI, SQLAlchemy y una integración opcional con Gemini. El CV y la instrucción explícita del autor describen la tesis en documentación y diseño, antes del desarrollo.

Decisión conservadora: **En desarrollo**, fase de diseño y documentación, tecnologías **previstas** Python/bases de datos/IA. Se enlaza el repositorio como prototipo exploratorio y se explica su existencia en el caso de estudio, sin presentar el sistema o la tesis como terminados. Antes de cambiar la fase pública debe confirmarse el estado académico con el autor.

## Criterio visual y arquitectura

- Tema oscuro carbón, acento cyan, Manrope variable y detalles IBM Plex Mono autoalojados.
- Espaciado de secciones de 82–100 px, contenedor máximo de 1184 px y jerarquía de títulos fluida.
- Hero tipográfico con diagrama de enfoque; ninguna foto inventada.
- Casos de estudio mediante `details` nativo, sin modal ni dependencia de routing.
- Adaptación a 320, 375, 425, 768, 1024, 1440 y 1920 px.
- Motion para una entrada de 18 px una sola vez; CSS para hover; contenido legible desde el primer render; respeto por movimiento reducido.
- React, Vite, TypeScript estricto, Tailwind, Motion y Lucide. TypeScript 6.0 se eligió por compatibilidad con typescript-eslint (`<6.1`), evitando forzar TypeScript 7.
