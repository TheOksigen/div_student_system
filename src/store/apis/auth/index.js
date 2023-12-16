import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const BASE_URL = import.meta.env.VITE_BASE_URL;

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: '/api/auth/login',
        method: 'POST',
        body
      })
    }),
    getUserProfile: builder.query({
      query: () => '/user/profile',
    })
  }),
});

//export const { useLoginMutation } = authApi;
export const { useLoginMutation } = authApi;

