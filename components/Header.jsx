import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTransition, animated } from "react-spring";
import { FaBars, FaSearch } from "react-icons/fa";
import { MobileMenu, SearchTop } from "../components";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  const searchTransitions = useTransition(openSearch, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  const handleMenuToggle = () => {
    setOpenMenu(!openMenu);
  };

  const handleSearchToggle = () => {
    setOpenSearch(!openSearch);
  };

  return (
    <React.Fragment>
      {/* {searchTransitions((styles, item) => {
        return (
          item && (
            <animated.div style={styles}>
              <SearchTop
                openSearch={openSearch}
                handleSearchToggle={handleSearchToggle}
              />
            </animated.div>
          )
        );
      })} */}
      {openSearch && (
        <SearchTop
          openSearch={openSearch}
          handleSearchToggle={handleSearchToggle}
        />
      )}

      <MobileMenu openMenu={openMenu} handleMenuToggle={handleMenuToggle} />
      <header className=" bg-white z-10 top-0 px-0 border-b flex items-center justify-between sticky">
        <button onClick={handleMenuToggle} className="px-3 py-6 cursor-pointer">
          <FaBars />
        </button>
        <Link href="/">
          <div className="text-2xl cursor-pointer">
            <b>AF</b>SAMU
          </div>
        </Link>

        <div className="flex items-center justify-center">
          <button
            onClick={handleSearchToggle}
            className="px-3 py-6 cursor-pointer"
          >
            <FaSearch />
          </button>
        </div>
      </header>
    </React.Fragment>
  );
}

export default Header;
