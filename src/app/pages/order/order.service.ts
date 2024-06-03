import { createSlice } from "@reduxjs/toolkit";
import { initState } from "./order.type";
import { RootState } from "@/app/store";

const initialState: initState = {
    products:{
        isLoading: false,
        data: null
    },
    categories: {
        isLoading: false,
        data: null
    }
}

const orderService = createSlice({
    name:"order",
    initialState,
    reducers:{},
    extraReducers: builder => {
        
    }
});

export default orderService.reducer;

export const selectProduct = ( state: RootState) => state.order.products;
export const selectCategory = ( state: RootState ) => state.order.categories;