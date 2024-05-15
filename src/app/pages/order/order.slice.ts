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

const orderSlice = createSlice({
    name:"order",
    initialState,
    reducers:{},
    extraReducers: builder => {
        
    }
});

export default orderSlice.reducer;

export const selectProduct = ( state: RootState) => state.order.products;
export const selectCategory = ( state: RootState ) => state.order.categories;