import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import styles from "./SubMenu.module.scss";

function SubMenu({ open, handleOpenSubMenu }) {
  return (
    <>
      <div
        className={`bg-white shadow-inner z-30 ${open && styles.active} ${
          styles.sub_menu
        }`}
      >
        <div onClick={() => handleOpenSubMenu()} className="text-center cursor-pointer px-8 py-4 bg-gray-50 flex flex-row items-center justify-center">
          <FaChevronLeft />
          <span className="flex-1">Menu</span>
        </div>
        <ul className={`border-b p-8 pt-0 flex-1 ${styles.menu_ul}`}>
          <li>
            <button>All products</button>
          </li>
          <li>
            <button>Featured</button>
          </li>
          <li>
            <button>Previous Orders</button>
          </li>
          <li>
            <button>Favorite Products</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SubMenu;
