import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./routes/HomePage";
import ProfilePage from "./routes/ProfilePage"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "Profile",
    element: <ProfilePage/>
  },
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
