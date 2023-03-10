


export const AuthorPageQ = `query AuthorPage($uri: String = "/author/alex") {
  nodeByUri(uri: $uri) {
    ... on User {
      id
      firstName
      lastName
      email
      otherAuthorData {
        descriereAutor
        fieldGroupName
        functie
        pozaProfil {
          altText
          link
        }
        tikTok
        facebook
        youtube
        instagram
        linkedin
      }
    }
  }
}`;



export const PostsQuery = (page = 1) => {
  return `
    query Posts    {
      posts (first: ${page * 10}) {
     edges {
      node {
        id
        title
        excerpt
        uri
        featuredImage {
          node {
            altText
            caption
            description
            sourceUrl
          }
        }
      }
      cursor
    }
    pageInfo {
      hasNextPage
      hasPreviousPage
      offsetPagination {
        hasMore
        hasPrevious
        total
      }
    }
  }
}
  `;
};

export const AllPostsData = (number = 99999) => `AllPostsData {
  posts(first: ${number}) {
    edges {
      node {
        id
        title
        excerpt
        uri
         featuredImage {
        node {
          altText
          caption
          description
          sourceUrl
        }
      }
    }
  }
}`;

export const AllPostsUri = (number = 10) => `{
  posts (first: ${number}) {
    edges {
      node {
        uri
      }
    }
  }
}`;

export const PostDataByUri = (uri) => `query getPostByURI($uri: String="${uri}") {
  postBy(uri: $uri){
  id
  title
  content
  author {
    node {
      firstName
      lastName
           otherAuthorData {
        descriereAutor
        fieldGroupName
        functie
        pozaProfil {
          altText
          link
        }
        tikTok
        facebook
        youtube
        instagram
        linkedin
      }
      description
    }
  }
  blocksJSON
  featuredImage {
    node {
      altText
      sourceUrl
    }
  }
   seo {
      metaDesc
      title
    }
  }
}`;

export const PortfolioItems =()=>{
`query PortfolioItems {
  portfolioItems(first: 90000) {
    nodes {
      excerpt
      featuredImage {
        node {
          altText
          sourceUrl
        }
      }
      title
      slug
      buttonColor {
        buttonColor
      }
      blocksJSON
    }
  }
}`;
}

export const PortfolioItemsSlugs =() =>`query MainMenuQuery {
  portfolioItems {
    nodes {
      slug
    }
  }
}`


export const PortfolioItemsBySlug = (slug) => `query MainMenuQuery {
  portfolioItemBy(slug: "${slug}") {
    blocksJSON
    seo {
      canonical
      title
      metaDesc
    }
    title
    featuredImage {
      node {
        altText
        sourceUrl
        link
      }
    }
  }
}`;
