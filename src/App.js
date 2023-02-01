import React from "react";
import "./App.css";
import { HashRouter, Outlet, RouterProvider } from "react-router-dom";
import Root from "./pages/Root";

function App() {
  return (
    <HashRouter>
      <Root />
      <Outlet />
    </HashRouter>
  );
}

export default App;
