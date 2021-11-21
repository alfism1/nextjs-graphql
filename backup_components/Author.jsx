import React from "react";
import Image from "next/image";

function Author({ author }) {
  return (
    <div className="bg-black bg-opacity-50 text-center text-white p-12 mb-8 mt-20 relative ">
      <div className="absolute -top-14 left-0 right-0">
        <Image
          className="rounded-full align-middle"
          alt={author.name}
          src={author.picture.url}
          width={100}
          height={100}
          layout="intrinsic"
        />
      </div>
      <div className="text-xl font-bold my-4">{author.name}</div>
      <div className="text-sm leading-6">{author.biography == "" ? "No biography" : author.biography}</div>
    </div>
  );
}

export default Author;
