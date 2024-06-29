import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store';
import env from '@/environments/environment';
import axios from 'axios';
import { Tres, Tbody, initState } from './auth.type';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getLocalStorage: Tres| any = JSON.parse(localStorage.getItem('user'));
const getToken: any = localStorage.getItem('token');

const initialState: initState = {
    Data: getLocalStorage || {
        status: false,
        message: null,
        data: {
            id: null,
            users_type: null,
            name: null,
            avatar: null,
            phone: null,
            email: null,
            email_verified_at: null,
            created_at: null,
            updated_at: null,
            role: {
                id: null,
                name: null,
                created_at: null,
                updated_at: null,
            } 
        },
        token: getToken
    },
    isLoading: false
}

export const login = createAsyncThunk<
    Tres, Tbody, { rejectValue: string }
>(
    "auth/login",
    async (body,thunkAPI)=>{
        try {
            const res = await axios.post<Tres>(env.api_url+'/login', body);
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
const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(login.fulfilled, (state, action: PayloadAction<Tres>)=> {
            state.isLoading = false;
            state.Data = action.payload
        })
        .addCase(login.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(login.rejected,(state)=>{
            state.isLoading = false;
        })
    }
});

export default authSlice.reducer;

export const selectUser = ( state: RootState) => state.auth.Data.data;
export const selectToken = ( state: RootState ) => state.auth.Data.token;