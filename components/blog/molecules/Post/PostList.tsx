import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {
  title: string;
  slug?: string;
  imageSrc?: string;
  originalUrl?: string;
};

function PostList({ title, slug, imageSrc, originalUrl }: Props) {
  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 1.05 }}>
      {slug ? (
        <Link href={slug}>
          <div>
            {" "}
            {/* https://stackoverflow.com/a/69767229 */}
            <PostItem imageSrc={imageSrc} title={title} />
          </div>
        </Link>
      ) : (
        <a href={originalUrl} target="_blank">
          <PostItem imageSrc={imageSrc} title={title} />
        </a>
      )}
    </motion.div>
  );
}

function PostItem({ imageSrc, title }: Props) {
  return (
    <div className="flex w-full mb-6 cursor-pointer">
      <div className="flex-none">
        {imageSrc ? (
          <Image
            className="object-cover"
            src={imageSrc}
            width={"100%"}
            height={"100%"}
            layout="intrinsic"
            alt={title}
          />
        ) : (
          <Image
            className="object-cover"
            src="https://media.graphcms.com/mL0rU7w1TiqGpppMVsKZ"
            width={"100%"}
            height={"100%"}
            layout="intrinsic"
            alt={"Afsamu - image not found"}
          />
        )}
      </div>
      <p className="ml-4 text-base leading-6 font-semibold hover:underline">
        {title}
      </p>
    </div>
  );
}

export default PostList;
