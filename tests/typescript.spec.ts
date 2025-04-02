import { test, expect } from '@playwright/test'

test('Inicio apertura solapa', async ({ page }) => {
    await page.goto('https://institutoweb.com.ar/test/pop/solapa.html')
    // Abrir una nueva pestaña y espera a que se abra una nueva solapa o pestaña pero puede no ser necesario
    const nuevaSolapa = page.context().waitForEvent('page')
    await page.locator('#mi-enlace').click()
    await page.waitForTimeout(3000)
    const nuevaPagina = await nuevaSolapa // nueva pagina en
    await nuevaPagina.waitForLoadState('domcontentloaded')
    await nuevaPagina.locator('#mi-boton').click()
    await page.waitForTimeout(3000)
    await nuevaPagina.locator('#close-popover').click()
    await page.waitForTimeout(3000)
    await nuevaPagina.close()
})
