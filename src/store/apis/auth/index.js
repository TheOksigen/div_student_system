import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";

const BASE_URL = 'https://diverp.globalhost.az/';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/api/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    getUserProfile: builder.query({
      query: () => '/user/profile',
    }),
    // ... other endpoints
  }),
});
