import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Href, CategoryBox } from "../../atoms";

type Props = {
  title: string;
  slug?: string;
  category: string;
  categoryColor?: string;
  categorySlug?: string;
  imageSrc?: string;
  imageWidth?: number;
  imageHeight?: number;
  publishData: string;
  originalUrl?: string;
};

function PostCardV2({
  title,
  slug,
  category,
  categorySlug,
  categoryColor,
  imageSrc,
  imageWidth,
  imageHeight,
  publishData,
  originalUrl,
}: Props) {
  return (
    <React.Fragment>
      <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 1.05 }}
        className="w-full"
      >
        {/* <img
        src="https://www.unbox.id/wp-content/uploads/2021/07/152137-laptops-review-apple-macbook-pro-2020-review-image1-pbzm4ejvvs.jpg"
        alt=""
        className="object-cover w-full h-50 md:h-full max-h-80"
      /> */}
        <Href slug={slug && `/blog/post/${slug}`} originalUrl={originalUrl}>
          {imageSrc ? (
            <Image
              priority
              src={imageSrc}
              width={imageWidth}
              height={imageHeight}
              layout="responsive"
              objectFit="contain"
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
        </Href>
        <div className="pb-6">
          <div className="my-4">
            <CategoryBox
              categorySlug={categorySlug}
              categoryColor={categoryColor}
              category={category}
            />
            <span className="text-black text-xs p-2">{publishData}</span>
          </div>
          <Href slug={`/blog/post/${slug}`} originalUrl={originalUrl}>
            <p className="text-black cursor-pointer hover:underline text-lg leading-6 font-semibold">
              {title}
            </p>
          </Href>
        </div>
      </motion.div>
    </React.Fragment>
  );
}

export default PostCardV2;
