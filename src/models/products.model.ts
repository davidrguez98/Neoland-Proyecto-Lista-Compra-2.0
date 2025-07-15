// Interfaces
import { IProduct } from "../types/product-type";

// BBDD - LocalStorage
import { readLocalStorage, setLocalStorage } from "../localStorage/localStorage-scripts";

export function getProductsBBDD(): IProduct[] | null {
    return Array.isArray(readLocalStorage("newList")) ? readLocalStorage("newList") : []
}

export function getProductBBDD(productName: IProduct["productName"]): IProduct | null {
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

    const checkProduct = productsList.find(product => product.productName === productName) || null

    if (checkProduct) {
        if (checkProduct.productStock != productStock) {
            const newQuantity250 = checkProduct.productStock[250] += productStock[250] 
            const newQuantity500 = checkProduct.productStock[500] += productStock[500] 
            const newQuantity1000 = checkProduct.productStock[1000] += productStock[1000]

            checkProduct.productStock = {250: newQuantity250, 500: newQuantity500, 1000: newQuantity1000}
        }

        if (checkProduct.productPrice != productPrice) {
            const newPrice250 = productPrice[250]
            const newPrice500 = productPrice[500]
            const newPrice1000 = productPrice[1000]

            checkProduct.productPrice = {250: newPrice250, 500: newPrice500, 1000: newPrice1000}
        }

        setLocalStorage("newList", productsList)
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

export function updateProduct(productName: IProduct["productName"], updateProductName: IProduct["productName"], updateProductImg: IProduct["img"], updateProductDescription: IProduct["productDescription"], updateProductStock: IProduct["productStock"], updateProductPrice: IProduct["productPrice"],) {
    const productsList: IProduct[] = readLocalStorage("newList")
    
    if (!productsList) {
        return null
    }

    const newImg = updateProductImg //Aqui tengo que añadirle el valor del campo
    const newProductName = updateProductName //Aqui tengo que añadirle el valor del campo
    const newProductDescription = updateProductDescription //Aqui tengo que añadirle el valor del campo
    const newProductStock = updateProductStock //Aqui tengo que añadirle el valor del campo
    const newProductPrice = updateProductPrice //Aqui tengo que añadirle el valor del campo
    
    const checkProduct = productsList.find(product => product.productName === productName) || null

    if (checkProduct) {
        checkProduct.img = newImg,
        checkProduct.productName = newProductName,
        checkProduct.productDescription = newProductDescription,
        checkProduct.productStock = newProductStock,
        checkProduct.productPrice = newProductPrice

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