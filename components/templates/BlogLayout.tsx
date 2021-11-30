import React, { ReactNode } from "react";
import { Header, Footer } from "../blog/organisms";
import Container from "./Container";

type Props = {
  children?: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Container>
        <Footer />
      </Container>
    </React.Fragment>
  );
}

export default Layout;
