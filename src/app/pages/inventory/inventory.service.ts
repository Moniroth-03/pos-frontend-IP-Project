import axiosPrivate from '@/app/api';
import env from '@/environments/environment';
import { InventoryCreateReq, InventoryGet, InventoryMessage, InventoryUpdateReq } from './inventory.type';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getProduct = createAsyncThunk<
    InventoryGet,void, { rejectValue: string }
>(
    "inventory/get",
    async (_,thunkAPI)=>{
        try {
            const res = await axiosPrivate.get<InventoryGet>(env.api_url+'/product');
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
    InventoryMessage,InventoryUpdateReq, { rejectValue: string }
>(
    "inventory/update",
    async (payload,thunkAPI)=>{
        try {
            const res = await axiosPrivate.put<InventoryMessage>(env.api_url+'/product/'+ payload.id,payload.body);
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
    InventoryMessage,InventoryCreateReq, { rejectValue: string }
>(
    "inventory/create",
    async (body,thunkAPI)=>{
        try {
            const res = await axiosPrivate.post<InventoryMessage>(env.api_url+'/product',body);
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
            const res = await axiosPrivate.delete<InventoryMessage>(env.api_url+'/product/' + id);
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