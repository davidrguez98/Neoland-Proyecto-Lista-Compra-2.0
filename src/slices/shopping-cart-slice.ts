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
    shipping: number,
    totalPrice: number
}

const estadoInicialCarrito: IEstadoCarrito = {
    productos: [],
    shipping: 10,
    totalPrice: 0
}

const carritoSlice = createSlice({
    name: "Shopping Cart",
    initialState: estadoInicialCarrito,
    reducers: {
        guardarProductosCache: (state) => {
            state.productos = obtenerDatosPruebaBBDD()
            state.totalPrice += state.shipping

            state.productos.forEach((product) => {
                state.totalPrice += (product.price * product.quantity) || 0
            })
        },
        incrementarProductoCache: (state, action: PayloadAction<Partial<IProducto["id"]>>) => {

            const foundProduct = state.productos.map((product) => {
                if (product.id === action.payload) {product.quantity++}

                return product
            })

            state.productos = foundProduct

            console.log(foundProduct)
        }
    }
})

const carritoReducer = carritoSlice.reducer

export const {guardarProductosCache, incrementarProductoCache} = carritoSlice.actions

export default carritoReducer