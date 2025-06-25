import { defaultUsers } from "../BBDD/data-users";
import { mocksProducts } from "../BBDD/mocks-product";

export function obtenerDatosPruebaBBDD() {
    return mocksProducts
}

export function obtenerUsuariosBBDD() {
    return defaultUsers
}