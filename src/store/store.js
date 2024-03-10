import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "./cakeSlice";
import userReducer from './userSlice'
export const store = configureStore({
    reducer:{
        cake:cakeReducer,
        user:userReducer
    }
})