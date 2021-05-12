import { GraphQLClient } from 'graphql-request';
import _ from "lodash";

const getUrl = () => process.env.CMS_API_URL ?? "localhost";

export const fetchOneFromCMS = async ({ params }) => {
  const graphcms = new GraphQLClient(getUrl());
  const { destinos } = await graphcms.request(
    `
        query DesitnoPageQuery($slug: String!) {
            destinos(where: { slug: $slug}) {
                id
                slug
                name
                duration
                description
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
    {
      slug: params.slug,
    }
  );
  return [destinos, Object.keys(categories)];
}

let categories = {}

const fetchFromCMS = async (category) => {
  const graphcms = new GraphQLClient(getUrl());
  const { destinos } = await graphcms.request(
    `
        {
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
  );

  categories = {}
  destinos.forEach(d => {
    if (!categories[d.category]) categories[d.category] = [];

    categories[d.category].push(d);
  });
  //console.log('fetchFromCMS', categories);
  if (category)
    return [destinos.filter(d => d.category === category), Object.keys(categories)];
  else
    return [destinos.sort((a, b) => 0.5 - Math.random()), Object.keys(categories)];
};

export const fetchWithCategory = (category) => categories[category];
export const fetchCategories = () => {
  return Object.keys(categories) ?? []
};

export default fetchFromCMS