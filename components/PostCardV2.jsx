import React from "react";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";

function PostCardV2({
  title,
  slug,
  category,
  categorySlug,
  imageSrc,
  imageWidth,
  imageHeight,
  publishData,
  originalUrl,
}) {
  return (
    <React.Fragment>
      <div className="w-full">
        {/* <img
        src="https://www.unbox.id/wp-content/uploads/2021/07/152137-laptops-review-apple-macbook-pro-2020-review-image1-pbzm4ejvvs.jpg"
        alt=""
        className="object-cover w-full h-50 md:h-full max-h-80"
      /> */}
        {imageSrc ? (
          <Image
            priority
            src={imageSrc}
            width={imageWidth}
            height={imageHeight}
            layout="responsive"
            objectFit="contain"
          />
        ) : (
          <Image
            src="https://media.graphcms.com/mL0rU7w1TiqGpppMVsKZ"
            width={440}
            height={293}
            layout="responsive"
          />
        )}

        <div className="pb-6">
          <div className="my-4">
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
            <span className="text-black text-xs p-2">{publishData}</span>
          </div>
          {slug ? (
            <Link href={slug}>
              <p className="text-black cursor-pointer hover:underline text-lg leading-6 font-semibold">
                {title}
              </p>
            </Link>
          ) : (
            <a href={`${originalUrl}`} target="_blank">
              <p className="text-black cursor-pointer hover:underline text-lg leading-6 font-semibold">
                {title}
              </p>
            </a>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default PostCardV2;
