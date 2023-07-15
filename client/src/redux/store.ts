import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./slices/products";
import productDetailReducer from "./slices/productDetail";

const store = configureStore({
  reducer: {
    products: productReducer,
    productDetail: productDetailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
