import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection(orderBy: createdAt_DESC) {
        edges {
          node {
            title
            id
            createdAt
            slug
            excerpt
            featured
            category {
              id
              name
              slug
            }
            author {
              id
              name
              picture {
                url
              }
            }
            coverImage {
              url
              width
              height
            }
          }
        }
      }
    }  
  `

  const result = await request(graphqlAPI, query)

  return result.postsConnection.edges;
}

export const getFeaturedPosts = async () => {
  const query = gql`
    query GetFeaturedPosts {
      posts(where: {featured: true}, first: 5) {
        title
        id
        createdAt
        slug
        excerpt
        featured
        category {
          id
          name
          slug
        }
        author {
          id
          name
          picture {
            url
          }
        }
        coverImage {
          url
          width
          height
        }
      }
    }

  `

  const result = await request(graphqlAPI, query)

  return result.posts;
}

export const getRecentPosts = async () => {
  const query = gql`
    query GetRecentPost {
      posts(orderBy: createdAt_DESC, first: 3) {
        title
        coverImage {
          url
          width
          height
        }
        createdAt
        slug
      }
    }
  `

  const result = await request(graphqlAPI, query)

  return result.posts;
}

export const getCategories = async () => {
  const query = gql`
    query GetCategory {
      categories {
        name
        slug
      }
    }
  `

  const result = await request(graphqlAPI, query)

  return result.categories;
}

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails( $slug: String! ) {
      post(where: { slug: $slug }) {
        title
        id
        createdAt
        slug
        excerpt
        featured
        category {
          id
          name
          slug
        }
        author {
          id
          name
          picture {
            url
          }
          biography
        }
        coverImage {
          url
          width
          height
        }
        content {
          raw
        }
      }
    }
  `

  const result = await request(graphqlAPI, query, { slug })

  return result.post;
}

export const submitComment = async (commentObj) => {
  const result = await fetch('/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(commentObj),
  });

  return result.json();
}

export const getComments = async (slug) => {
  const query = gql`
    query GetComments($slug: String!) {
      commentsConnection(
        where: {post: {slug: $slug}}
      ) {
        edges {
          node {
            name
            email
            comment
            createdAt
          }
        }
      }
    }

  `;

  const result = await request(graphqlAPI, query, { slug })
  return result.commentsConnection.edges
}

export const getPostsByCategory = async (slug) => {
  const query = gql`
    query GetPostsByCategory($slug: String!) {
      category(where: {slug: $slug}) {
        name
        id
        name
        slug
        id
        posts(orderBy: createdAt_DESC) {
          createdAt
          title
          slug
          coverImage {
            url
            width
            height
          }
          excerpt
          category {
            name
            slug
          }
          author {
            id
            name
            picture {
              url
            }
          }
        }
      }
    }
  `

  const result = await request(graphqlAPI, query, { slug })

  return result.category;
}