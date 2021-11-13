import React from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

function PostCardV2({post}) {
  return (
    <div className="bg-white p-4 mb-8 rounded-l-lg rounded-r-lg flex flex-row shadow-lg w-full">
      <div className="flex-none w-1/3">
        <Image
          className="rounded-lg object-cover"
          src={post.coverImage.url}
          width={post.coverImage.width}
          height={post.coverImage.height}
          layout="responsive"
        />
      </div>
      <div className="font-semibold ml-4">
        <Link href={`/category/${post.category.slug}`}>
          <span className="cursor-pointer text-sm text-red-500">{post.category.name}</span>
        </Link>
        <h1 className="text-md my-2">
          {post.title}
        </h1>
        <div className="flex items-center justify-start">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline mr-2 text-red-500"
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
          <span className="font-normal text-xs">
            {moment(post.createdAt).format("MMM DD, YYYY")}
          </span>
        </div>
        <p className="hidden md:block font-normal text-sm mt-2">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-start mt-8">
          <Link href={`/post/${post.slug}`}>
            <button className="rounded-full text-white text-sm bg-red-600 px-2 sm:px-5 py-2 hover:bg-red-800 transition duration-500">
              Continue Reading
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PostCardV2;
