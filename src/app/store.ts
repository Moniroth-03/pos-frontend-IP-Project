import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth/auth.slice.js'
import inventoryService from './pages/inventory/inventory.service.ts'
import orderService from './pages/order/order.service.ts'


export const store = configureStore({
  reducer: {
    auth: authSlice,
    order: orderService,
    inventory: inventoryService,
  },
  devTools: true
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch