import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../baseQuery";
export const sexesApi = createApi({
  reducerPath: "sexesApi",
  baseQuery,
  endpoints: (builder) => ({
    getSexes: builder.query({
      query: () => "/api/sexes",
    }),
 
  postSexes: builder.mutation({
    query: (body) => ({
      url: "/api/sexes",
      method: "POST",
      body: body,
    }),
  }),
  deleteSexes: builder.mutation({
    query: (id) => ({
      url: `sexes/${id}`,
      method: "DELETE",
    }),
    invalidatesTags: ["sexes"],
  }),
  //   endpoints urlde slashdan sonrasidi
}),
});
export const { useGetSexesQuery, usePostSexesMutation, useDeleteSexesMutation } = sexesApi;
