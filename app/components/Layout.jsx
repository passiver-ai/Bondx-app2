import React from "react";
import BottomNavigationBar from "./BottomNavigationBar";

const Layout = ({ children, showBottomBar }) => {
  return (
    <div className="h-full w-full">
      {children}
      {showBottomBar && <BottomNavigationBar />}
    </div>
  );
};

export default Layout;
