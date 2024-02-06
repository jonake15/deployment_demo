import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

// Components imports
import CreateBook from "./components/CreateBook";
import ShowBookList from "./components/ShowBookList";
import ShowBookDetails from "./components/ShowBookDetails";
import UpdateBookInfo from "./components/UpdateBookInfo";

//House component imports
import Home from "./components/Home";
import Houses from "./components/Houses";
import House from "./components/House";
import ShowHouseDetails from "./components/ShowHouseDetails";
import ShowHouseList from "./components/ShowHouseList";
import Services from "./components/Services";

// Routes
const router = createBrowserRouter([
  { path: "/", element: <ShowBookList /> },
  { path: "/create-book", element: <CreateBook /> },
  { path: "/show-book/:id", element: <ShowBookDetails /> },
  { path: "/edit-book/:id", element: <UpdateBookInfo /> },
]);

//Routes
const houseRouter = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/show-house-list", element: <ShowHouseList /> },
  { path: "/show-house/:id", element: <ShowHouseDetails /> },
  { path: "/services", element: <Services /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={houseRouter} />
  </React.StrictMode>
);
