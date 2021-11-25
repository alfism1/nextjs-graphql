import React from "react";
import { ArticleDetail, Loader } from "../../components";
import { getPostDetails, getPosts } from "../../services";
import { useRouter } from "next/router";

function PostDetails({ post }) {
  const router = useRouter();
  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div>
      <ArticleDetail post={post} />
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
