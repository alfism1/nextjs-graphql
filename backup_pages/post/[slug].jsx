import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import {
  PostWidget,
  Categories,
  PostDetail,
  Author,
  Comments,
  CommentsForm,
  Loader,
} from "../../components";

import { getPostDetails, getPosts } from "../../services";

function PostDetails({ post }) {
  const router = useRouter();
  const [origin, setOrigin] = useState();

  useEffect(() => {
    setOrigin(window.location.origin);
  }, [])

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="container mx-auto px-4 md:px-10 mb-8">
      <Head>
        <title>{post.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={post.excerpt} />
        <link rel="image_src" href={post.coverImage.url} />

        {/* social media meta */}
        <meta property="og:title" content={post.title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${origin}/post/${post.slug}`} />
        <meta property="og:image" content={`${post.coverImage.url}`} />
        <meta property="og:description" content={post.excerpt} />

        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.coverImage.url} />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-12">
        <div className="col-span-1 lg:col-span-8">
          <PostDetail post={post} />
          <Author author={post.author} />
          <CommentsForm slug={post.slug} />
          <Comments slug={post.slug} />
        </div>
        <div className="col-span-1 lg:col-span-4">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
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

// export async function getServerSideProps({ params }) {
//   const data = await getPostDetails(params.slug);

//   return {
//     props: { post: data }
//   }
// }
