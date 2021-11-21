import React from "react";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";

function PostCardV1({
  title,
  slug,
  category,
  categorySlug,
  imageSrc,
  imageWidth,
  imageHeight,
  publishData,
  originalUrl
}) {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="block bottom-0">
        <Image
          priority
          src={imageSrc}
          width={imageWidth}
          height={imageHeight}
          layout="responsive"
        />
      </div>
      <div className="absolute bg-black h-full opacity-50 w-full bottom-0" />
      <div className="absolute bottom-0 pl-6 pb-6">
        <div className="mb-4">
          {categorySlug ? (
            <Link href={categorySlug}>
              <span className="uppercase cursor-pointer px-2 py-1 text-xs text-white bg-yellow-600 mr-2">
                {category}
              </span>
            </Link>
          ) : (
            <span className="uppercase px-2 py-1 text-xs text-white bg-yellow-600 mr-2">
              {category}
            </span>
          )}

          <span className="text-white text-xs p-2">{publishData}</span>
        </div>
        {slug ? (
          <Link href={slug}>
            <p className="text-white cursor-pointer hover:underline text-lg leading-6 font-semibold">
              {title}
            </p>
          </Link>
        ) : (
          <a href={`${originalUrl }`} target="_blank">
            <p className="text-white cursor-pointer hover:underline text-lg leading-6 font-semibold">
              {title}
            </p>

          </a>
        )}
      </div>
    </div>
  );
}

export default PostCardV1;
