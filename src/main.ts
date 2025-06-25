import { guardarProductosCache } from "./slices/shopping-cart-slice"
import store from "./store/store"

function main() {
  console.log("Estado inicial")
  console.log(store.getState().miPrimerSlice.productos)
  
  console.log("Cargar base de datos y guardar en la store")
  store.dispatch(guardarProductosCache())

  console.log("Muestro datos de mi store")
  console.log(store.getState().miPrimerSlice.productos)
}

document.addEventListener("DOMContentLoaded", main)