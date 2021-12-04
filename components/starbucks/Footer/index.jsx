import React from "react";
import MenuItemList from "./MenuItemList";
import {
  FaSpotify,
  FaFacebook,
  FaPinterest,
  FaInstagram,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="container mx-auto px-4 py-8">
      <MenuItemList />
      <div className="py-8 flex flex-row text-3xl gap-3">
        <FaSpotify />
        <FaFacebook />
        <FaPinterest />
        <FaInstagram />
        <FaYoutube />
        <FaTwitter />
      </div>

      <ul className="md:flex md:flex-row md:gap-8">
        {[
          "Privacy Policy",
          "Terms of Use",
          "CA Supply Chain Act",
          "Cookie Preferences",
        ].map((list) => (
          <li key={list}>
            <a className="cursor-pointer text-sm md:text-base py-2 block">{list}</a>
          </li>
        ))}
      </ul>

      <div className="mt-8 text-xs text-gray-800">© 2021 Starbucks Coffee Company. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
