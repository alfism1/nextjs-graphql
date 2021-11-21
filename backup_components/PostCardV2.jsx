import React from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

function PostCardV2({ post }) {
  return (
    <div className="bg-white p-4 mb-8 flex flex-row shadow-lg w-full">
      <div className="flex-none w-1/3">
        <Image
          className="object-cover"
          src={post.coverImage.url}
          width={post.coverImage.width}
          height={post.coverImage.height}
          layout="responsive"
        />
      </div>
      <div className="font-semibold ml-4">
        <Link href={`/category/${post.category.slug}`}>
          <span className="cursor-pointer text-sm text-red-500">
            {post.category.name}
          </span>
        </Link>
        <h1 className="text-md my-2 transition duration-300 cursor-pointer hover:text-red-600">
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </h1>
        <div className="flex items-center justify-start">
          <span className="font-normal text-xs">
            <span className="italic font-semibold text-gray-800">{post?.author?.name}</span> - {moment(post.createdAt).format("MMM DD, YYYY")}
          </span>
        </div>
        <p className="hidden md:block font-normal text-sm mt-2">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-start mt-8">
          <Link href={`/post/${post.slug}`}>
            <button className="text-white text-sm bg-red-600 px-2 sm:px-5 py-2 hover:bg-red-800 transition duration-500">
              Continue Reading
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PostCardV2;
