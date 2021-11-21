import React from "react";
import { Header } from "./";

function Layout({ children }) {
  return (
    <>
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      {children}
    </>
  );
}

export default Layout;
