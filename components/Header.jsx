import React, { useEffect, useRef, useState } from "react";

import Link from "next/link";

import { getCategories } from "../services";

function Header() {
  const [categories, setCategories] = useState([]);
  const [open, setOpen] = useState(false);

  const ref = useRef();

  useEffect(() => {
    getCategories().then((res) => setCategories(res));

    // resize handler for dropdown menu
    window.addEventListener("resize", () => {
      const { innerWidth: width } = window;
      if (width > 767) {
        setOpen(false);
      }
    });
  }, []);

  useEffect(() => {
    // check if click outside
    const checkIfClickedOutside = (e) => {
      if (open && ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", checkIfClickedOutside);


  }, [open]);

  const handleToggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="container mx-auto px-4 md:px-10 bg-white">
      <div className="border-b sticky top-0 py-4 md:py-8 mb-8">
        <div className="w-full relative flex justify-between items-center">
          <div className="md:float-left inline-block">
            <Link href="/">
              <span className="cursor-pointer font-semibold text-2xl text-black">
                aFsamu
              </span>
            </Link>
          </div>
          <div className="hidden md:block">
            {categories.map((category) => (
              <Link key={category.slug} href={`/category/${category.slug}`}>
                <span className="md:float-right mt-2 align-middle text-black ml-4 font-semibold cursor-pointer">
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
          <div className="flex items-center md:hidden">
            <button
              className="outline-none mobile-menu-button"
              onClick={handleToggleOpen}
            >
              <svg
                className=" w-8 h-8 text-black  hover:bg-gray-200 rounded-full p-1 transition duration-200"
                x-show="!showMenu"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
        {open && (
          <div
            ref={ref}
            className="w-full absolute border-t-2 shadow-2xl border-red-500 rounded-b-lg bg-white top-16"
          >
            <div className="flex flex-col">
              {categories.map((category) => (
                <Link key={category.slug} href={`/category/${category.slug}`}>
                  <span
                    className="cursor-pointer p-3 text-center font-semibold border-t"
                    onClick={handleToggleOpen}
                  >
                    {category.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
