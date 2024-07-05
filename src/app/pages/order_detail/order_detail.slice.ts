
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/app/store';
import { toast } from 'sonner';
import { initState, OrderRes } from './order_detail.type';
import { getSale } from './order.service';


const initialState: initState = {
    isLoading: false,
    data: null,
}

const saleSlice = createSlice({
    name: 'sale',
    initialState:initialState,
    reducers:{},
    extraReducers: builder => {
        builder
        // Get
        .addCase(getSale.fulfilled, (state, action: PayloadAction<OrderRes>)=> {
            state.isLoading = false;
            state.data = action.payload;
        })
        .addCase(getSale.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(getSale.rejected,(state, action)=>{
            state.isLoading = false;
            toast.error(action.payload as string)
            
        })
    }
})

export default saleSlice.reducer;

export const selectSale = ( state: RootState) => state.sale;