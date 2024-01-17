import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./../baseQuery";
export const contactTypesApi = createApi({
  reducerPath: "contactTypesApi",
  baseQuery,
  tagTypes: ["contactTypes"],
  endpoints: (builder) => ({
    getContactTypes: builder.query({
      query: () => "/api/contact-types",
      invalidatesTags: ["contactTypes"]
    }),
    postContactTypes: builder.mutation({
      query: (body) => ({
        url: "/api/contact-types",
        method: "POST",
        body: body,
      }),
    }),
    deleteContactTypes: builder.mutation({
      query: (id) => ({
        url: `/api/contact-types/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["contactTypes"],
    }),
  }),
});
export const { useGetContactTypesQuery, usePostContactTypesMutation, useDeleteContactTypesMutation } = contactTypesApi;
