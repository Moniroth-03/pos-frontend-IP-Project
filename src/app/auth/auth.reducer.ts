import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../redux/store';

type TUser = {
    status: boolean;
    message: string | null;
    data: {
        id: number | null;
        users_type: number | null;
        name: string | null;
        avatar: string | null;
        phone: string | null;
        email: string | null;
        email_verified_at: Date | null;
        created_at: Date | null;
        updated_at: Date | null;
        role: {
            id: number | null;
            name: string | null;
            created_at: Date | null;
            updated_at: Date | null;
        }
    }
    token: null | string;
} 

const initialState: TUser = {
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
    token: null
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {
        setCredentials: ( state, action: PayloadAction<TUser> ) => {
            state.token = action.payload.token;
        },
        logOut: ( state ) => {
            state.token = initialState.token;
            state.data  = initialState.data;
        }
    }
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;

export const selectUser = ( state: RootState) => state.auth.data;
export const selectToken = ( state: RootState ) => state.auth.token;