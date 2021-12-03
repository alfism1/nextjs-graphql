import React, { useRef, useState } from "react";
import Logo from "./logo";
import styles from "./Header.module.scss";
import MobileMenu from "../MobileMenu"

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const navRef = useRef();

  const handleOpenMenu = () => {
    const el = navRef.current;
    setOpenMenu(!openMenu);
    if (!openMenu) {
      el.classList.remove(`${styles.noactive}`);
      el.classList.add(`${styles.active}`);
      document.querySelector("body").classList.add("overflow-hidden")

    } else {
      el.classList.remove(`${styles.active}`);
      el.classList.add(`${styles.noactive}`);
      document.querySelector("body").classList.remove("overflow-hidden")

    }
  };
  return (
    <React.Fragment>
      <header
        className={`flex flex-row justify-between items-center shadow-md z-10 border-b ${styles.header}`}
      >
        <div className="w-14 p-1.5 mx-4">
          <Logo />
        </div>
        <div
          aria-label={openMenu ? "Close menu" : "Open menu"}
          ref={navRef}
          onClick={handleOpenMenu}
          role="button"
          className={`cursor-pointer flex items-center justify-center p-2 w-9 h-9 mr-4 rounded-full hover:bg-gray-100 active:scale-95 transition-all duration-150 ${styles.nav}`}
        >
          <div className={`${styles.hamburger}`}>
            <span />
            <span />
            <span />
          </div>
        </div>
      </header>

      <MobileMenu open={openMenu} />
    </React.Fragment>
  );
}

export default Header;
