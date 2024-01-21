import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function Layout() {
  return (
    <div className="customscrollbar h-screen w-screen overflow-auto">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default Layout;
