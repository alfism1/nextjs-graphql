export default function checkNytimesMedia(post) {
  return post.media[0] !== undefined
    ? post.media[0]["media-metadata"][2]
    : null;
};