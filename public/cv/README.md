# Currículum

El texto del CV fue proporcionado durante la creación del sitio, pero el archivo PDF original no está disponible en este repositorio.

Coloca el documento real en `public/CV_Cristian_Alexis_Figueroa_Vega.pdf` y cambia `profile.cvFile` en `src/data/portfolio.ts` a `'CV_Cristian_Alexis_Figueroa_Vega.pdf'`. No incluyas `public/` ni una barra inicial. El botón de descarga utiliza `import.meta.env.BASE_URL`, por lo que funciona también bajo `/MyPortfolio-CAFV/`.

Mientras `cvFile` sea `null`, no se presenta un enlace de descarga.
