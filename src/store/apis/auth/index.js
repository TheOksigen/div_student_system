import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { useCookies } from "react-cookie";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzUxMiJ9.eyJpc3MiOiJodHRwczovL2RpdmVycC5nbG9iYWxob3N0LmF6L2FwaS9hdXRoL2xvZ2luIiwiaWF0IjoxNzAzMDgwMDAxLCJleHAiOjE3MDMwODM2MDEsIm5iZiI6MTcwMzA4MDAwMSwianRpIjoiNUY1MTVJZVFySHpFcE9IaiIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.S4wwYFa0RUTrOVnPxP5HfWJsKoJbuCO4yM1929oKSHBfrY0mlXZSOwBU0SpFDLMae93XzsykmcRaZBYOIImtpfGGPekuVM9Tlr_e1PniXGSIy5nyL6b7XwOSvg-6fopO81s0pHiBOyvG14NlO0Kl1bgq1TZMHn8-s0uz_eqAB2_NGmHHcfD5AUgW2vgYg1IEcDrtDWpyh47_NFV32KHQP9qEj-u8yCSBbfhHgquBeKs5fWUGwCJK6UVpsu6xoqwp94HIH5C2UTzeyrPib826E5aA0Lhy_kGFU7kxqEzsGsPe_OTwOEcYeFzojY0VVJ4bskQx18fULc3MUDZTCG2UWYt_XhpVaY3XM-trlRz2cziWANVLOHHCSD5kIz_c4FMCgRjLWZaK2wnnUpllzGBUzu7U-kakcdUXhZMKrMMaEEbcadYv25YRKRSGgc7JOMvOlbO1BM8du6E-Nk3ZXkdL_WFLxVLTmmO2-RXTfCOWijiVMZ9wbIiayaTIc2zMQX5m8uXz6Zp4JI45HcqBYm9-ZN-SVGX1I4O-wLpYFdPU9WvI7vtrlDpuT7mFUns5XoC22fIe9x5l_42DNBoeMEvs0PRuppER1oDELwYGysgAd_AMbWef4u7v6V7eqcHtnxZ1itxGYs21T1QOgQFEtGDrTXx7j3Jqcu6b_QmF09fG2cE"
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
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
        const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzUxMiJ9.eyJpc3MiOiJodHRwczovL2RpdmVycC5nbG9iYWxob3N0LmF6L2FwaS9hdXRoL2xvZ2luIiwiaWF0IjoxNzAzMDgwMDAxLCJleHAiOjE3MDMwODM2MDEsIm5iZiI6MTcwMzA4MDAwMSwianRpIjoiNUY1MTVJZVFySHpFcE9IaiIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.S4wwYFa0RUTrOVnPxP5HfWJsKoJbuCO4yM1929oKSHBfrY0mlXZSOwBU0SpFDLMae93XzsykmcRaZBYOIImtpfGGPekuVM9Tlr_e1PniXGSIy5nyL6b7XwOSvg-6fopO81s0pHiBOyvG14NlO0Kl1bgq1TZMHn8-s0uz_eqAB2_NGmHHcfD5AUgW2vgYg1IEcDrtDWpyh47_NFV32KHQP9qEj-u8yCSBbfhHgquBeKs5fWUGwCJK6UVpsu6xoqwp94HIH5C2UTzeyrPib826E5aA0Lhy_kGFU7kxqEzsGsPe_OTwOEcYeFzojY0VVJ4bskQx18fULc3MUDZTCG2UWYt_XhpVaY3XM-trlRz2cziWANVLOHHCSD5kIz_c4FMCgRjLWZaK2wnnUpllzGBUzu7U-kakcdUXhZMKrMMaEEbcadYv25YRKRSGgc7JOMvOlbO1BM8du6E-Nk3ZXkdL_WFLxVLTmmO2-RXTfCOWijiVMZ9wbIiayaTIc2zMQX5m8uXz6Zp4JI45HcqBYm9-ZN-SVGX1I4O-wLpYFdPU9WvI7vtrlDpuT7mFUns5XoC22fIe9x5l_42DNBoeMEvs0PRuppER1oDELwYGysgAd_AMbWef4u7v6V7eqcHtnxZ1itxGYs21T1QOgQFEtGDrTXx7j3Jqcu6b_QmF09fG2cE"
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
