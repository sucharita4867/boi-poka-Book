import React, { StrictMode } from "react";

import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import BookDetails from "../Pages/BookDetails/BookDetails";
import ReadList from "../Pages/ReadList/ReadList";
const lodeData = async () => {
  const response = await fetch(
    "https://raw.githubusercontent.com/ProgrammingHero1/boi-poka-Book-Vibe-Resources/refs/heads/main/data/booksData.json"
  );
  const data = await response.json();
  return data;
};

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: lodeData,
        Component: Home,
      },
      {
        path: "/About",
        Component: About,
      },
      {
        path: "/bookDetails/:id",
        Component: BookDetails,
        loader: lodeData,
      },
      {
        path: "readList",
        loader: lodeData,
        Component: ReadList,
      },
    ],
  },
]);
