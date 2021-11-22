import React from "react";
import { FaTimes } from "react-icons/fa";

function SearchTop({ openSearch, handleSearchToggle }) {
  // const [openSearch, setOpenSearch] = useCycle(false, true);
  return (
    <div className="sticky top-0 z-20">
      <div className="relative w-full">
        <div className="border-b lg:border-l w-full lg:w-96 absolute top-0 left-0 lg:left-auto right-0 bg-white flex justify-between items-center">
          <input
            type="text"
            name="search"
            id="search"
            className="w-full py-5 px-3 outline-none"
            placeholder="Search your stuff here"
          />

          <button
            onClick={handleSearchToggle}
            className="float-left px-3 cursor-pointer"
          >
            <FaTimes />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchTop;
