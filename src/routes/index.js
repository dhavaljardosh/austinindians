import * as React from "react";
import { createHashRouter } from "react-router-dom";

import Events from "../pages/Events";
import NoMatch from "../pages/NoMatch";
import LandingPage from "../pages/LandingPage";
import Gallery from "../pages/Gallery";
import Root from "../pages/Root";

const router = createHashRouter([
  {
    path: "/",

    element: <Root />,
    errorElement: <NoMatch />,
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
    ],
  },
]);

export default router;
