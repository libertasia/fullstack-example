import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types/type";

type InitialState = {
  loading: boolean;
  productDetail: Product[];
};

const initialState: InitialState = {
  loading: true,
  productDetail: [],
};

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {
    getProductData: (state, action: PayloadAction<Product[]>) => {
      state.productDetail = action.payload;
      state.loading = false;
    },
  },
});

export const productDetailActions = productDetailSlice.actions;
const productDetailReducer = productDetailSlice.reducer;
export default productDetailReducer;
