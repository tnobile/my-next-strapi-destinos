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

const sortList = (list) => [...list].sort((a, b) => 0.5 - Math.random());

const swapList = (list) => {
  let a = Math.floor(Math.random() * list.length);
  let b = Math.floor(Math.random() * list.length);
  //console.log(a, b);
  const tmp = [...list];
  tmp[a] = list[b];
  tmp[b] = list[a];
  return tmp;
}

export default function Home({ destinos, categories }) {
  const [list, setList] = useState(sortList(destinos));
  const delay = 30000;

  useInterval(() => {
    setList(sortList(list));
    //setList(swapList(list));
  }, delay)

  return (
    <Layout categories={categories}>
      <div className='jumbotron jumbotron-fluid'>
        <div className='text-center m-1'>
          <h1 className='display-3'>❤️ Los Destinos desde Lucerna en🇨🇭 ❤️</h1>
          <div className='lead p-2'>ideas de excursiones e itinerarios y cosas suizas
          <input className="px-1 mx-2" placeholder='search' />
          </div>
        </div>
      </div>
      <div className="row justify-content-start text-center ">
        <Destinos destinos={list} />
      </div>
    </Layout>
  );
}