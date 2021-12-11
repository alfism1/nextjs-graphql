import React, { useEffect, useRef } from "react";
import { init } from "ityped";
import Card from "../reusable/Card";

function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "Next JS",
        "Typescript",
        "GraphQL",
        "Tailwind",
        "SCSS",
        "Vercel",
      ],
    });
  }, []);
  return (
    <div className="py-4">
      Hello there, it's me,
      <h1 className="font-bold text-2xl my-1">Alfi Samudro Mulyo,</h1>a Software
      Engineer.
      <p className="mt-6">
        Here is my playground to explore any new tech stack.
      </p>
      <p className="mt-6">
        This site built with: <br />
        <span className="font-bold" ref={textRef} />
      </p>
      <p className="mt-8 mb-5 text-center font-bold">Check my portfolios</p>
      <div className="grid grid-cols-12 gap-0 md:gap-6 gap-y-6 w-full">
        <Card
          title="Built-in Blog"
          tag="Original"
          color="green"
          description="a simple Blog in this project which created using Typescript as the FE code, GraphCMS for content management, GraphQL for data communication, AddThis for share button"
          project_slug="/blog"
          github_url="https://github.com/alfism1/nextjs-graphql/tree/master/pages/blog"
        />
        <Card
          title="Amazon Clone"
          tag="Clone"
          color="red"
          description="Superb amazon clone. Fully functionality, Fully responsive. Built with React JS, firebase, use Stripe for the payment gateway"
          project_slug="https://challenge-c05bd.web.app/"
          github_url="https://github.com/alfism1/amazon-clone"
        />
        <Card
          title="Starbucks Clone"
          tag="Clone"
          color="red"
          description="Starbuck landing page clone. Built in this project using Next JS and tailwindcss for styling. All assets belongs to starbucks.com"
          project_slug="/starbucks"
          github_url="https://github.com/alfism1/nextjs-graphql/tree/starbucks"
        />
        <Card
          title="Netflix Clone"
          tag="Clone"
          color="green"
          description="Netflix fully feature clone. Using pure React JS, react router 6, styled components, firebase with fully feature such as login, sign up, auth checking, and many more."
          project_slug="https://netflix-clone-55021.web.app"
          github_url="https://github.com/alfism1/netflix-clone"
        />
      </div>
    </div>
  );
}

export default Intro;
