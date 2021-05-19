import Layout from '../components/Layout';
import fetchFromCMS from '../lib/graphcms-apollo';
import Destinos from '../components/Destinos';
import { initializeApollo } from "../lib/apollo-client"
import { useInterval } from '../hooks/useInterval'
import { useState } from 'react';

export async function getStaticProps() {
  const apolloClient = initializeApollo();
  const [destinos, categories] = await fetchFromCMS();
  return {
    props: { destinos, categories, initialApolloState: apolloClient.cache.extract() },
    revalidate: 1800,
  };
}

const sort = (list) => [...list].sort((a, b) => 0.5 - Math.random());

export default function Home({ destinos, categories }) {
  const [list, setList] = useState(sort(destinos));
  const delay = 6000;

  useInterval(() => {
    setList(sort(list));
  }, delay)

  return (
    <Layout categories={categories}>
      <div className='jumbotron jumbotron-fluid'>
        <div className='text-center m-1'>
          <h1 className='display-3'>❤️ Los Destinos desde Lucerna en🇨🇭❤️</h1>
          <p className='lead'>ideas de excursiones e itinerarios y cosas suizas</p></div>
      </div>
      <div className="row justify-content-start text-center ">
        <Destinos destinos={list} />
      </div>
    </Layout>
  );
}