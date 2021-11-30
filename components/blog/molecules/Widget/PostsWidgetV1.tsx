import React from "react";
import { H2 } from "../../atoms";
import { PostList } from "../index";
import { OriginalPostType } from "../../../../types/post/Post";

type Props = {
  title: string;
  posts: OriginalPostType[];
};

function PostsWidgetV1({ title, posts }: Props) {
  return (
    <div>
      <H2 style="mb-0 md:mb-3">{title}</H2>
      {posts.map((post, i) => {
        return (
          <PostList
            key={i}
            title={post.title}
            slug={post.slug}
            imageSrc={post.coverImage?.url}
          />
        );
      })}
    </div>
  );
}

export default PostsWidgetV1;
