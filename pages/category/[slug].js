import React from "react";

import { Categories, PostCardV2 } from "../../components";
import { getCategories, getPostsByCategory } from "../../services";

function Category({ data }) {
  return (
    <div className="container mx-auto px-4 md:px-10 mb-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-12">
        <div className="col-span-12 lg:col-span-8 mb-0 lg:mb-8">
          {data.posts.map((post) => {
            // post.category = data.name;
            // post.category_slug = data.slug;
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
  );
}

export default Category;

export async function getStaticProps({ params }) {
  const data = await getPostsByCategory(params.slug);

  return {
    props: { data },
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
