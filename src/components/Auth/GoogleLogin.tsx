import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import axios from "axios";
import { UserContext } from "../../context/UserProvider";

const responseGoogle = (response: any, setOpen: any, login: any) => {
  const userObject: any = jwt_decode(response.credential);

  const { given_name, family_name, picture = null, email } = userObject;
  const doc = {
    username: email,
    email: email,
    profileImage: picture,
    firstName: given_name,
    lastName: family_name,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  };
  axios
    .post("http://localhost:3001/api/users/signin", {
      ...doc,
    })
    .then(function (response) {
      login({
        user: response.data.data,
      });
      alert("Logged in");
      setTimeout(() => setOpen(false), 1000);
    })
    .catch(function (error) {
      console.log(error);
    });
};

const GoogleLoginButton = ({ setOpen }: any) => {
  const { login } = React.useContext(UserContext);
  return (
    <GoogleLogin
      onSuccess={(res) => responseGoogle(res, setOpen, login)}
      onError={() => {
        console.log("Login Failed");
      }}
    />
  );
};

export default GoogleLoginButton;
