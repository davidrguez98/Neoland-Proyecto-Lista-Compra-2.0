import store from "./store/store"
import { guardarProductosCache, incrementarProductoCache } from "./slices/shopping-cart-slice"

function main() {
  console.log("Estado inicial")
  console.log(store.getState().miPrimerSlice.productos)
  
  console.log("Cargar base de datos y guardar en la store")
  store.dispatch(guardarProductosCache())

  console.log("Muestro datos de mi store")
  console.log(store.getState().miPrimerSlice)

  store.dispatch(incrementarProductoCache(5))

  console.log(store.getState().miPrimerSlice)

}

document.addEventListener("DOMContentLoaded", main)