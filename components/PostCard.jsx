import React from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

function PostCard({ post }) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <Image
          src={post.coverImage.url}
          alt={post.title}
          layout={"fill"}
          className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-t-lg"
        />
      </div>
      <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold px-8">
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="sm:flex sm:items-center sm:justify-center mb-8">
        <div className="flex items-center justify-center sm:mb-0 sm:mr-5 mb-5">
          <Image
            src={post.author.picture.url}
            width={30}
            height={30}
            layout={"intrinsic"}
            className="rounded-full"
          />
          <span className="ml-2 font-normal">{post.author.name}</span>
        </div>
        <div className="flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline mr-2 text-pink-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span>{moment(post.createdAt).format("MMM DD, YYYY")}</span>
        </div>
      </div>
      <p className="px-5 text-center">{post.excerpt}</p>
    </div>
  );
}

export default PostCard;
