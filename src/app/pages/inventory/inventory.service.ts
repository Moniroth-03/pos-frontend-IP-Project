import env from '@/environments/environment';
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { InventoryCreateReq, InventoryGet, InventoryMessage, InventoryUpdateReq, initState } from './inventory.type';
import { RootState } from '@/app/store';
import axios from '@/app/api';

const initialState: initState = {
    isLoading: false,
    message: null,
    inventory: []
}

const inventoryService = createSlice({
    name: 'inventory',
    initialState:initialState,
    reducers:{},
    extraReducers: builder => {
        builder
        // Get
        .addCase(getProduct.fulfilled, (state, action: PayloadAction<InventoryGet>)=> {
            state.isLoading = false;
            state.inventory = action.payload.data;
            state.message = action.payload.message;
        })
        .addCase(getProduct.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(getProduct.rejected,(state, action)=>{
            state.isLoading = false;
            state.message = action.payload as string;
        })

        //Create
        .addCase(CreateProduct.fulfilled, (state, action: PayloadAction<InventoryMessage>)=>{
            state.isLoading = false;
            state.message = action.payload.message;
        })
        .addCase(CreateProduct.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(CreateProduct.rejected, (state, action )=>{
            state.isLoading = false;
            state.message = action.payload as string;
        })

        //Update
        .addCase(UpdateProduct.fulfilled, (state, action: PayloadAction<InventoryMessage>)=>{
            state.isLoading = false;
            state.message = action.payload.message;
        })
        .addCase(UpdateProduct.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(UpdateProduct.rejected, (state, action )=>{
            state.isLoading = false;
            state.message = action.payload as string;
        })

        //Delete
        .addCase(UpdateProduct.fulfilled, (state, action: PayloadAction<InventoryMessage>)=>{
            state.isLoading = false;
            state.message = action.payload.message;
        })
        .addCase(UpdateProduct.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(UpdateProduct.rejected, (state, action )=>{
            state.isLoading = false;
            state.message = action.payload as string;
        })
    }
})

export const getProduct = createAsyncThunk<
    InventoryGet,void, { rejectValue: string }
>(
    "inventory/get",
    async (_,thunkAPI)=>{
        try {
            const res = await axios.get<InventoryGet>(env.api_url+'/product');
            return res.data;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
           if (err.response) {
                return thunkAPI.rejectWithValue(err.response.data);
            }
            throw err;
        }
    }
)

export const UpdateProduct = createAsyncThunk<
    InventoryMessage,InventoryUpdateReq, { rejectValue: string }
>(
    "inventory/update",
    async (body,thunkAPI)=>{
        try {
            const res = await axios.put<InventoryMessage>(env.api_url+'/product',body);
            return res.data;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
           if (err.response) {
                return thunkAPI.rejectWithValue(err.response.data);
            }
            throw err;
        }
    }
)

export const CreateProduct = createAsyncThunk<
    InventoryMessage,InventoryCreateReq, { rejectValue: string }
>(
    "inventory/create",
    async (body,thunkAPI)=>{
        try {
            const res = await axios.post<InventoryMessage>(env.api_url+'/product',body);
            return res.data;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
           if (err.response) {
                return thunkAPI.rejectWithValue(err.response.data);
            }
            throw err;
        }
    }
)

export const DeleteProduct = createAsyncThunk<
    InventoryMessage,void, { rejectValue: string }
>(
    "inventory/delete",
    async (_,thunkAPI)=>{
        try {
            const res = await axios.delete<InventoryMessage>(env.api_url+'/product');
            return res.data;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (err: any) {
           if (err.response) {
                return thunkAPI.rejectWithValue(err.response.data);
            }
            throw err;
        }
    }
)

export default inventoryService.reducer;

export const selectProduct = ( state: RootState) => state.inventory.inventory;

export const selectMessage = ( state: RootState) => state.inventory.message;
export const selectIsLoading = ( state: RootState ) => state.inventory.isLoading;