// Interfaces
import { IProduct } from "../types/product-type";

// BBDD - LocalStorage
import { readLocalStorage, setLocalStorage } from "../localStorage/localStorage-scripts";

export function getProductsBBDD(): IProduct[] | null {
    return Array.isArray(readLocalStorage("newList")) ? readLocalStorage("newList") : []
}

function getProductBBDD(productName: IProduct["productName"]): IProduct | null {
    const productsList: IProduct[] = readLocalStorage("newList")

    if (!productsList) {
        return null
    }

    return productsList.find(product => product.productName === productName) || null
} 


//TENGO QUE AÑADIR LO DE CAMBIAR LOS TIPOS DE PRECIOS Y STOCKS
export function newProduct(img: IProduct["img"], productName: IProduct["productName"], productDescription: IProduct["productDescription"], productStock: IProduct["productStock"], productPrice: IProduct["productPrice"]) {
    const productsList: IProduct[] = readLocalStorage("newList")

    const newImg = img
    const newProductName = productName
    const newProductDescription = productDescription
    const newProductStock = productStock
    const newProductPrice = productPrice

    if (!productsList) {
        return null
    }

    const checkProduct = getProductBBDD(productName)

    if (checkProduct) {
        console.log("producto repetido")
    }
    
    if (!checkProduct) {
        let newProduct: IProduct = {
            img: newImg,
            productName: newProductName,
            productDescription: newProductDescription,
            productStock: newProductStock,
            productPrice: newProductPrice,
        }

        productsList.push(newProduct)
        setLocalStorage("newList", productsList)
    }
}

export function updateProduct(productName: IProduct["productName"], updateProductName: IProduct["productName"]) {
    const productsList: IProduct[] = readLocalStorage("newList")
    
    if (!productsList) {
        return null
    }

    const newImg = "foto cambiada" //Aqui tengo que añadirle el valor del campo
    const newProductName = updateProductName //Aqui tengo que añadirle el valor del campo
    const newProductDescription = "descripcion cambiada" //Aqui tengo que añadirle el valor del campo
    const newProductStock = { "250": 6, "500": 7, "1000": 4 } //Aqui tengo que añadirle el valor del campo
    const newProductPrice = { "250": 6, "500": 7, "1000": 4 } //Aqui tengo que añadirle el valor del campo
    
    const checkProduct = productsList.find(product => product.productName === productName) || null

    if (checkProduct) {
        let newProduct: IProduct = {
            img: checkProduct.img = newImg,
            productName: checkProduct.productName = newProductName,
            productDescription: checkProduct.productDescription = newProductDescription,
            productStock: checkProduct.productStock = newProductStock,
            productPrice: checkProduct.productPrice = newProductPrice
        }

        productsList.push(newProduct)

        setLocalStorage("newList", productsList)
    }
}

export function deleteProduct(productName: IProduct["productName"]) {
    const productsList: IProduct[] = readLocalStorage("newList")

    for (let index = 0; index < productsList.length; index++) {
        if (productsList[index].productName === productName) {
            productsList.splice(index, 1)
            setLocalStorage("newList", productsList)
        } 
    }
}