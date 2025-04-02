import { test, Page } from '@playwright/test'
import { selector } from '../selectores/mis_selectores'
import { datos } from '../datos/datos'
import { espera, escribe, login } from '../metodos/funciones'

test('Formulario de usuario y clave', async ({ page }) => {
    await page.goto('/test/login.html');
    await login(page);
    await espera(4000, page);
    await page.close()
})
