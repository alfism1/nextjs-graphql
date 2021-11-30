import React from "react";
import moment from "moment";
import { H2 } from "../../atoms";
import { PostCardV2 } from "..";
import { OriginalPostType } from "../../../../types/post/Post";

type Props = {
  title: string;
  posts: OriginalPostType[];
};

function PostsWidgetV2({ title, posts }: Props) {
  return (
    <div>
      <H2 style="mb-0 md:mb-3">{title}</H2>
      {posts.map((post, i) => {
        return (
          <PostCardV2
            key={i}
            title={post.title}
            slug={post.slug}
            category={post.category.name}
            categorySlug={post.category.slug}
            categoryColor={post.category.boxColor.hex}
            imageSrc={post.coverImage?.url}
            imageWidth={post.coverImage?.width}
            imageHeight={post.coverImage?.height}
            publishData={moment(post.publishData).format("MMM DD, YYYY")}
          />
        );
      })}
    </div>
  );
}

export default PostsWidgetV2;
