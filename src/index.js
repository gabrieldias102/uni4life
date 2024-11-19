import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./routes/HomePage";
import ProfilePage from "./routes/ProfilePage";
import ConnectionsPage from "./routes/ConnectionsPage";
import CreatePostMobile from "./routes/CreatePostMobile"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>
  },
  {
    path: "Profile",
    element: <ProfilePage/>
  },
  {
    path: "Connections",
    element: <ConnectionsPage/>
  },
  {
    path: "CreatePost",
    element: <CreatePostMobile/>
  },
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
