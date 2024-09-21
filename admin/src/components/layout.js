import React from "react";
import { Outlet } from "react-router-dom";
import { Dashboard, SideBar } from "./allcompo";

function Layout() {
  return (
    <>
      <SideBar />
      <Outlet />
    </>
  );
}

export default Layout;
