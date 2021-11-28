import React from 'react';
import PropTypes from 'prop-types'
import { H2 } from "../../atoms"
import { PostList } from "../../molecules/index"

function PostsWidgetV1({title, posts}) {
  return (
    <div>
      <H2 style="mb-0 md:mb-3">{title}</H2>
      {posts.map((post, i) => {
        return (<PostList key={i} title={post.title} slug={post.slug} imageSrc={post.coverImage.url} />)
      })}
    </div>
  );
}

PostsWidgetV1.propTypes = {
  title: PropTypes.string,
  posts: PropTypes.array.isRequired
}

export default PostsWidgetV1;