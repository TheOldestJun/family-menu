import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "./services/products";
import { categoriesApi } from "./services/categories";
import shopListReducers from "./reducers/shopListSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      shopList: shopListReducers,
      [productsApi.reducerPath]: productsApi.reducer,
      [categoriesApi.reducerPath]: categoriesApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat([
        productsApi.middleware,
        categoriesApi.middleware,
      ]),
  });
  setupListeners(store.dispatch);
};
