import React, { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.scss";
import { Container } from "../../templates";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="bg-gray-800 py-3 sticky top-0">
      <Container>
        <div className="flex flex-row items-center gap-3">
          <div onClick={() => {setOpenMenu(!openMenu)}} className={`${styles.nav} ${openMenu ? styles.active : styles.noactive} cursor-pointer p-2 rounded-full active:bg-gray-700 transition-all duration-100`}>
            <div role="button" className={`${styles.hamburger}`}>
              <span />
              <span />
              <span />
            </div>
          </div>

          <Link href="/">
            <div className="text-2xl text-white cursor-pointer mx-2 md:mx-5">
              <b>AF</b>SAMU
            </div>
          </Link>
        </div>
      </Container>
    </header>
  );
}

export default Header;
