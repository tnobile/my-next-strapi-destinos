import Layout from '../components/Layout';
import fetchFromCMS from '../lib/graphcms-apollo';
import Destinos from '../components/Destinos';
import { initializeApollo } from "../lib/apollo-client"
import { useInterval } from '../hooks/useInterval'
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { loadDestinos } from '../features/allDestinos/allDestinosSlice'
import { setCategories } from '../features/category/categorySlice'
import SearchTerm from '../components/SearchTerm/SearchTerm';

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
  const dispatch = useDispatch();

  useInterval(() => {
    setList(sortList(list));
    //setList(swapList(list));
  }, delay)

  useEffect(() => {
    dispatch(loadDestinos(list));
    console.log("useEffect categories", categories);
    dispatch(setCategories(categories));
  }, [list, categories])

  return (
    <Layout categories={categories} >
      <div className='jumbotron jumbotron-fluid' style={{"background-color":"white"}}>
        <div className='text-center m-1'>
          <h1 className='display-4'>❤️ Los Destinos desde Lucerna🇨🇭 ❤️</h1>
          <div className="row">
            <div className='col-xs-12 col-md-6'>
              <div className='lead text-center m-1 text-danger' >Alugnas ideas de excursiones e itinerarios y cosas suizas</div>
            </div>
            <div className='col-xs-12 col-md-6'>
              <SearchTerm />
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-start text-center ">
        <Destinos destinos={list} />
      </div>
    </Layout>
  );
}