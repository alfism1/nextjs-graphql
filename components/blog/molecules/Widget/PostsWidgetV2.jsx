import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { H2 } from "@/blog/components/atoms/index";
import { PostCardV2 } from "@/blog/components/molecules/index";

function PostsWidgetV2({ title, posts }) {
  return (
    <div>
      <H2 style="mb-0 md:mb-3">{title}</H2>
      {posts.map((post, i) => {
        console.log(post.slug)
        return (
          <PostCardV2
            key={i}
            title={post.title}
            slug={post.slug}
            category={post.category.name}
            categorySlug={post.category.slug}
            categoryColor={post.category.boxColor.hex}
            imageSrc={post.coverImage.url}
            imageWidth={post.coverImage.width}
            imageHeight={post.coverImage.height}
            publishData={moment(post.published_date).format("MMM DD, YYYY")}
          />
        );
      })}
    </div>
  );
}

PostsWidgetV2.propTypes = {
  title: PropTypes.string,
  posts: PropTypes.array.isRequired,
};

export default PostsWidgetV2;
