import React from "react";
import { Header } from "./";

function Layout({ children }) {
  return (
    <div className="container mx-auto px-6">
      <Header />
      {children}
    </div>
  );
}

export default Layout;
