import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Header.module.scss"
import { FaBars, FaSearch } from "react-icons/fa";
import { Container } from "../../templates"
import { SearchTop } from "../../molecules";
import { MobileMenu } from "../../organisms";
import { getCategories } from "../../../services/index";
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
    <div className="bg-white z-10 top-0 sticky">
      <Container>
        {openSearch && (
          <SearchTop
            openSearch={openSearch}
            handleSearchToggle={handleSearchToggle}
          />
        )}
        <MobileMenu openMenu={openMenu} handleMenuToggle={handleMenuToggle} />

        <div className="px-0 flex items-center justify-between">
          <div className="flex flex-row items-center">
            <div role="button"
              onClick={handleMenuToggle}
              className="px-3 py-6 cursor-pointer"
            >
              <FaBars />
            </div>
            <Link href="/blog">
              <div className="text-2xl cursor-pointer mx-2 md:mx-5">
                <b>AF</b>SAMU
                <sub className="text-xs">blog</sub>
              </div>
            </Link>

            {!isTabletOrMobile && (
              <div className="flex flex-row gap-2">
                {categories.map((c) => (
                  <Link key={c.name} href={`category/${c.slug}`}>
                    <a
                      style={{
                        border: `2px solid ${
                          c?.boxColor?.hex ? c.boxColor.hex : "gray"
                        }`,
                      }}
                      className={`cursor-pointer rounded-full px-3 py-1 text-sm text-black ${styles.category_link}`}
                    >
                      {c.name}
                    </a>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center justify-center">
            <div role="button"
              onClick={handleSearchToggle}
              className="px-3 py-6 cursor-pointer"
            >
              <FaSearch />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
