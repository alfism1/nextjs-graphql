import React from "react";
import { PostDetail } from "../../components";
import { getPostDetails, getPosts } from "../../services";

function PostDetails({ post }) {
  return (
    <div>
      Coming soon
      {/* <PostDetail post={post} /> */}
    </div>
  );
}
export default PostDetails;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);

  return {
    props: { post: data },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
