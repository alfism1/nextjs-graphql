import React, { useEffect, useRef } from "react";
import { init } from "ityped";
import Link from "next/link"

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
      <p className="mt-8 text-center">Site is under development.</p>
      <Link href="/blog">
        <div
          role="button"
          className="p-2 text-center mt-3 mx-auto cursor-pointer rounded-full bg-green-200 border-2 border-green-500 w-40 transition-all duration-150 hover:scale-110"
        >
          Click here!
        </div>
      </Link>
    </div>
  );
}

export default Intro;
