import React from "react";
import "./App.css";
import { HashRouter, Outlet, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";

function App() {
  return (
    <HashRouter basename="/">
      <Root />
      <Outlet />
    </HashRouter>
  );
}

export default App;
