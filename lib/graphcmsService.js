import { GraphQLClient } from 'graphql-request';

export const fetchOneFromCMS = async ({ params }) => {
    const graphcms = new GraphQLClient(process.env.CMS_API_URL);
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
    return destinos;
}

const fetchFromCMS = async () => {
    const graphcms = new GraphQLClient(process.env.CMS_API_URL);
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
            }
          }

        `
    );
    return destinos;
};

export const fetchCategoriesFromCMS = async () => {
    const graphcms = new GraphQLClient(process.env.CMS_API_URL);
    const { destinos } = await graphcms.request(
        `{
            destinos {
                category
            }
        }`
    );
    return [...new Set(destinos.map(i => i.category))].map(i => { return { category: i }; });
    //return destinos;
};

export default fetchFromCMS