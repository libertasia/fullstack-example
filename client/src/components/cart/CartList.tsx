import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import axios from "axios";
import { baseURL } from "../../util";

export default function CartList() {
  const cartList = useSelector((state: RootState) => state.cart.cartList);
  const userDetail = useSelector((state: RootState) => state.users.userInformation);

  const total = cartList.reduce<number>((accumulator, current) => {
    const productTotal = current.price * current.quantity;
    return accumulator + productTotal;
  }, 0);

  function onClickHandler() {
    // send data to backend
    const token = localStorage.getItem("userToken");

    const url = `${baseURL}/users/${userDetail?._id}`;
    axios
      .put(url, cartList, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res, "new data");
        if (res.status === 200) {
          // a message
          alert("Thanks for shopping with us");
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          // alert user
          alert("pls log in to make order");
          return;
        }
      });
  }

  return (
    <div>
      <h1> Your Cart List</h1>
      <div className="cartList">
        {cartList.map((item) => {
          return <div>{item.title} </div>;
        })}
      </div>
      <h3> Total:{total} </h3>
      <div>
        <button onClick={onClickHandler}>Check out</button>
      </div>
    </div>
  );
}
