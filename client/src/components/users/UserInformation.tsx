import React, { useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";
import { TextField } from "@mui/material";
import axios from "axios";

export default function UserInformation() {
  const userDetail = useSelector(
    (state: RootState) => state.users.userInformation
  );

  console.log(userDetail, "detail");

  //update information
  const [newInformation, setNewInformation] = useState({
    firstName: userDetail?.firstName,
  });

  function getNewInformation(event: React.ChangeEvent<HTMLInputElement>) {
    setNewInformation({ ...newInformation, firstName: event.target.value });
  }

  function onEditHandler() {
    // send new information to backend + token
    const token = localStorage.getItem("userToken");
    const url = `http://localhost:8000/users/${userDetail?._id}`;
    axios
      .put(url, newInformation, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res, "new data");
        // refresh the page
      })
      .catch((error) => {
        if (error.response.status === 401) {
          // alert user
          alert("pls log in to change your information");
          return;
        }
      });
  }
  if (!userDetail) {
    return <div> no data ...</div>;
  }
  return (
    <div>
      <h1>User Information</h1>
      <p> {userDetail.email}</p>
      <p> {userDetail.firstName}</p>
      <TextField
        id="standard-basic"
        label="firstName"
        variant="standard"
        value={newInformation.firstName}
        onChange={getNewInformation}
      />

      <button onClick={onEditHandler}> Edit</button>
    </div>
  );
}
