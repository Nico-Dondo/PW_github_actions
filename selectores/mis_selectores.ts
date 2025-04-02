export interface SelectresLogin{
    usuario: string;
    clave: string;
    email: string;
    btn_ingresar : string;
}
export const selector: SelectresLogin = {
    usuario : '#tuusuario',
    clave :'#tuclave',
    email: '#tumail',
    btn_ingresar : 'body > form > button:nth-child(8)'
    
}