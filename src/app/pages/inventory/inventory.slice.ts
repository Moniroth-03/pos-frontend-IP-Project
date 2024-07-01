
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { InventoryGet, InventoryMessage, initState } from './inventory.type';
import { RootState } from '@/app/store';
import { CreateProduct, DeleteProduct, UpdateProduct, getProduct } from './inventory.service';
import { toast } from 'sonner';


const initialState: initState = {
    isLoading: false,
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
        })
        .addCase(getProduct.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(getProduct.rejected,(state, action)=>{
            state.isLoading = false;
            toast.error(action.payload)
            
        })

        //Create
        .addCase(CreateProduct.fulfilled, (state, action: PayloadAction<InventoryMessage>)=>{
            state.isLoading = false;
            toast.error(action.payload.message)
        })
        .addCase(CreateProduct.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(CreateProduct.rejected, (state, action )=>{
            state.isLoading = false;
            toast.error(action.payload)
        })

        //Update
        .addCase(UpdateProduct.fulfilled, (state, action: PayloadAction<InventoryMessage>)=>{
            state.isLoading = false;
            toast.error(action.payload.message)
        })
        .addCase(UpdateProduct.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(UpdateProduct.rejected, (state, action )=>{
            state.isLoading = false;
            toast.error(action.payload)
        })

        //Delete
        .addCase(DeleteProduct.fulfilled, (state, action: PayloadAction<InventoryMessage>)=>{
            state.isLoading = false;
            toast.error(action.payload.message)
        })
        .addCase(DeleteProduct.pending, (state)=>{
            state.isLoading = true;
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .addCase(DeleteProduct.rejected, (state, action: PayloadAction<any> )=>{
            state.isLoading = false;
            toast.error(action.payload.message)
        })
    }
})

export default inventorySlice.reducer;

export const selectInventory = ( state: RootState) => state.inventory;