import React from "react";
import { Header, Container, Footer } from "./";

function Layout({ children }) {
  return (
    <React.Fragment>
      <Container>
        <Header />
      </Container>
      {children}
      <Container>
        <Footer />
      </Container>
    </React.Fragment>
  );
}

export default Layout;
