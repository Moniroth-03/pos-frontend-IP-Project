
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '@/app/store';
import { toast } from 'sonner';
import { Category, GetAllProduct, PostCategoryRes, Product, initState } from './order.type';
import { createCategory, getProductByNameOrCode, getCategory, getProductByType } from './order.service';
import { FormatDateTime } from '@/app/utils/dateTimeFormat';


const initialState: initState = {
    products: {
        data: null,
        isLoading: false
    },
    categories: {
        data: null,
        isLoading: false
    },
    carts : []
}

const orderSlice = createSlice({
    name: 'order',
    initialState:initialState,
    reducers:{
        addCart: (state,action: PayloadAction<Product>)=>{
            const isProductAlrdExist = state.carts?.findIndex(item => item?.product.id === action.payload.id); 
            if(isProductAlrdExist != -1){
                // If the product exists, increment its quantity
                state.carts[isProductAlrdExist].qty += 1;

            }else {
                state.carts?.push({product: action.payload, qty: 1})
            }
        },
        removeCart: (state,action: PayloadAction<Product>)=>{
            const isProductAlrdExist = state.carts?.findIndex(item => item?.product.id === action.payload.id); 
            
            if(isProductAlrdExist != -1){
                // If the product exists, decrement its quantity
                if(state.carts[isProductAlrdExist].qty == 1){
                    const arr = state.carts;
                    arr?.splice(isProductAlrdExist,1);
                    state.carts = arr;
                    return;
                }
                state.carts[isProductAlrdExist].qty -= 1;

            }
        },
        resetCart: (state) =>{
            state.carts = []
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


        // CreateCategory
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .addCase(createCategory.fulfilled, (state, action: PayloadAction<PostCategoryRes>)=> {
            const date = new Date(action.payload.data.created_at.toString());
            toast.success(action.payload.message,{
                description: FormatDateTime(date),  
            }); 
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .addCase(createCategory.rejected,(state, action: PayloadAction<any>)=>{
            toast.error(action.payload?.message as string); 
        })


        //getAllProduct
        .addCase(getProductByNameOrCode.fulfilled, (state, action: PayloadAction<GetAllProduct>)=> {
            state.products.isLoading = false;
            state.products.data = action.payload;
        })
        .addCase(getProductByNameOrCode.pending,(state)=>{
            state.products.isLoading = true;
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .addCase(getProductByNameOrCode.rejected,(state, action: PayloadAction<any>)=>{
            state.products.isLoading = false;
            toast.error(action.payload.message as string); 
        })




        //getproductByCateogryid
        .addCase(getProductByType.fulfilled, (state, action: PayloadAction<GetAllProduct>)=> {
            state.products.isLoading = false;
            state.products.data = action.payload;
        })
        .addCase(getProductByType.pending,(state)=>{
            state.products.isLoading = true;
        })
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .addCase(getProductByType.rejected,(state, action: PayloadAction<any>)=>{
            state.products.isLoading = false;
            toast.error(action.payload.message as string); 
        })
    }
})

export default orderSlice.reducer;
export const { addCart,removeCart } = orderSlice.actions;

export const selectCategory = ( state: RootState) => state.order.categories;
export const selectOrderProduct = ( state: RootState) => state.order.products;
export const selectCart = ( state:RootState) => state.order.carts;