import React from "react";
// import { Container, PostCardV1, PostCardV2, PostList, H1 } from "../components";
import Container from "../../components/templates/Container";
import { PostCardV1, PostCardV2, PostList } from "../../components//molecules/";
import { H1 } from "../../components//atoms/";

import axios from "axios";
import { getPosts } from "../../services/index";
import checkNytimesMedia from "../../utils/CheckNytimesMedia";
import moment from "moment";
import Head from "next/head";
import { OriginalNodePostType, NytimesPostType } from "../../types/post/Post";

type Props = {
  posts: OriginalNodePostType[];
  nytimesPosts: NytimesPostType;
  nytimesViewedPosts: NytimesPostType;
};

function HomeBlog({ posts, nytimesPosts, nytimesViewedPosts }: Props) {
  return (
    <React.Fragment>
      <Head>
        <title>Afsamu, personal website built with modern tech stack</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Hello. I'm Alfi, a software Engineer. Here is my personal website that I create using up to date tech. This site built with NextJS as a Frontend, GraphCMS as the Content management, and GraphQL as the data communication."
        />
        <meta name="robots" content="index, follow" />
        <meta
          name="abstract"
          content="Not only personal web, you can find any interesting topic from world wide."
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "Person",
              name: "Alfi Samudro Mulyo",
              image:
                "https://media-exp1.licdn.com/dms/image/C5103AQFd29ZeLU5K8g/profile-displayphoto-shrink_200_200/0/1560862454964?e=1643241600&v=beta&t=ftQot08lIY7rUye8d_skgZKMhekDwTLdFVPzozQc9kI",
              jobTitle: "Fullstack developer, Programmer, Software Engineer",
              url: "https://www.afsamu.com/",
              sameAs: [
                "https://www.facebook.com/alfi.samudro/",
                "https://www.linkedin.com/in/alfi-samudro-058b1910a/",
              ],
              worksFor: {
                "@type": "Organization",
                name: "Edgeprop Singapore",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Malang",
                addressRegion: "East Java",
                postalCode: "65163",
                streetAddress: "Wijaya Kusuma - Cepokomulyo - Kepanjen",
              },
              email: "mailto:alfialfarisi@gmail.com",
              telephone: "(+62)82339803192)",
            }),
          }}
        />
      </Head>
      <div className="py-8 bg-gray-100 border">
        <Container>
          <H1 style="text-center">Original Posts Featured</H1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-6">
            {posts.map((post) => (
              <PostCardV1
                key={post.node.title}
                title={post.node.title}
                slug={post.node.slug}
                category={post.node.category.name}
                categorySlug={post.node.category.slug}
                categoryColor={post.node.category.boxColor.hex}
                imageSrc={post.node.coverImage?.url}
                publishData={moment(post.node.createdAt).format("MMM DD, YYYY")}
              />
            ))}
          </div>
        </Container>
      </div>
      <Container>
        <H1 style="py-4">Nytimes News</H1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* {nytimesPosts.results.slice(0, 2).map((post) => { */}
          {nytimesPosts.results.slice(0, 2).map((post) => {
            return (
              <PostCardV1
                key={post.title}
                title={post.title}
                category={post.section}
                imageSrc={checkNytimesMedia(post)?.url}
                publishData={moment(post.published_date).format("MMM DD, YYYY")}
                originalUrl={post.url}
              />
            );
          })}
        </div>
        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {nytimesPosts.results.slice(2, 5).map((post) => {
            return (
              <PostCardV2
                key={post.title}
                title={post.title}
                category={post.section}
                imageSrc={checkNytimesMedia(post)?.url}
                imageWidth={checkNytimesMedia(post)?.width}
                imageHeight={checkNytimesMedia(post)?.height}
                publishData={moment(post.published_date).format("MMM DD, YYYY")}
                originalUrl={post.url}
              />
            );
          })}
        </div>

        <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-12">
          <div className="md:col-span-8">
            <PostCardV1
              title={nytimesPosts.results[6].title}
              category={nytimesPosts.results[6].section}
              imageSrc={checkNytimesMedia(nytimesPosts.results[6]).url}
              publishData={moment(
                nytimesPosts.results[6].published_date
              ).format("MMM DD, YYYY")}
              originalUrl={nytimesPosts.results[6].url}
            />
            <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-2">
              {nytimesPosts.results.slice(7, 11).map((post) => (
                <PostCardV2
                  key={post.title}
                  title={post.title}
                  category={post.section}
                  imageSrc={checkNytimesMedia(post)?.url}
                  imageWidth={checkNytimesMedia(post)?.width}
                  imageHeight={checkNytimesMedia(post)?.height}
                  publishData={moment(post.published_date).format(
                    "MMM DD, YYYY"
                  )}
                  originalUrl={post.url}
                />
              ))}
            </div>
          </div>
          <div className="md:col-span-4">
            <H1 style="pb-4 -mt-1">Nytimes Most Read</H1>
            {nytimesViewedPosts.results.slice(0, 4).map((post) => (
              <PostList
                key={post.title}
                title={post.title}
                imageSrc={checkNytimesMedia(post)?.url}
                originalUrl={post.url}
              />
            ))}

            <H1 style="pb-4 -mt-1">Nytimes Popular</H1>
            {nytimesViewedPosts.results.slice(4, 6).map((post) => (
              <PostCardV2
                key={post.title}
                title={post.title}
                category={post.section}
                imageSrc={checkNytimesMedia(post)?.url}
                imageWidth={checkNytimesMedia(post)?.width}
                imageHeight={checkNytimesMedia(post)?.height}
                publishData={moment(post.published_date).format("MMM DD, YYYY")}
                originalUrl={post.url}
              />
            ))}
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
}
export default HomeBlog;

export async function getStaticProps() {
  try {
    const nytimes = await axios.get(
      "https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=" +
        process.env.NEXT_PUBLIC_NYTIMES_KEY
    );
    const nytimesPosts = nytimes.data;

    const nytimesViewed = await axios.get(
      "https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=" +
        process.env.NEXT_PUBLIC_NYTIMES_KEY
    );
    const nytimesViewedPosts = nytimesViewed.data;

    const posts = (await getPosts()) || [];

    return {
      props: { posts, nytimesPosts, nytimesViewedPosts },
      revalidate: 10,
    };
  } catch (error) {
    // res.statucCode = 404
    return { props: {} };
  }
}
