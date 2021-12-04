import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Logo from "./logo";
import styles from "./Header.module.scss";
import MobileMenu from "../MobileMenu";
import { FaMapMarkerAlt } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  const navRef = useRef();

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });
  useEffect(() => {
    setIsMobile(isTabletOrMobile);
  });

  const handleOpenMenu = () => {
    const el = navRef.current;
    setOpenMenu(!openMenu);
    if (!openMenu) {
      el.classList.remove(`${styles.noactive}`);
      el.classList.add(`${styles.active}`);
      document.querySelector("body").classList.add("overflow-hidden");
    } else {
      el.classList.remove(`${styles.active}`);
      el.classList.add(`${styles.noactive}`);
      document.querySelector("body").classList.remove("overflow-hidden");
    }
  };
  return (
    <React.Fragment>
      <header className={`shadow-md z-10 border-b`}>
        <div
          className={`container mx-auto flex flex-row justify-between md:justify-start md:gap-2 items-center z-10 border-b ${styles.header}`}
        >
          <div className="w-14 md:w-16 p-1.5 mx-0 md:mx-4">
            <Logo />
          </div>

          {!isMobile && (
            <div className="flex justify-between flex-grow mr-4">
              <div className="flex items-center gap-6 uppercase text-base font-semibold text-green-900">
                <Link href="/">
                  <a>Back to Homepage</a>
                </Link>
              </div>

              <div className="flex items-center justify-center gap-3">
                <div className="flex items-center justify-start">
                  <FaMapMarkerAlt />
                  <span className="text-sm font-bold ml-3">Find a store</span>
                </div>
                <button className="border rounded-3xl text-sm font-semibold px-3 py-1.5">
                  Sign in
                </button>
                <button className="border rounded-3xl text-sm font-semibold px-3 py-1.5 bg-black text-white">
                  Join now
                </button>
              </div>
            </div>
          )}

          {isMobile && (
            <>
              <Link href="/">
                <a>Back to Homepage</a>
              </Link>
              <div
                aria-label={openMenu ? "Close menu" : "Open menu"}
                ref={navRef}
                onClick={handleOpenMenu}
                role="button"
                className={`cursor-pointer flex items-center justify-center p-2 w-9 h-9 mr-4 md:mr-0 rounded-full hover:bg-gray-100 active:scale-95 transition-all duration-150 ${styles.nav}`}
              >
                <div className={`${styles.hamburger}`}>
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </>
          )}
        </div>
      </header>

      {isMobile && <MobileMenu open={openMenu} />}
    </React.Fragment>
  );
}

export default Header;
