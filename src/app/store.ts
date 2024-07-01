import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth/auth.slice.js'
import inventorySlice from './pages/inventory/inventory.slice.ts'
import orderSlice from './pages/order/order.slice.ts'
import userSlice from './pages/user/user.slice.ts'


export const store = configureStore({
  reducer: {
    auth: authSlice,
    order: orderSlice,
    inventory: inventorySlice,
    user: userSlice,
  },
  devTools: true
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch