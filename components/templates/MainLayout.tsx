import React, { ReactNode } from "react";
import Head from "next/head";
import { Header } from "../main_home/";

type Props = {
  children: ReactNode;
};

function MainLayout({ children }: Props) {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      {children}
    </div>
  );
}

export default MainLayout;
