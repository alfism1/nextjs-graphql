import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Intro } from "../components/main_home";
import { Container } from "../components/templates/index";
import { connect } from "react-redux";
import { setInfo, setColor } from "../redux/actions/main";
// import Counter from "../features/counter/Counter"

function Home({ name, setInfo, setColor }) {
  const [newName, setName] = useState("");
  // const [newColor, setNewColor] = useState("");

  const getRandomColor = () => {
    let randomNumber = Math.floor(Math.random() * 7) + 1;
    switch (randomNumber) {
      case 1:
        return "bg-red-700";
      case 2:
        return "bg-green-700";
      case 3:
        return "bg-blue-700";
      case 4:
        return "bg-yellow-700";
      case 5:
        return "bg-orange-700";
      case 6:
        return "bg-cyan-700";

      default:
        return "bg-gray-700";
    }
  };

  const handleSubmit = () => {
    setInfo(newName);
    setColor(getRandomColor());
  };

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

      <div className="main_home">
        <Container>
          <>
            <div className="p-4 border my-4 rounded-md shadow-md">
              <div className="text-xl font-bold mb-2">Enter a name:</div>
              <div className="flex flex-row items-center w-full">
                <input
                  className="border rounded-l-md w-full px-3 py-1 md:py-2 outline-none"
                  type="text"
                  value={newName}
                  onChange={(e) => setName(e.target.value)}
                  onKeyPress={(e) => {
                    if (e.code == "Enter") handleSubmit();
                  }}
                />
                <button
                  className="border-r border-t border-b rounded-r-md px-3 py-1 md:py-2 bg-blue-900 active:bg-red-900 transition-all duration-150 text-white"
                  onClick={() => handleSubmit()}
                >
                  Submit
                </button>
              </div>
            </div>
            {/* <Counter /> */}
          </>

          <Intro />
        </Container>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    name: state.main.name,
    color: state.main.color,
  };
};

const mapDispatchToProps = {
  setInfo,
  setColor,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
