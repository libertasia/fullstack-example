import React, { useState } from "react";
import axios from "axios";
import { Button, TextField } from "@mui/material";

export default function Form() {
  // get user information: email +password
  const [userInformation, setUserInformation] = useState({
    email: "",
    password: "",
  });

  function getUserEmail(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInformation({ ...userInformation, email: event.target.value });
  }

  function getUserPassword(event: React.ChangeEvent<HTMLInputElement>) {
    setUserInformation({ ...userInformation, password: event.target.value });
  }

  console.log(userInformation, "user information");

  function onClickHandler() {
    // send data to server
    // axios
    // endpoint: http://localhost:8000/users
    // method: post

    const endpoint = "http://localhost:8000/users";

    axios
      .post(endpoint, userInformation)
      .then((random) => console.log(random.data))
      .catch((error) => console.log(error));
  }
  // get method
  return (
    <div>
      Form
      <TextField
        id="standard-basic"
        label="Email"
        variant="standard"
        onChange={getUserEmail}
      />
      <TextField
        id="standard-basic"
        label="Password"
        variant="standard"
        onChange={getUserPassword}
      />
      <Button onClick={onClickHandler}>Submit</Button>
    </div>
  );
}
