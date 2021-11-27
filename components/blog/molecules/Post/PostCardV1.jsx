import React from "react";
// import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Href, CategoryBox } from "@/blog/components/atoms";

function PostCardV1({
  title,
  slug,
  category,
  categorySlug,
  categoryColor,
  imageSrc,
  publishData,
  originalUrl,
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 1.05 }}
      className="relative w-full overflow-hidden"
    >
      <div className="block bottom-0">
        {imageSrc ? (
          <Image
            priority
            src={imageSrc}
            width={800}
            height={500}
            layout="responsive"
            objectFit="cover"
            alt={title}
          />
        ) : (
          <Image
            src="https://media.graphcms.com/mL0rU7w1TiqGpppMVsKZ"
            width={440}
            height={293}
            layout="responsive"
            alt={"Afsamu - Image not found"}
          />
        )}
      </div>
      <Href slug={slug && `blog/post/${slug}`} originalUrl={originalUrl}>
        <div className="absolute bg-black h-full opacity-50 w-full bottom-0" />
      </Href>
      <div className="absolute bottom-0 pl-6 pb-6">
        <div className="mb-4">
          <CategoryBox
            categorySlug={categorySlug}
            categoryColor={categoryColor}
            category={category}
          />
          {/* {categorySlug ? (
            <Link href={categorySlug}>
              <span style={{backgroundColor: categoryColor}} className="uppercase cursor-pointer px-2 py-1 text-xs text-white bg-yellow-600 mr-2">
                {category}
              </span>
            </Link>
          ) : (
            <span className="uppercase px-2 py-1 text-xs text-white bg-yellow-600 mr-2">
              {category}
            </span>
          )} */}

          <span className="text-white text-xs p-2">{publishData}</span>
        </div>
        <Href slug={slug && `blog/post/${slug}`} originalUrl={originalUrl}>
          <p className="text-white cursor-pointer hover:underline text-lg leading-6 font-semibold">
            {title}
          </p>
        </Href>
      </div>
    </motion.div>
  );
}

export default PostCardV1;
