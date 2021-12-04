import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import styles from "./MenuItem.module.scss";

function MenuItem({ label, items }) {
  const [openItem, setOpenItem] = useState(false);

  return (
    <React.Fragment>
      <div
        role="button"
        className={`
          cursor-pointer flex flex-row items-center justify-between py-5
          ${styles.dropdown_button}
          ${openItem && styles.active}
        `}
        onClick={() => setOpenItem(!openItem)}
      >
        <span>{label}</span>
        <FaChevronDown className={styles.arrow} />
      </div>

      <div
        className={`
          ${styles.dropdown_item}
          ${openItem && styles.active}
          relative
          overflow-hidden
        `}
      >
        <ul className="inline-block">
          {items?.map((item, i) => (
            <li key={i} className="text-sm text-gray-600 py-2.5">
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}

export default MenuItem;
