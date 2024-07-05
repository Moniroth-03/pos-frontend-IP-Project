import axiosPrivate from '@/app/api';
import env from '@/environments/environment';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { OrderRes } from './order_detail.type';

export const getSale = createAsyncThunk<
    OrderRes,{page: number|string}, { rejectValue: string }
>(
    "sale/get",
    async (params,thunkAPI)=>{
        try {
            const res = await axiosPrivate.get<OrderRes>(env.api_url+'/sale?page='+ params.page);
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

