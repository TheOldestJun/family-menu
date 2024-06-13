import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/categories",
  }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "get-all",
    }),
    getCategory: builder.query({
      query: (url) => `get-info?url=${url}`,
    }),
  }),
});

export const { useGetCategoriesQuery, useGetCategoryQuery } = categoriesApi;
