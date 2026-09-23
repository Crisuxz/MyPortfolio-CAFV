# Validación

Resultados de la validación realizada el 23 de septiembre de 2026 sobre `feat/portfolio-v1`.

## Calidad del código

| Comprobación | Comando | Resultado |
| --- | --- | --- |
| Lint | `npm run lint` | OK, sin warnings (`--max-warnings 0`) |
| Tipos | `npm run typecheck` | OK, TypeScript estricto |
| Build | `npm run build` | OK, 2300 módulos transformados |
| Dependencias | `npm audit --omit=dev` | 0 vulnerabilidades en producción |

## Build

| Recurso | Tamaño | Gzip |
| --- | --- | --- |
| `index.html` | 2.28 kB | 0.78 kB |
| CSS | 25.46 kB | 6.94 kB |
| JS | 331.57 kB | 106.14 kB |
| Fuentes | 53 kB | — |

## Pruebas de navegador (Playwright + Chromium)

`npm run test:e2e` — **13/13 pasadas**.

### Overflow horizontal

Se valida en el build real (`desktop` device, `baseURL` del subdirectorio) que `scrollWidth <= clientWidth` y que no haya desplazamiento vertical a `document.documentElement`:

| Ancho | Resultado |
| --- | --- |
| 320 px | OK |
| 375 px | OK |
| 425 px | OK |
| 768 px | OK |
| 1024 px | OK |
| 1440 px | OK |
| 1920 px | OK |

### Accesibilidad con axe-core

Comprobación WCAG AA (reglas `wcag2a`, `wcag2aa`, `wcag21a`, `wcag21aa`) sobre todo el documento visible:

- 375 px (menú móvil cerrado, `prefers-reduced-motion: reduce`) — OK, sin infracciones.
- 1440 px (menú de escritorio, `prefers-reduced-motion: reduce`) — OK, sin infracciones.

### Interacción

- Navegación móvil: apertura por teclado, cierre con Escape, navegación a secciones, `aria-current` conservado al reabrir el menú (corregido: header `fixed` + `body` padding evita el scroll fantasma al dar foco al botón).
- Casos de estudio: 4 desplegables funcionales, tesis marcada **En desarrollo**, enlaces externos con estado 200.
- Copiar correo: éxito real y recuperación visible cuando el navegador deniega el permiso de portapapeles.
- Metadatos y recursos: todos servidos bajo la ruta base `/MyPortfolio-CAFV/` en el build.

## Enlaces verificados (HTTP status real, 23 sep 2026)

| URL | Estado |
| --- | --- |
| `https://github.com/Crisuxz` | 200 |
| `https://github.com/Crisuxz/Into-the-Dark` | 200 |
| `https://github.com/Crisuxz/PizzaExpress` | 200 |
| `https://github.com/Crisuxz/Conversor-de-Videos-YT-a-mp3` | 200 |
| `https://github.com/Crisuxz/Prototipo-AERG` | 200 |
| `https://crisuxz.github.io/MyPortfolio-CAFV/` | 404 — aún no publicado |

## Limpieza del repositorio

- `node_modules/`, `dist/` y reportes de pruebas excluidos de Git (`.gitignore`), confirmado con `git status` limpio después de los commits.
- Línea final asegurada con `.gitattributes` (`eol=lf`), binarios marcados como binary.
- Sin secretos ni credenciales: barrido de patrones (`ghp_`, `github_pat_`, `AKIA`, claves privadas, `console.log` en producción) sin coincidencias.
- El workflow de despliegue solo usa permisos `pages: write` e `id-token: write` en el job de publicación, sin tokens personales en el código.

## Pendiente de ejecución

Validación únicamente posible tras publicar:

1. Configurar **Settings → Pages → Source: GitHub Actions**.
2. Ejecutar el workflow en `main` y confirmar salida correcta.
3. Verificar la URL `https://crisuxz.github.io/MyPortfolio-CAFV/` con estado 200 y contenido esperado.
4. Reclasificar si aplica: Indexado (Google), certificados HTTPS y visual en dispositivos reales.
5. Cuando el autor integre el PDF original del CV, repetir la validación del botón de descarga.