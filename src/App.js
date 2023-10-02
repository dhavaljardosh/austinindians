import React from "react";
import "./App.css";
import { HashRouter, Outlet } from "react-router-dom";
import Root from "./pages/Root";
import { GoogleOAuthProvider } from "@react-oauth/google";
import UserProvider from "./context/UserProvider";

const App = () => {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <HashRouter basename="/">
        <UserProvider>
          <Root />
        </UserProvider>
        <Outlet />
      </HashRouter>
    </GoogleOAuthProvider>
  );
};

export default App;
