import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useCookies } from "react-cookie";
import { baseQuery } from "../baseQuery";

// const BASE_URL = import.meta.env.VITE_BASE_URL;

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: '/api/auth/login',
        method: 'POST',
        body
      })
    }),
    loginRefresh: builder.mutation({
      query: (body) => ({
        url: "/api/auth/refresh",
        method: 'POST',
        body
      }),

      onQueryStarted: async (arg) => {
        const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzUxMiJ9.eyJpc3MiOiJodHRwczovL2RpdmVycC5nbG9iYWxob3N0LmF6L2FwaS9hdXRoL2xvZ2luIiwiaWF0IjoxNzA1NDg0OTU2LCJleHAiOjE3MDU0ODg1NTYsIm5iZiI6MTcwNTQ4NDk1NiwianRpIjoiU2xHMWtXWVl0UUJSdU9BSSIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.cr83_GkgHFYyVJj4nxmut0ejLHLO0lX4qbgZBkflDo8hPA5v-Xt8inSF8v6GRtMx_P-ol92WWSk40ktIDy8Jx2EVnm7ZNcPRz2cx8p2IFbVhNbtTvVhVv2rG13_gQ9Uw4xFVKwydlRP14IStqYy82uPUN9vh38p5hHUYDaU6oCsgSd5ntKhplINXiZsKL8-bpDhVclVaoZV1NbBa9edpQp6vhYv9a_3Vgc9n3NP8yPMbDNld1s4ZWluT6y_guUFkSKC29Ds2-stPlmH3jo635uXa958vEDRtqC_spI6XLZHywjGJxa2IQMEw8TbUdjrpbEevbssjJxiQ0eydtsiGiChznC8QaGLUXVv_f8Unp9eSW9Aq0NKhWJW53QeZU1hgAzHJ8KGaHtaYF2O8kLv6j1j8qXyli82i7KV4AX46BpBdY30rCVeK9y3TRHO-t7fuocuFMiQdqncaVpvwAeuClXRi8qNIgY-IjpBWprg1-rbXpqf61V2Ag-pdfKa7iuV0HfQPIP2CqH3TMXA3QM2czgve3q2N55O4q3j4zLMJee3Wto3uVshQw4YoeAD7SNY3YfaomvVeU_0_OTmUSi6f03DwkwS5mn6DGgrFC1haKSEkNIao1N6PIBB8eCu66Le9G5VgSHwENKVAYp4U-e4W7WcBkKy1szXYHs4IonusejQ"
        if (typeof arg === 'object') {
          arg.headers = {
            ...arg.headers,
            Authorization: `Bearer ${token}`
          };
        }
      }
    })
    
  })
});

export const { useLoginMutation, useLoginRefreshMutation } = authApi;
