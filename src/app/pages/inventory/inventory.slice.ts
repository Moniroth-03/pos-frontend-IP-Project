
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { InventoryGet, InventoryMessage, initState } from './inventory.type';
import { RootState } from '@/app/store';
import { CreateProduct, DeleteProduct, UpdateProduct, getProduct } from './inventory.service';
import { toast } from 'sonner';


const initialState: initState = {
    isLoading: false,
    message: null,
    data: []
}

const inventorySlice = createSlice({
    name: 'inventory',
    initialState:initialState,
    reducers:{},
    extraReducers: builder => {
        builder
        // Get
        .addCase(getProduct.fulfilled, (state, action: PayloadAction<InventoryGet>)=> {
            state.isLoading = false;
            state.data = action.payload.data;
            state.message = action.payload.message;
        })
        .addCase(getProduct.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(getProduct.rejected,(state, action)=>{
            state.isLoading = false;
            state.message = action.payload as string;
            toast.error(state.message)
            
        })

        //Create
        .addCase(CreateProduct.fulfilled, (state, action: PayloadAction<InventoryMessage>)=>{
            state.isLoading = false;
            state.message = action.payload.message;
            toast.success(state.message);
        })
        .addCase(CreateProduct.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(CreateProduct.rejected, (state, action )=>{
            state.isLoading = false;
            state.message = action.payload as string;
            toast.error(state.message)
        })

        //Update
        .addCase(UpdateProduct.fulfilled, (state, action: PayloadAction<InventoryMessage>)=>{
            state.isLoading = false;
            state.message = action.payload.message;
            toast.success(state.message);
        })
        .addCase(UpdateProduct.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(UpdateProduct.rejected, (state, action )=>{
            state.isLoading = false;
            state.message = action.payload as string;
            toast.error(state.message)
        })

        //Delete
        .addCase(DeleteProduct.fulfilled, (state, action: PayloadAction<InventoryMessage>)=>{
            state.isLoading = false;
            state.message = action.payload.message;
            toast.success(state.message);
        })
        .addCase(DeleteProduct.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(DeleteProduct.rejected, (state, action )=>{
            state.isLoading = false;
            state.message = action.payload as string;
            toast.error(state.message)
        })
    }
})

export default inventorySlice.reducer;

export const selectInventory = ( state: RootState) => state.inventory;