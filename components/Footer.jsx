import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaPaperPlane } from "react-icons/fa";
import { SocialMedia } from "../components";
import { getCategories } from "../services";

function FooterLabel({ label }) {
  return <h2 className="font-bold mb-3 md:mb-8 mt-3 md:mt-0">{label}</h2>;
}

function FooterLink({ href, label }) {
  return (
    <Link href={href}>
      <a className="cursor-pointer block text-sm font-normal text-gray-500 py-1">
        {label}
      </a>
    </Link>
  );
}

function Footer() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((res) => {
      setCategories(res);
    });
  }, [categories]);

  return (
    <div className="border-t py-16 grid grid-cols-1 md:grid-cols-6 gap-6">
      <div className="col-span-full md:col-span-2">
        <div className="mb-3 md:mb-8 mt-3 md:mt-0">
          <Link href="/">
            <div className=" cursor-pointer">
              <b>AF</b>SAMU
            </div>
          </Link>
        </div>
        <div className="flex flex-row gap-4 lg:gap-6">
          <FooterLink href="/" label="Privacy Policy" />
          <FooterLink href="/" label="Advertisement" />
        </div>
        <span className="block mt-3 text-sm font-normal text-gray-500">
          © Copyright ©2021 All rights reserved
        </span>
      </div>
      <div className="col-span-full md:col-span-1">
        <FooterLabel label="About Us" />
        <FooterLink href="/" label="About Us" />
        <FooterLink href="/" label="Join Us" />
        <FooterLink href="/" label="Contact Us" />
      </div>
      <div className="col-span-full md:col-span-1">
        <FooterLabel label="Categories" />
        {categories.map((c) => (
          <FooterLink key={c.name} href={c.slug} label={c.name} />
        ))}
      </div>
      <div className="col-span-full md:col-span-2">
        <FooterLabel label="Join Our Newsletter" />
        <div className="border flex items-center justify-between">
          <input
            className="outline-none focus:outline-none w-full h-8 text-sm px-3"
            name="newsletter"
            placeholder="Enter your email here"
            type="text"
          />
          <button className="px-3 h-8 border-l">
            <FaPaperPlane />
          </button>
        </div>
        <SocialMedia
          style="mt-4"
          data={[
            { facebook: true, link: "alfi.samudro" },
            { twitter: true, link: "@lfisamudro" },
            { instagram: true, link: "alfi.sm" },
          ]}
        />
      </div>
    </div>
  );
}

export default Footer;
