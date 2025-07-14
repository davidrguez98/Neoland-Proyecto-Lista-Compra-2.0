import { IProduct } from "../types/product-type";
import { productsBBDD } from "../BBDD/products-BBDD";
import { setLocalStorage, readLocalStorage } from "../localStorage/localStorage-scripts";

let productsList: IProduct[] = []

export function loadProductsBBDD() {
    
    const loadDataBBDD = readLocalStorage("newList")

    if (!loadDataBBDD || loadDataBBDD.lenght === 0) {
        productsBBDD.forEach(element => productsList.push(element))
        setLocalStorage("newList", productsList)
        console.log("Artículos cargados por defecto")
    } else {
        console.log("Ya hay datos en el localStorage. No se cargan los predefinidos")
    }
}