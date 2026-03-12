import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import PrivateRoute from "./app/components/PrivateRoute";
import ConnectionsPage from "./app/pages/ConnectionsPage";
import CreatePostMobile from "./app/pages/CreatePostMobile";
import HomePage from "./app/pages/HomePage";
import Login from "./app/pages/Login";
import ProfilePage from "./app/pages/ProfilePage";
import Register from "./app/pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <HomePage />
      </PrivateRoute>
    ),
  },
  {
    path: "Profile",
    element: (
      <PrivateRoute>
        <ProfilePage />
      </PrivateRoute>
    ),
  },
  {
    path: "Connections",
    element: (
      <PrivateRoute>
        <ConnectionsPage />
      </PrivateRoute>
    ),
  },
  {
    path: "CreatePost",
    element: (
      <PrivateRoute>
        <CreatePostMobile />
      </PrivateRoute>
    ),
  },
  {
    path: "Login",
    element: <Login />,
  },
  {
    path: "Register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
