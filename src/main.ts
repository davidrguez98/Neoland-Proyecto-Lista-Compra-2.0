import { mainIndexProductsList } from "./controllers/view-index.controller"
import { loadProductsBBDD } from "./models/sistem.models"

function main() {

    loadProductsBBDD()
    mainIndexProductsList()

}

document.addEventListener("DOMContentLoaded", main)