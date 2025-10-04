import React from "react";
import Navber from "../../Components/Header/Navber";
import { Outlet } from "react-router";
import Footer from "../../Components/Footer/Footer";

const Root = () => {
  return (
    <div>
      <Navber></Navber>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
