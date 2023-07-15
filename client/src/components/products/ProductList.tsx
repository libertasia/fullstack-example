import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../redux/store";
import { fetchProductData } from "../../redux/thunks/products";
import { Link } from "react-router-dom";

export default function ProductList() {
  const productList = useSelector(
    (state: RootState) => state.products.products
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProductData());
  }, []);

  return (
    <div>
      <h1>ProductList</h1>
      {productList.map((product) => {
        return (
          <div key={product._id}>
            <p>{product.title}</p>
            <Link to={`${product._id}`}>
              <button> More detail</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
