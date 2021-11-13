import Head from "next/head";
import { PostCard, PostCardV2, Categories, PostWidget } from "../components";
import { getPosts } from "../services";

export default function Home({ posts }) {
  return (
    <div className="container mx-auto px-4 md:px-10 mb-8">
      <Head>
        <title>Super blog created by me</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post, i) => { 
            if (i < 1) {
              return <PostCard post={post.node} key={post.node.title} />
            } else {
              return <PostCardV2 post={post.node} key={post.node.title} />
            }
          })}
          {/* <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-12">
            {posts.map((post) => (
              <div className="col-span-12 lg:col-span-6">
                <PostCard post={post.node} key={post.node.title} />
              </div>
            ))}
          </div> */}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const posts = (await getPosts()) || [];

    return {
      props: { posts },
      revalidate: 10
    };
  } catch (error) {
    res.statucCode = 404
    return { props: {} }
  }

}
