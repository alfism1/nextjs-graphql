import React, { useEffect, useState } from "react";
// import { ArticleDetail, Loader } from "../../components";
import { Loader } from "../../../components/blog/atoms";
import { ArticleDetail } from "../../../components/blog/organisms";
import { getPostDetails, getPosts } from "../../../services";
import { useRouter } from "next/router";
import Head from "next/head";
import { DetailPostType, OriginalNodePostType } from "../../../types/post/Post";
import { Params } from "next/dist/server/router";

type Props = {
  post: DetailPostType;
};

function PostDetails({ post }: Props) {
  const router = useRouter();
  const [origin, setOrigin] = useState<string>();

  useEffect(() => {
    setOrigin(window.location.origin);
  }, []);

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <React.Fragment>
      <Head>
        <title>{post?.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={post?.excerpt} />
        <link rel="image_src" href={post?.coverImage.url} />

        {/* social media meta */}
        <meta property="og:title" content={post?.title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${origin}/post/${post?.slug}`} />
        <meta property="og:image" content={`${post?.coverImage.url}`} />
        <meta property="og:description" content={post?.excerpt} />

        <meta name="twitter:title" content={post?.title} />
        <meta name="twitter:description" content={post?.excerpt} />
        <meta name="twitter:image" content={post?.coverImage.url} />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <ArticleDetail post={post} />
    </React.Fragment>
  );
}
export default PostDetails;

export async function getStaticProps({ params }: Params) {
  const data = await getPostDetails(params.slug);

  return {
    props: { post: data },
    revalidate: 10,
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    // paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    paths: posts.map((post: OriginalNodePostType) => {
      return {
        params: {
          slug: post.node.slug,
        },
      };
    }),
    fallback: true,
  };
}
