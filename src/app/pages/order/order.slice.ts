
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/app/store';
import { toast } from 'sonner';
import { Category, GetProductByType, Product, initState } from './order.type';
import { getCategory, getProductByType } from './order.service';


const initialState: initState = {
    products: {
        data: null,
        isLoading: false
    },
    categories: {
        data: null,
        isLoading: false
    },
    carts : {
        count: 0,
        items: []
    }
}

const orderSlice = createSlice({
    name: 'order',
    initialState:initialState,
    reducers:{
        addCart: (state,action: PayloadAction<Product>)=>{
            const isProductAlrdExist = state.carts?.items.findIndex(item => item?.product.id === action.payload.id); 
            
            if(isProductAlrdExist != -1){
                // If the product exists, increment its quantity
                state.carts.items[isProductAlrdExist].qty += 1;

            }else {
                state.carts?.items.push({product: action.payload, qty: 1})
            }
        },
        removeCart: (state,action: PayloadAction<Product>)=>{
            const isProductAlrdExist = state.carts?.items.findIndex(item => item?.product.id === action.payload.id); 
            
            if(isProductAlrdExist != -1){
                // If the product exists, increment its quantity
                state.carts.items[isProductAlrdExist].qty -= 1;

            }
        },
        resetCart: (state) =>{
            state.carts = {
                count: 0,
                items: []
            }
        }
    },
    extraReducers: builder => {
        builder
        // GetCategory
        .addCase(getCategory.fulfilled, (state, action: PayloadAction<{data: Category[]}>)=> {
            state.categories.isLoading = false;
            state.categories.data = action.payload.data;
        })
        .addCase(getCategory.pending,(state)=>{
            state.categories.isLoading = true;
        })
        .addCase(getCategory.rejected,(state, action)=>{
            state.categories.isLoading = false;
            toast.error(action.payload as string); 
        })

        //getProductbyType
        .addCase(getProductByType.fulfilled, (state, action: PayloadAction<GetProductByType>)=> {
            state.products.isLoading = false;
            state.products.data = action.payload.data;
        })
        .addCase(getProductByType.pending,(state)=>{
            state.products.isLoading = true;
        })
        .addCase(getProductByType.rejected,(state, action)=>{
            state.products.isLoading = false;
            toast.error(action.payload as string); 
        })
    }
})

export default orderSlice.reducer;
export const { addCart,removeCart } = orderSlice.actions;

export const selectCategory = ( state: RootState) => state.order.categories;
export const selectOrderProduct = ( state: RootState) => state.order.products;
export const selectCart = ( state:RootState) => state.order.carts;