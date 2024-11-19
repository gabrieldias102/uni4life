import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import ConnectionsPage from "./app/pages/ConnectionsPage";
import CreatePostMobile from "./app/pages/CreatePostMobile";
import HomePage from "./app/pages/HomePage";
import ProfilePage from "./app/pages/ProfilePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "Profile",
    element: <ProfilePage />,
  },
  {
    path: "Connections",
    element: <ConnectionsPage />,
  },
  {
    path: "CreatePost",
    element: <CreatePostMobile />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
