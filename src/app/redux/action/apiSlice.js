/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchBaseQuery, createApi }  from '@reduxjs/toolkit/query/react'
import { env } from '@/environments/environment'
import { setCredentials, logOut } from '../../auth/auth.reducer'

const baseQuery = fetchBaseQuery({
    baseUrl: env.api_url,
    credentials: 'include',
    prepareHeaders: ( headers, { getState }) => {
        const token = getState().auth.token;
        if (token){
            headers.set("authorization", `Bearer ${token}`);
        }
        return headers;
    }
})

const baseQueryReauth = async ( args, api, extraOptions) => { 
    let result = baseQuery(args, api, extraOptions);

    if(result?.error?.originalStatus === 403){
        const refreshResult = await baseQuery('/refresh', api, extraOptions);
        
        if(refreshResult?.data){
            const user = api.getState().auth.user;

            //store new token
            api.dispatch(setCredentials({token: refreshResult.data, user: user}));
            result = await baseQuery(args, api, extraOptions);

        }else{
            api.dispatch(logOut());
        }
    }
}

export const apiSlice = createApi({
    baseQuery: baseQueryReauth,
    endpoints: builder => ({})
});