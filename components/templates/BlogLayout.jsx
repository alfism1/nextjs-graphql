import React from "react";
import { Header, Footer } from "@/blog/components/organisms/";
import { Container } from "components/templates/";
// import Container from "@/components/organisms/Container/Container";
// import Footer from "@/components/organisms/Footer/Footer";

function Layout({ children }) {
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
