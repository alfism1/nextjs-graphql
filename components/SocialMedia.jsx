import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function SocialMedia({ data, style }) {
  return (
    <div className={`inline-flex gap-2 ${style}`}>
      {data.map((d, i) => {
        return (
          <a key={i} href={d.link}>
            <button key={i} className="bg-black p-2">
              {d.facebook && <FaFacebookF className="text-white" />}
              {d.twitter && <FaTwitter className="text-white" />}
              {d.instagram && <FaInstagram className="text-white" />}
            </button>
          </a>
        );
      })}
    </div>
  );
}

export default SocialMedia;
