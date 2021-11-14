import React from "react";
import { useRouter } from 'next/router'
import Head from "next/head";

import { Categories, PostCardV2, Loader } from "../../components";
import { getCategories, getPostsByCategory } from "../../services";

function Category({ result }) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />
  }

  return (
    <React.Fragment>
      <Head>
        <title>{result?.name}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={`${result?.name} category`} />
      </Head>
      <div className="container mx-auto px-4 md:px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-12">
          <div className="col-span-12 lg:col-span-8 mb-0 lg:mb-8">
            {result !== null && result.posts.map((post) => {
              // post.category = result.name;
              // post.category_slug = result.slug;
              return <PostCardV2 key={post.title} post={post} />;
            })}
          </div>

          <div className="col-span-12 lg:col-span-4">
            <div className="lg:sticky relative top-8">
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Category;

export async function getStaticProps({ params }) {

  const result = await getPostsByCategory(params.slug);

  return {
    props: { result },
    revalidate: 10,
  };

}

export async function getStaticPaths() {
  const categories = await getCategories();
  const paths = categories.map((c) => ({
    params: { slug: c.slug },
  }));

  return {
    paths: paths,
    fallback: true,
  };
}
