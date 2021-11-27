import React from 'react';
import Link from "next/link"

function MainLayout(props) {
  return (
    <div>
      Welcome to our channles!
      <Link href="/blog">Click Blog</Link>
    </div>
  );
}

export default MainLayout;