import { initializeApollo } from "./apollo-client"
import { categoriesVar } from "./cache"
import { DESTINOS_QUERY, DESTINO_QUERY, CATEGORIES_QUERY } from "./query"

export const fetchOneFromCMS = async ({ params }) => {
  const client = initializeApollo();
  const { destinos } = await client.query({
    query: DESTINO_QUERY,
    variables: {
      slug: params.slug,
    }
  }).then(result => result.data);

  const { categories } = await client.query({
    query: CATEGORIES_QUERY
  }).then(result => { console.log("category query", result); return result.data; });

  return [destinos, Object.keys(categories)];
}

const fetchFromCMS = async (category) => {
  const client = initializeApollo();

  const { destinos } = await client.query({
    query: DESTINOS_QUERY
  }).then(result => result.data);

  let { categories } = await client.query({
    query: CATEGORIES_QUERY
  }).then(result => { console.log("category query", result); return result.data; });

  //if (categories && categories.length == 0) {
    categories = getCategories(destinos);
    console.log('inserting to cache', Object.keys(categories));
    console.log('categoriesVar', categoriesVar());
    categoriesVar(Object.keys(categories));
    console.log('categoriesVar', categoriesVar());
 // }

  console.log("cat", Object.keys(categories));

  if (category)
    return [destinos.filter(d => d.category === category), Object.keys(categories)];
  else
    return [destinos, Object.keys(categories)];
};

export default fetchFromCMS


function getCategories(destinos) {
  const categories = {};
  destinos.forEach(d => {
    if (!categories[d.category])
      categories[d.category] = [];
    categories[d.category].push(d);
  });
  return categories;
}

