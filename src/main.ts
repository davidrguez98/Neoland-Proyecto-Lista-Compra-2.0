import { updateProduct } from "./models/products.model"
import { loadProductsBBDD } from "./models/sistem.models"

function main() {

    loadProductsBBDD()
    updateProduct("Shanga", "img", "Shaanga", "laskjd", {250: 2, 500: 1, 1000: 1}, {250: 16.0, 500: 20, 1000: 42.1})

}

document.addEventListener("DOMContentLoaded", main)