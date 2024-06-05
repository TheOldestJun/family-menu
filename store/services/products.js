import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/products",
  }),
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "get-all",
      providesTags: ["Products"],
    }),
    addProduct: builder.mutation({
      query: (title) => ({
        url: "add",
        method: "POST",
        body: { title },
      }),
      invalidatesTags: ["Products"],
    }),
  }),
});

export const { useGetAllProductsQuery, useAddProductMutation } = productsApi;
