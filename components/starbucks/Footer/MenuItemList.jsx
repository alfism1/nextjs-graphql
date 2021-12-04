import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import { useMediaQuery } from "react-responsive";

function MenuItemList() {
  const [isMobile, setIsMobile] = useState(true);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1023px)" });
  useEffect(() => {
    setIsMobile(isTabletOrMobile);
  });

  const dropdownItem = [
    {
      main_label: "About Us",
      items: [
        { label: "Our Company" },
        { label: "Our Coffee" },
        { label: "Stories and news" },
        { label: "Starbucks Archive" },
        { label: "Investor Relations" },
        { label: "Customer Service" },
      ],
    },
    {
      main_label: "Careers",
      items: [
        { label: "Culture and Values" },
        { label: "Inclusion, Diversity, and Equity" },
        { label: "College Achievement Plan" },
        { label: "Alumni Community" },
        { label: "U.S. Careers" },
        { label: "International Careers" },
      ],
    },
    {
      main_label: "Social Impact",
      items: [
        { label: "People" },
        { label: "Planet" },
        { label: "Environmental and Social Impact Reporting" },
      ],
    },
    {
      main_label: "For Business Partners",
      items: [
        { label: "Landlord Support Center" },
        { label: "Supplier" },
        { label: "Corporate Gift Card Sales" },
        { label: "Office and Foodservice Coffee" },
      ],
    },
    {
      main_label: "Order and Pickup",
      items: [
        { label: "Order on the App" },
        { label: "Order on the Web" },
        { label: "Delivery" },
        { label: "Delivery" },
        { label: "Order and Pickup Options" },
        { label: "Explore and Find Coffee for Home" },
      ],
    },
  ];

  return (
    <React.Fragment>
      <div className="py-5 border-t-2 border-b-2">
        {isMobile &&
          dropdownItem.map((item) => {
            return (
              <MenuItem
                key={item.main_label}
                label={item.main_label}
                items={item.items}
              />
            );
          })}

        {!isMobile && (
          <div className="flex flex-row gap-4">
            {dropdownItem.map((item) => (
              <div key={item.main_label} className="flex-1">
                <span className="mb-4 block">{item.main_label}</span>
                <ul>
                  {item.items.map((subItem) => (
                    <li className="text-sm text-gray-600 py-2">
                      {subItem.label}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default MenuItemList;
