import axiosPrivate from '@/app/api';
import env from '@/environments/environment';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Category, GetAllProduct, OrderReq, PostCategoryRes} from './order.type';
import { Sale } from '../order_detail/order_detail.type';

export const getCategory = createAsyncThunk<
    { data: Category[] },void, { rejectValue: string }
>(
    "category/get",
    async (_,thunkAPI)=>{
        try {
            const res = await axiosPrivate.get<{ data: Category[] }>(env.api_url+'/product/types');
            return res.data;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            if (error.response && error.response.data) {
                return thunkAPI.rejectWithValue(error.response.data);
            } else if (error.message) {
                return thunkAPI.rejectWithValue(error.message);
            } else {
                return thunkAPI.rejectWithValue('An unknown error occurred');
            }
        }
    }
)


export const createCategory = createAsyncThunk<
    PostCategoryRes,{ name: string, image?: string}, { rejectValue: string }
>(
    "category/create",
    async (body,thunkAPI)=>{
        try {
            const res = await axiosPrivate.post<PostCategoryRes>(env.api_url+'/product/type',body);
            return res.data;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            if (error.response && error.response.data) {
                return thunkAPI.rejectWithValue(error.response.data);
            } else if (error.message) {
                return thunkAPI.rejectWithValue(error.message);
            } else {
                return thunkAPI.rejectWithValue('An unknown error occurred');
            }
        }
    }
)

export const createOrder = createAsyncThunk<
    {order: Sale, message: string},OrderReq, { rejectValue: string }
>(
    "sale/create",
    async (body,thunkAPI)=>{
        try {
            const res = await axiosPrivate.post<{order: Sale,message: string}>(env.api_url+'/pos/order',body);
            return res.data;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            if (error.response && error.response.data) {
                return thunkAPI.rejectWithValue(error.response.data);
            } else if (error.message) {
                return thunkAPI.rejectWithValue(error.message);
            } else {
                return thunkAPI.rejectWithValue('An unknown error occurred');
            }
        }
    }
)

export const getProductByType = createAsyncThunk<
   GetAllProduct ,{id: number|string, page: number|string}, { rejectValue: string }
>(
    "product/getbycatid",
    async (params,thunkAPI)=>{
        try {
            const res = await axiosPrivate.get<GetAllProduct>(env.api_url+'/product/types/category?'+`id=${params.id}&page=${params.page}`);
            return res.data;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            if (error.response && error.response.data) {
                return thunkAPI.rejectWithValue(error.response.data);
            } else if (error.message) {
                return thunkAPI.rejectWithValue(error.message);
            } else {
                return thunkAPI.rejectWithValue('An unknown error occurred');
            }
        }
    }
)


export const getProductByNameOrCode = createAsyncThunk<
   GetAllProduct ,{ key: string, page: number | string } , { rejectValue: string }
>(
    "product/getbyename",
    async (params,thunkAPI)=>{
        try {
            const res = await axiosPrivate.get<GetAllProduct>(env.api_url+'/product/searchName?key='+ params.key + `&page=${params.page || 0}`);
            return res.data;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            if (error.response && error.response.data) {
                return thunkAPI.rejectWithValue(error.response.data);
            } else if (error.message) {
                return thunkAPI.rejectWithValue(error.message);
            } else {
                return thunkAPI.rejectWithValue('An unknown error occurred');
            }
        }
    }
)
