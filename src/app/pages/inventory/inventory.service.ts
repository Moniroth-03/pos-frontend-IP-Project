import axiosPrivate from '@/app/api';
import env from '@/environments/environment';
import { InventoryCreateReq, InventoryCreateRes, InventoryGet, InventoryMessage } from './inventory.type';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProduct = createAsyncThunk<
    InventoryGet,{ page: number }, { rejectValue: string }
>(
    "inventory/get",
    async (params,thunkAPI)=>{
        try {
            const res = await axiosPrivate.get<InventoryGet>(env.api_url+'/product?' + `page=${params.page}`);
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

export const UpdateProduct = createAsyncThunk<
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    InventoryMessage,{id: number | undefined, body: any}, { rejectValue: string }
>(
    "inventory/update",
    async (payload,thunkAPI)=>{
        try {
            const res = await axiosPrivate.put<InventoryMessage>(env.api_url+'/product/update?id='+ payload.id,payload.body);
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

export const CreateProduct = createAsyncThunk<
    InventoryCreateRes,InventoryCreateReq, { rejectValue: string }
>(
    "inventory/create",
    async (body,thunkAPI)=>{
        try {
            const res = await axiosPrivate.post<InventoryCreateRes>(env.api_url+'/product',body);
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

export const DeleteProduct = createAsyncThunk<
    InventoryMessage,number, { rejectValue: string }
>(
    "inventory/delete",
    async (id,thunkAPI)=>{
        try {
            const res = await axiosPrivate.delete<InventoryMessage>(env.api_url+'/product/delete?id=' + id);
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