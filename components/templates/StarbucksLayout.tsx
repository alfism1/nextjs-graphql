import React, { ReactNode } from "react";
import Head from "next/head";
import { Header } from "../starbucks/";

type Props = {
  children: ReactNode;
};

function StarbucksLayout({ children }: Props) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default StarbucksLayout;
