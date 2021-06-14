import { gql } from "@apollo/client";

export const CATEGORIES_QUERY = gql`
  query Categories {
    categories @client
  }
`

export const DESTINOS_QUERY = gql`
query Destinos {
    destinos (first:200) {
      id
      slug
      name
      image { id url }
      category
      region
    }
  }
`

export const DESTINO_QUERY = gql`
query DesitnoPageQuery($slug: String!) {
    destinos(where: { slug: $slug}) {
        id
        slug
        name
        duration
        description
        content
        region
        createdAt
        image {
          id
          url
          width
          height
        }
        location {
          latitude
          longitude
        }
        height
        width
        more { id url width height}
      }
  }
`

export const typeDefs = gql`
  extend type Query {
    categories: [String]
  }
`;
