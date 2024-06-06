import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { productsApi } from "./services/products";
import { categoriesApi } from "./services/categories";
import shopListReducers from "./reducers/shopListSlice";
import loginReducers from "./reducers/loginSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      shopList: shopListReducers,
      login: loginReducers,
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
