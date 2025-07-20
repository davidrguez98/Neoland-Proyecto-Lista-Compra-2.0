import { getProductsBBDD } from "./products.model"

export function selectProduct() {
    const btnSelectProduct = document.querySelectorAll("#btnSelectedProduct")
    const products = getProductsBBDD()
    
    if (!btnSelectProduct) {
        console.log("Error al cargar productos")
        return null
    }

    if (!products) {
        console.log("Error al cargar productos")
        return null
    }

    for (let index = 0; index < btnSelectProduct.length; index++) {
        btnSelectProduct[index].addEventListener("click", function() {

            const sizeSelector = document.querySelectorAll("#sizeSelector")
            const sizeSelector = document.querySelectorAll("#sizeSelector")
            const selectedSize = Number(sizeSelector[index].value)
            const productName = products[index].productName
            const productPrice = products[index].productPrice[selectedSize]
        })
    }
}

const sizeSelectors = document.querySelectorAll('.sizeSelector')
            sizeSelectors.forEach(selector => {
                selector.addEventListener('change', function(e) {
                    const target = e.target as HTMLSelectElement
                    const selectedSize = parseInt(target.value) as 250 | 500 | 1000 // Type assertion para TypeScript
                    const productIndex = parseInt(target.getAttribute('data-product-index') || '0')
                    const priceElement = document.querySelector(`.priceSelector[data-product-index="${productIndex}"]`)
                    
                    if (priceElement && products[productIndex]) {
                        const newPrice = Number(products[productIndex].productPrice[selectedSize]).toFixed(2)
                        priceElement.textContent = `${newPrice}$`
                    }
                })
            })