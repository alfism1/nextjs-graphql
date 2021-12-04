import React, { ReactNode } from "react";
import Head from "next/head";
import { Header, Footer } from "../starbucks/";

type Props = {
  children: ReactNode;
};

function StarbucksLayout({ children }: Props) {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
}

export default StarbucksLayout;
