import { test, expect } from '@playwright/test'

test('Inicio apertura solapa', async ({ page }) => {
    await page.goto('https://institutoweb.com.ar/test/pop/alerta.html')
    const alerta = new Promise((resolve) => {
        //captura acciones paralelas del navegador
        page.on('dialog', async (dialog) => {
            //manejar los datos y controles de la alerta
            console.log(dialog.message())
            await page.waitForTimeout(3000)
            await dialog.accept()
        })
    }
    )
    await page.locator('#mi-boton').click()
    await page.waitForTimeout(3000)
})
