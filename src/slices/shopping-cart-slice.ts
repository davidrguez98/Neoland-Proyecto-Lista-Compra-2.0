import { createSlice } from "@reduxjs/toolkit";
import { mocksProducts } from "../modules/mocks-product";


interface IProduct {
    id: number,
    name: string,
    price: number,
    quantity: number
}

interface IShoppingCart {
    products: IProduct[]
}

const defaultState: IShoppingCart = {
    products: mocksProducts
}

const carritoSlice = createSlice({
    name: "Shopping Cart",
    initialState: defaultState,
    reducers
})