import { chromium } from '@playwright/test'
import { mkdir } from 'node:fs/promises'

const browser = await chromium.launch()
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce', deviceScaleFactor: 1 })
  await page.goto('http://127.0.0.1:4173/MyPortfolio-CAFV/')
  await page.evaluate(() => document.fonts.ready)
  await page.locator('#contacto').scrollIntoViewIfNeeded()
  await page.evaluate(() => window.scrollTo(0, 0))
  await mkdir('docs/previews', { recursive: true })
  await page.screenshot({ path: 'docs/previews/desktop.jpg', fullPage: true, type: 'jpeg', quality: 82 })
  await page.screenshot({ path: 'docs/previews/hero.jpg', type: 'jpeg', quality: 86 })
  await page.setViewportSize({ width: 375, height: 812 })
  await page.evaluate(() => window.scrollTo(0, 0))
  await page.screenshot({ path: 'docs/previews/mobile.jpg', fullPage: true, type: 'jpeg', quality: 82 })
  await page.getByRole('button', { name: 'Abrir menú' }).click()
  await page.screenshot({ path: 'docs/previews/mobile-menu.jpg', type: 'jpeg', quality: 82 })
} finally {
  await browser.close()
}
