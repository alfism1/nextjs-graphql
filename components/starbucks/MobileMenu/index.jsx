import React from "react";
import styles from "./MobileMenu.module.scss";
import { FaChevronRight, FaMapMarkerAlt } from "react-icons/fa";

function MobileMenu({ open }) {
  return (
    <>
      <div
        className={`bg-black fixed w-screen h-screen z-20 ${
          open && styles.active
        } ${styles.block_black}`}
      />

      <div
        className={`bg-white shadow-inner p-8 z-30 ${open && styles.active} ${
          styles.mobile_menu
        }`}
      >
        <ul className={`border-b pb-8 ${styles.menu_ul}`}>
          <li>
            <button>Menu</button>
            <FaChevronRight />
          </li>
          <li>
            <button>Rewards</button>
          </li>
          <li>
            <button>Gift Cards</button>
          </li>
        </ul>
        <div className="flex gap-3">
          <button className="border rounded-3xl text-sm font-semibold px-3 py-1.5 mt-6">
            Sign in
          </button>
          <button className="border rounded-3xl text-sm font-semibold px-3 py-1.5 mt-6 bg-black text-white">
            Join now
          </button>
        </div>
        <div className="flex items-center justify-start mt-6 ">
          <FaMapMarkerAlt />
          <span className="text-sm font-bold ml-3">Find a store</span>
        </div>
      </div>
    </>
  );
}

export default MobileMenu;
