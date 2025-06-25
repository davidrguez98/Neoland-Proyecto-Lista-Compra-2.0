import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { obtenerDatosPruebaBBDD } from "../models/mock-products-model";


interface IProducto {
    id: number,
    name: string,
    price: number,
    quantity: number
}

interface IEstadoCarrito {
    productos: IProducto[],
    total: number
}

const estadoInicialCarrito: IEstadoCarrito = {
    productos: [],
    total: 0
}

const carritoSlice = createSlice({
    name: "Shopping Cart",
    initialState: estadoInicialCarrito,
    reducers: {
        guardarProductosCache: (state) => {
            state.productos = obtenerDatosPruebaBBDD()
        },
        incrementarProductoCache: () => {
            
        }
    }
})

const carritoReducer = carritoSlice.reducer

export const {guardarProductosCache} = carritoSlice.actions

export default carritoReducer