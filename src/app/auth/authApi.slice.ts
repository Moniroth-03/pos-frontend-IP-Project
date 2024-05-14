/* eslint-disable @typescript-eslint/no-explicit-any */
import { apiSlice } from '../redux/action/apiSlice'

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builders: any) => ({
        login: builders.mutation({
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            query: (credentials: any) => ({
                url: '/login',
                method: 'POST',
                body: { ...credentials }
            })
        }),
        
    })
})

export const {
    useLoginMutation
} = authApiSlice;