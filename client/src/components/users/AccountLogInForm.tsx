import React, { useState } from "react";
import axios from "axios";
import { Button, TextField } from "@mui/material";

export default function AccountLogInForm() {
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

  function onClickHandler() {
    const endpoint = "http://localhost:8000/users/login";

    axios
      .post(endpoint, userInformation)
      .then((random) => console.log(random.data))
      .catch((error) => console.log(error));
  }
  return (
    <div>
      AccountLogInForm Form
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
      <Button onClick={onClickHandler}>Log in</Button>
    </div>
  );
}
