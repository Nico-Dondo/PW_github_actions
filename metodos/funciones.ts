import { Page } from "playwright/test";
import { selector } from "../selectores/mis_selectores";
import {datos} from '../datos/datos'

export async function espera(segundos: number, pagina: Page) {
    await pagina.waitForTimeout(segundos)

}

export async function escribe(selector: string, texto: string, pagina: Page,) {
    await pagina.locator(selector).fill(texto)

}
export async function login(pagina: Page) {
    await escribe(selector.usuario,datos.datos_usuario,pagina);
    await escribe(selector.clave,datos.datos_clave,pagina)
    await escribe(selector.email,datos.datos_email,pagina);
    await pagina.locator(selector.btn_ingresar).click();
}