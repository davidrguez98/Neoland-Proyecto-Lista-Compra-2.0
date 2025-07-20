import { getProductsBBDD } from "../models/products.model";

const indexProductsContainer = document.querySelector("#index-products-container")

export function mainIndexProductsList() {
    if (!indexProductsContainer) {
        console.log("Error en carga de index")
        return null
    }

    if(indexProductsContainer) {
        const products = getProductsBBDD()

        if (!products) {
            console.log("Error en carga de productos")
            return null
        }

        if (products) {
            
            for (let product of products) {
                
                indexProductsContainer.innerHTML += `
                    <div class="col text-start pb-4" style="width: 32%;">
                        <div class="card">
                            <img src="${product.img}" alt="photo of coffee">
                            <div class="card-body">  
                                <h5 class="card-title">${product.productName}</h5>
                                <textarea class="card-text short-description">${product.productDescription}</textarea>
                                <select class="form-select mb-2 sizeSelector" aria-label="Default select example">
                                    <option selected value="250">250 gr</option>
                                    <option value="500">500 gr</option>
                                    <option value="1000">1 Kg</option>
                                </select>
                                <h6 class="priceSelector ps-1">${Number(product.productPrice[250]).toFixed(2)}$</h6>
                                <button id="btnSelectedProduct" class="btn" style="background-color: var(--color-buttons); color: var(--color-background);">Add to cart</button>
                            </div>
                        </div>
                    </div>
                `
            }

            const a = document.querySelector(".sizeSelector")
            console.log(a.value)
            

        }

    }
}