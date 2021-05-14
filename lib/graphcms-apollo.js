import { gql } from "@apollo/client";
import client from "./apollo-client";

export const fetchOneFromCMS = async ({ params }) => {
    const { destinos } = await client.query({
        query: gql`
        query DesitnoPageQuery($slug: String!) {
            destinos(where: { slug: $slug}) {
                id
                slug
                name
                duration
                description
                content
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
              }
          }
        `,
        variables: {
            slug: params.slug,
        }
    }).then(result => result.data);
    return [destinos, Object.keys(categories)];
}

let categories = {}

const fetchFromCMS = async (category) => {
    const { destinos } = await client.query({
        query: gql`
        query Destinos {
            destinos {
              id
              slug
              name
              image {
                id
                url
              }
              category
            }
          }
        `
    }).then(result => result.data);
    console.log("d", destinos);

    categories = {}
    destinos ?? destinos.forEach(d => {
        if (!categories[d.category]) categories[d.category] = [];

        categories[d.category].push(d);
    });
    console.log('fetchFromCMS', categories);
    if (category)
        return [destinos.filter(d => d.category === category), Object.keys(categories)];
    else
        return [destinos, Object.keys(categories)];
};

export const fetchWithCategory = (category) => categories[category];
export const fetchCategories = () => {
    return Object.keys(categories) ?? []
};

export default fetchFromCMS