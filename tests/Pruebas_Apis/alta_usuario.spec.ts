import { test, expect, request } from '@playwright/test'
// alta de una persona en la base de datos

interface Personas {
    nombre: string,
    apellido: string,
    edad: number,
    pais: string,
}
test('Alta de un usuario', async ({ }) => {
    // contexto independiente de un navegador por eso no tiene page
    const apiContext = await request.newContext();
    //datos de la persona para dar de alta
    const nuevaPersona: Personas = {
        nombre: "Nicolas",
        apellido: "Dondo",
        edad: 44,
        pais: "Argentina",
    }

    // enviar la peticion POST
    const response =
    await apiContext.post('https://cursotesting.com.ar:3000/personas/nueva/',{
        data: nuevaPersona
    })
    expect(response.status()).toBe(200)
})
