import React, { useEffect, useState } from "react";
import { getRecentPosts } from "../services";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

function PostWidget({}) {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    getRecentPosts().then((result) => setRelatedPosts(result));
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
      <div className="text-xl font-semibold border-b pb-6 mb-6">Recent Posts</div>
      {relatedPosts.map((post) => (
        <div key={post.title} className="flex items-start w-full mb-4">
          <div className="w-16 flex-none mt-1">
            <Image
              src={post.coverImage.url}
              width={90}
              height={60}
              layout={"intrinsic"}
              className="align-middle rounded-md"
              alt={post.title}
            />
          </div>
          <div className="flex-grow ml-4">
            <p className="text-gray-500 font-xs">
              {moment(post.createdAt).format("MMM DD, YYYY")}
            </p>
            <Link href={`/post/${post.slug}`} key={post.title}>
              {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PostWidget;
