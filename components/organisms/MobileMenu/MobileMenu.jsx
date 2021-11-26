import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaTimes } from "react-icons/fa";
import axios from "axios";
import checkNytimesMedia from "utils/CheckNytimesMedia"

// import { PostList, SocialMedia } from "../components";
import {PostList} from "components/molecules/"
import {SocialMedia} from "components/atoms/"

function MobileMenu({ openMenu, handleMenuToggle }) {
  const menus = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/" },
    { name: "Join Us", link: "/" },
    { name: "Advertisement", link: "/" },
    { name: "Contacts", link: "/" },
  ];

  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    const nytimesViewed = await axios.get(
      "https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=" +
        process.env.NEXT_PUBLIC_NYTIMES_KEY
    );
    const nytimesViewedPosts = nytimesViewed.data.results;
    setPosts(nytimesViewedPosts.slice(0, 4));
  }, []);

  return (
    <div className="block z-10">
      <div
        onClick={handleMenuToggle}
        className={`${
          openMenu ? "visible" : "invisible"
        } bg-black opacity-70 fixed top-0 right-0 bottom-0 left-0 z-20 ease-in-out transition-all duration-300`}
      />
      <div
        className={`bg-white fixed w-full ${
          openMenu ? "left-0" : "-left-full"
        } top-0 max-w-sm h-screen z-20 p-6 overflow-scroll ease-in-out transition-all duration-300`}
      >
        <button
          className="float-right p-0 cursor-pointer"
          onClick={handleMenuToggle}
        >
          <FaTimes />
        </button>
        <div className="clear-right mt-10">
          {menus.map((menu) => (
            <Link key={menu.name} href={menu.link}>
              <span className="block cursor-pointer text-2xl mt-1 hover:underline font-semibold">
                {menu.name}
              </span>
            </Link>
          ))}

          <h1 className="text-2xl font-semibold mt-10 mb-4">Most Read</h1>
          {posts.map((post) => (
            <PostList
              key={post.title}
              title={post.title}
              imageSrc={checkNytimesMedia(post)?.url}
            />
          ))}
        </div>

        <h1 className="text-2xl font-semibold mt-10 mb-4">Follow us</h1>
        <SocialMedia
          style="mb-16"
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

export default MobileMenu;
