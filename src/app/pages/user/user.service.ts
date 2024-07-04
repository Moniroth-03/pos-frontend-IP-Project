import axiosPrivate from '@/app/api';
import env from '@/environments/environment';
import { UserCreateReq, UserCreateRes, UserGet, UserMessage, UserUpdateReq } from './user.type';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getUser = createAsyncThunk<
    UserGet,void, { rejectValue: string }
>(
    "user/get",
    async (_,thunkAPI)=>{
        try {
            const res = await axiosPrivate.get<UserGet>(env.api_url+'/user');
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

export const UpdateUser = createAsyncThunk<
    UserMessage,UserUpdateReq, { rejectValue: string }
>(
    "user/update",
    async (payload,thunkAPI)=>{
        try {
            const res = await axiosPrivate.put<UserMessage>(env.api_url+'/user/'+ payload.id,payload.body);
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

export const CreateUser = createAsyncThunk<
    UserCreateRes,UserCreateReq, { rejectValue: string }
>(
    "user/create",
    async (body,thunkAPI)=>{
        try {
            const res = await axiosPrivate.post<UserCreateRes>(env.api_url+'/user/create',body);
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

export const DeleteUser = createAsyncThunk<
    UserMessage,number, { rejectValue: string }
>(
    "user/delete",
    async (id,thunkAPI)=>{
        try {
            const res = await axiosPrivate.delete<UserMessage>(env.api_url+'/user/' + id);
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