import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaBars, FaSearch } from "react-icons/fa";
import { MobileMenu, SearchTop } from "../components";
import { getCategories } from "../services";
import { useMediaQuery } from "react-responsive";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res);
    });
  }, []);

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const handleMenuToggle = () => {
    setOpenMenu(!openMenu);
  };

  const handleSearchToggle = () => {
    setOpenSearch(!openSearch);
  };

  return (
    <React.Fragment>
      {openSearch && (
        <SearchTop
          openSearch={openSearch}
          handleSearchToggle={handleSearchToggle}
        />
      )}
      <MobileMenu openMenu={openMenu} handleMenuToggle={handleMenuToggle} />

      <header className=" bg-white z-10 top-0 px-0 flex items-center justify-between sticky">
        <div className="flex flex-row items-center">
          <button
            onClick={handleMenuToggle}
            className="px-3 py-6 cursor-pointer"
          >
            <FaBars />
          </button>
          <Link href="/">
            <div className="text-2xl cursor-pointer mx-8">
              <b>AF</b>SAMU
            </div>
          </Link>

          {!isTabletOrMobile && (
            <div className="flex flex-row border-l">
              {categories.map((c) => (
                <Link key={c.name} href={`category/${c.slug}`}>
                  <a
                    style={{
                      borderBottom: `3px solid ${
                        c?.boxColor?.hex ? c.boxColor.hex : "gray"
                      }`,
                    }}
                    className="p-4 cursor-pointer block border-b border-r"
                  >
                    {c.name}
                  </a>
                </Link>
              ))}
            </div>
          )}
        </div>

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
