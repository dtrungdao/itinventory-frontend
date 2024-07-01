import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../redux/features/auth/authSlice"
import productReducer from "../redux/features/product/productSlice"
import filterReducer from "../redux/features/product/filterSlice"

//this is a mandatory and only function to create store of redux
export const store = configureStore({
    reducer:{
        auth: authReducer,
        product: productReducer,
        filter: filterReducer,
    }
})