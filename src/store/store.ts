import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        miPrimerSlice: mySliceReducer()
    }
})