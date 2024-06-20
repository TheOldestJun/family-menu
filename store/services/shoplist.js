import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const shoplistApi = createApi({
  reducerPath: "shoplistApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api/shoplist",
  }),
  tagTypes: ["ShopList"],
  endpoints: (builder) => ({
    getShopList: builder.query({
      query: () => "get",
      providesTags: ["ShopList"],
    }),
    addItems: builder.mutation({
      query: (items) => ({
        url: "add",
        method: "POST",
        body: items,
      }),
      invalidatesTags: ["ShopList"],
    }),
    updateItems: builder.mutation({
      query: (id) => ({
        url: `update?id=${id}`,
        method: "PUT",
      }),
      onQueryStarted(id, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          api.util.updateQueryData("getShopList", id, (draft) => {
            Object.assign(draft, patch);
          })
        );
        queryFulfilled.catch(patchResult.undo);
      },
      invalidatesTags: ["ShopList"],
    }),
  }),
});

export const {
  useGetShopListQuery,
  useAddItemsMutation,
  useUpdateItemsMutation,
} = shoplistApi;
