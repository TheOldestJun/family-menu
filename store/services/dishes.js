import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const dishesApi = createApi({
  reducerPath: "dishesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/dishes",
  }),
  endpoints: (builder) => ({
    getDishesByCategory: builder.query({
      query: (url) => `get-by-category?url=${url}`,
    }),
  }),
});

export const { useGetDishesByCategoryQuery } = dishesApi;
