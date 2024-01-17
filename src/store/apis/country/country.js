// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { baseQuery } from "../baseQuery";

export const countryApi = createApi({
  reducerPath: "countryApi",
  baseQuery,
  endpoints: (builder) => ({
    getCountries: builder.query({
      query: () => "/api/countries",
    }),
    postCountry: builder.mutation({
      query:(body)=>({
        url: "/api/countries",
        method: "POST",
        body: body,
      })
    }),
    deleteCountries: builder.mutation({
      query: (id) => ({
        url: `/api/countries/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["countries"],
    }),
  }),
});
export const { useGetCountriesQuery, usePostCountryMutation, useDeleteCountriesMutation } = countryApi;
