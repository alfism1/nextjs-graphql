import React from "react";
import { PostCardV1, PostCardV2, PostList, H1 } from "../components";
import axios from "axios";
import moment from "moment";

function Home({ nytimesPosts, nytimesViewedPosts }) {
  const checkNytimesMedia = (post) => {
    return post.media[0] !== undefined
      ? post.media[0]["media-metadata"][2]
      : null;
  };

  return (
    <React.Fragment>
      <H1 style="py-4">Nytimes News</H1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {nytimesPosts.results.slice(0, 2).map((post) => {
          return (
            <PostCardV1
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
            imageWidth={checkNytimesMedia(nytimesPosts.results[6]).width}
            imageHeight={checkNytimesMedia(nytimesPosts.results[6]).height}
            publishData={moment(nytimesPosts.results[6].published_date).format(
              "MMM DD, YYYY"
            )}
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
                publishData={moment(post.published_date).format("MMM DD, YYYY")}
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
    </React.Fragment>
  );
}
export default Home;

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

    return {
      props: { nytimesPosts, nytimesViewedPosts },
      revalidate: 10,
    };
  } catch (error) {
    // res.statucCode = 404
    return { props: {} };
  }
}
