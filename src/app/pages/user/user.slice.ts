
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserCreateRes, UserGet, UserMessage, initState } from './user.type';
import { RootState } from '@/app/store';
import { toast } from 'sonner';
import { CreateUser, DeleteUser, getCustomer, getUser, UpdateUser } from './user.service';
import { FormatDateTime } from '@/app/utils/dateTimeFormat';


const initialState: initState = {
    isLoading: false,
    data: []
}

const userSlice = createSlice({
    name: 'user',
    initialState:initialState,
    reducers:{},
    extraReducers: builder => {
        builder
        // Get
        .addCase(getUser.fulfilled, (state, action: PayloadAction<UserGet>)=> {
            state.isLoading = false;
            state.data = action.payload.data;
        })
        .addCase(getUser.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(getUser.rejected,(state, action)=>{
            state.isLoading = false;
            toast.error(action.payload as string)
            
        })


        // Get
        .addCase(getCustomer.fulfilled, (state, action: PayloadAction<UserGet>)=> {
            state.isLoading = false;
            state.data = action.payload.data;
        })
        .addCase(getCustomer.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(getCustomer.rejected,(state, action)=>{
            state.isLoading = false;
            toast.error(action.payload as string)
            
        })


        //Create
        .addCase(CreateUser.fulfilled, (state, action: PayloadAction<UserCreateRes>)=>{
            state.isLoading = false;
            toast.success(action.payload.message,{
                description: FormatDateTime(action.payload.data.created_at),  
            }); 
        })
        .addCase(CreateUser.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(CreateUser.rejected, (state, action )=>{
            state.isLoading = false;
            toast.error(action.payload as string)
        })

        //Update
        .addCase(UpdateUser.fulfilled, (state, action: PayloadAction<UserMessage>)=>{
            state.isLoading = false;
            toast.error(action.payload.message as string)
        })
        .addCase(UpdateUser.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(UpdateUser.rejected, (state, action )=>{
            state.isLoading = false;
            toast.error(action.payload as string)
        })

        //Delete
        .addCase(DeleteUser.fulfilled, (state, action: PayloadAction<UserMessage>)=>{
            state.isLoading = false;
            toast.success(action.payload.message);
        })
        .addCase(DeleteUser.pending, (state)=>{
            state.isLoading = true;
        })
        .addCase(DeleteUser.rejected, (state, action )=>{
            state.isLoading = false;
            toast.error(action.payload as string)
        })
    }
})

export default userSlice.reducer;

export const selectUser = ( state: RootState) => state.user;