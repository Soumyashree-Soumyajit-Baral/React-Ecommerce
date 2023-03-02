import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import itemSlice from "./slices/itemSlice";
import valueSlice from "./slices/valueSlice";
import pageSlice from "./slices/pageSlice";

const store=configureStore({
    reducer:{
        carts:cartSlice,
        items:itemSlice,
        category:valueSlice,
        pageNumber:pageSlice
    }
})

export default store;