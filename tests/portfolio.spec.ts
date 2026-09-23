import { expect, test } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'
import { profile, projects } from '../src/data/portfolio'

for (const width of [320, 375, 425, 768, 1024, 1440, 1920]) {
  test(`contenido y layout sin overflow a ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))
    const response = await page.goto('./')
    expect(response?.status()).toBe(200)
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(/Cristian Alexis.*Figueroa Vega/)
    await page.evaluate(() => document.fonts.ready)
    for (const section of ['inicio', 'sobre-mi', 'proyectos', 'tecnologias', 'trayectoria', 'contacto']) {
      await page.locator(`#${section}`).scrollIntoViewIfNeeded()
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true)
    }
    for (const project of projects) {
      await expect(page.locator(`#proyecto-${project.id}`)).toBeVisible()
    }
    expect(errors).toEqual([])
    expect(await page.locator('img').evaluateAll((images) => images.every((image) => image instanceof HTMLImageElement && image.complete && image.naturalWidth > 0))).toBe(true)
  })
}

test('navegación móvil mediante teclado, Escape y selección de sección', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 })
  await page.goto('./')
  await page.keyboard.press('Tab')
  await expect(page.getByRole('link', { name: 'Saltar al contenido' })).toBeFocused()
  await page.keyboard.press('Enter')
  await expect(page.locator('main')).toBeFocused()
  const menu = page.getByRole('button', { name: 'Abrir menú' })
  await menu.focus()
  await page.keyboard.press('Enter')
  await expect(page.getByRole('navigation')).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(menu).toBeFocused()
  await expect(menu).toHaveAttribute('aria-expanded', 'false')
  await menu.click()
  await page.getByRole('navigation').getByRole('link', { name: 'Proyectos', exact: true }).click()
  await expect(menu).toHaveAttribute('aria-expanded', 'false')
  await expect(page).toHaveURL(/#proyectos$/)
  await expect(page.locator('#proyectos')).toBeInViewport()
  await expect(page.locator('#primary-navigation a[href="#proyectos"]')).toHaveAttribute('aria-current', 'location')
  await menu.click()
  await expect(page.getByRole('navigation').getByRole('link', { name: 'Proyectos', exact: true })).toHaveAttribute('aria-current', 'location')
})

test('casos de estudio, tesis en curso y enlaces reales', async ({ page, request }) => {
  await page.goto('./')
  await expect(page.locator('#proyecto-aerg .project-status')).toHaveText('En desarrollo')
  await expect(page.locator('#proyecto-aerg .visual-caption')).toContainText('Diseño y documentación')
  for (const project of projects) {
    const article = page.locator(`#proyecto-${project.id}`)
    const summary = article.locator('summary')
    await summary.focus()
    await page.keyboard.press('Enter')
    await expect(article.getByRole('heading', { name: 'Resultado actual' })).toBeVisible()
    await expect(article.locator('.project-link')).toHaveAttribute('href', project.repository)
  }
  const anchors = await page.locator('a[href^="#"]').evaluateAll((links) => links.map((link) => link.getAttribute('href')!.slice(1)))
  for (const id of anchors) await expect(page.locator(`[id="${id}"]`)).toHaveCount(1)
  if (profile.cvFile) {
    const response = await request.get(profile.cvFile)
    expect(response.status()).toBe(200)
    expect(response.headers()['content-type']).toContain('application/pdf')
    await expect(page.getByRole('link', { name: 'Descargar CV' })).toHaveAttribute('download', '')
  } else {
    await expect(page.getByRole('link', { name: 'Descargar CV' })).toHaveCount(0)
  }
  await expect(page.getByRole('link', { name: 'Enviar correo', exact: true })).toHaveAttribute('href', `mailto:${profile.email}`)
})

test('copiar correo y recuperación si el navegador deniega permiso', async ({ page, context }) => {
  await context.grantPermissions(['clipboard-read', 'clipboard-write'])
  await page.goto('./')
  await page.getByRole('button', { name: 'Copiar correo' }).click()
  await expect(page.getByRole('status')).toHaveText('Correo copiado al portapapeles.')
  expect(await page.evaluate(() => navigator.clipboard.readText())).toBe(profile.email)
  await page.evaluate(() => { navigator.clipboard.writeText = () => Promise.reject(new Error('Permission denied')) })
  await page.getByRole('button', { name: 'Correo copiado' }).click()
  await expect(page.getByRole('status')).toContainText('No se pudo copiar.')
})

for (const width of [375, 1440]) {
  test(`accesibilidad WCAG AA a ${width}px y movimiento reducido`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.emulateMedia({ reducedMotion: 'reduce' })
    await page.goto('./')
    await page.locator('#contacto').scrollIntoViewIfNeeded()
    await page.evaluate(() => document.fonts.ready)
    expect(await page.evaluate(() => getComputedStyle(document.documentElement).scrollBehavior)).toBe('auto')
    const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'best-practice']).analyze()
    expect(results.violations).toEqual([])
    if (width < 1024) {
      await page.getByRole('button', { name: 'Abrir menú' }).click()
      const menuResults = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze()
      expect(menuResults.violations).toEqual([])
    }
  })
}

test('metadatos y recursos en el subdirectorio de GitHub Pages', async ({ page, request }) => {
  await page.goto('./')
  await expect(page.locator('html')).toHaveAttribute('lang', 'es')
  await expect(page).toHaveTitle('Cristian Figueroa | Software Engineering Portfolio')
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://crisuxz.github.io/MyPortfolio-CAFV/')
  for (const file of ['favicon.svg', 'og-image.png', 'robots.txt', 'sitemap.xml']) {
    const response = await request.get(file)
    expect(response.status()).toBe(200)
    expect(response.headers()['content-type']).not.toContain('text/html')
  }
  await page.goto('./#trayectoria')
  await page.reload()
  await expect(page.getByRole('heading', { name: 'Ingeniería de Software', exact: true })).toBeVisible()
})
