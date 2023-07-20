import { configureStore } from "@reduxjs/toolkit";

import productReducer from "./slices/products";
import productDetailReducer from "./slices/productDetail";
import userReducer from "./slices/user";
import orderReducer from "./slices/orders";
import cartReducer from "./slices/carts";

const store = configureStore({
  reducer: {
    products: productReducer,
    productDetail: productDetailReducer,
    users: userReducer,
    cart: cartReducer,
    order: orderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
