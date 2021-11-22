import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

function PostList({ title, slug, imageSrc, originalUrl }) {
  return (
    <motion.div
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 1.05 }}>
      {slug ? (
        <Link href={slug}>
          <PostItem imageSrc={imageSrc} title={title} />
        </Link>
      ) : (
        <a href={originalUrl} target="_blank">
          <PostItem imageSrc={imageSrc} title={title} />
        </a>
      )}
    </motion.div>
  );
}

function PostItem({ imageSrc, title }) {
  return (
    <div className="flex w-full mb-6 cursor-pointer">
      <div className="flex-none">
        <Image
          className="object-cover"
          src={imageSrc}
          width={"100%"}
          height={"100%"}
          layout="intrinsic"
        />
      </div>
      <p className="ml-4 text-base leading-6 font-semibold hover:underline">
        {title}
      </p>
    </div>
  );
}

export default PostList;
