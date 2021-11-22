import React from "react";
import Link from "next/link";

function Href({ children, slug, originalUrl }) {
  return (
    <>
      {slug ? (
        <Link href={slug}>
          <div className="cursor-pointer">{children}</div>
        </Link>
      ) : (
        <a href={`${originalUrl}`} target="_blank">
          {children}
        </a>
      )}
    </>
  );
}

export default Href;
