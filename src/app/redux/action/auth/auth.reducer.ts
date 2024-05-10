import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../../store';

type TState = {
    user: null | string; 
    token: null | string;
} 

const initialState: TState = {
    user: null,
    token: null,
}

const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers: {
        setCredentials: ( state, action: PayloadAction<TState> ) => {
            state.token = action.payload.token;
            state.user = action.payload.user;
        },
        logOut: ( state ) => {
            state.token = null;
            state.user = null;
        }
    }
});

export const { setCredentials, logOut } = authSlice.actions;
export default authSlice.reducer;

export const selectUser = ( state: RootState) => state.auth.user;
export const selectToken = ( state: RootState ) => state.auth.token;