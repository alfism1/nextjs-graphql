import React from "react";
import Head from "next/head";
import { Intro, Header } from "../components/main_home";
import { Container } from "../components/templates/index";

function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>Afsamu - Personal website built with modern tech stack</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Hello. I'm Alfi, a software Engineer. Welcome to my personal website that I create using up to date stack. This site built with NextJS as a Frontend, GraphCMS as the Content management, and GraphQL as the data communication."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="abstract"
          content="Not only personal web, you can find any interesting topic from world wide."
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Person",
              name: "Alfi Samudro Mulyo",
              image:
                "https://media-exp1.licdn.com/dms/image/C5103AQFd29ZeLU5K8g/profile-displayphoto-shrink_200_200/0/1560862454964?e=1643241600&v=beta&t=ftQot08lIY7rUye8d_skgZKMhekDwTLdFVPzozQc9kI",
              jobTitle: "Fullstack developer, Programmer, Software Engineer",
              url: "https://www.afsamu.com/",
              sameAs: [
                "https://www.facebook.com/alfi.samudro/",
                "https://www.linkedin.com/in/alfi-samudro-058b1910a/",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Edgeprop Singapore",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Malang",
                addressRegion: "East Java",
                postalCode: "65163",
                streetAddress: "Wijaya Kusuma - Cepokomulyo - Kepanjen",
              },
              email: "mailto:alfialfarisi@gmail.com",
              telephone: "(+62)82339803192)",
            }),
          }}
        />
      </Head>

<<<<<<< HEAD
      <div className="main_home">
=======
      <div className="main_home w-screen h-screen">
>>>>>>> e9e441c1c2c7798e32903f5af7f36cde6b7bc29a
        <Container>
          <Intro />
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Home;
