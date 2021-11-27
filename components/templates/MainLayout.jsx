import React from "react";
import Link from "next/link";

function MainLayout(props) {
  return (
    <div className="flex h-screen flex-col justify-center items-center">
      <h1>Under maintenance!</h1>
      <Link href="/blog">
        <div className="block bg-green-200 rounded-full border-2 border-green-500 px-3 py-1 mt-3 transition-all duration-150 hover:scale-110" role="button">Click here</div>
      </Link>
    </div>
  );
}

export default MainLayout;
