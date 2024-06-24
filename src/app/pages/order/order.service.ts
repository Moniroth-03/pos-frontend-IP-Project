import axiosPrivate from '@/app/api';
import env from '@/environments/environment';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Category, GetProductByType} from './order.type';

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

export const getProductByType = createAsyncThunk<
   GetProductByType ,number, { rejectValue: string }
>(
    "product/getbyid",
    async (id,thunkAPI)=>{
        try {
            const res = await axiosPrivate.get<GetProductByType>(env.api_url+'/product/searchId?id='+ id);
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
