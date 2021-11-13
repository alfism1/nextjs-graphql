import React from "react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

const FeaturedPostCard = ({ post }) => (
  <div className="relative h-72 mb-0">
    <div
      className="absolute w-full h-72 bg-no-repeat bg-cover shadow-lg bg-center"
      style={{ backgroundImage: `url('${post.coverImage.url}')` }}
    />
    <div className="absolute bg-center bg-gradient-to-b opacity-70 from-gray-800 via-gray-900 to-black w-full h-72" />
    <div className="absolute p-4 text-white text-center flex flex-col items-center justify-center w-full h-72">
      <p className="text-white mb-4 text-shadow font-semibold text-xs">
        {moment(post.createdAt).format("MMM DD, YYYY")}
      </p>
      <p className="text-white mb-4 text-shadow font-semibold text-xl">
        {post.title}
      </p>
      <div className="flex flex-row justify-center items-center absolute bottom-5">
        <Image
          alt={post.author.name}
          src={post.author.picture.url}
          width={30}
          height={30}
          className="align-middle drop-shadow-lg rounded-full"
          layout="intrinsic"
        />
        <p className="ml-2 font-medium">{post.author.name}</p>
      </div>
    </div>
  </div>
);

export default FeaturedPostCard;
