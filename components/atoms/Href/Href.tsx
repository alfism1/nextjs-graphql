import React from "react";
import Link from "next/link";

type Props = {
  children?: any,
  slug?: string,
  originalUrl?: string
}
function Href({ children, slug, originalUrl }: Props) {
  return (
    <>
      {slug ? (
        <Link href={slug}>
          <div className="cursor-pointer">{children}</div>
        </Link>
      ) : (
        <a href={`${originalUrl}`} target="_blank" rel="noreferrer noopener">
          {children}
        </a>
      )}
    </>
  );
}

export default Href;
