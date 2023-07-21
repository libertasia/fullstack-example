import { AppDispatch } from "../store";
import { productActions } from "../slices/products";
import { productDetailActions } from "../slices/productDetail";
import { baseURL } from "../../util";

export function fetchProductData() {
  const productUrl = `${baseURL}/products`;
  return async (dispatch: AppDispatch) => {
    // axios or fetch
    const response = await fetch(productUrl);
    const productData = await response.json();
    dispatch(productActions.getProductData(productData));
  };
}

export function fetchProductDetail(productId: string) {
  const productDetailUrl = `${baseURL}/products/${productId}`;
  return async (dispatch: AppDispatch) => {
    const response = await fetch(productDetailUrl);
    const productDetailData = await response.json();
    dispatch(productDetailActions.getProductDetail(productDetailData));
  };
}
