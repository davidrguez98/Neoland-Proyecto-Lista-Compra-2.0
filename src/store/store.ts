import { configureStore } from "@reduxjs/toolkit";
import carritoReducer from "../slices/shopping-cart-slice";

const store = configureStore({
    reducer: {
        miPrimerSlice: carritoReducer
    }
})

export default store