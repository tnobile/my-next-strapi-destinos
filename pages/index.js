import Layout from '../components/Layout';
import fetchFromCMS from '../lib/graphcms-apollo';
import Destinos from '../components/Destinos';
import { initializeApollo } from "../lib/apollo-client"

export async function getStaticProps() {
  const apolloClient = initializeApollo();
  const [destinos, categories] = await fetchFromCMS();
  return {
    props: { destinos, categories,  initialApolloState: apolloClient.cache.extract()},
    //revalidate: 60,
  };
}

export default function Home({ destinos, categories }) {
  //console.log("data", destinos);
  return (
    <Layout categories={categories}>
      <div className='jumbotron jumbotron-fluid'>
        <div className='container text-center m-1'>
          <h1 className='display-2'>❤️ Los Destinos desde Lucerna en🇨🇭❤️</h1>
          <p1 className='lead'>ideas de excursiones e itinerarios y cosas suizas</p1></div>
      </div>
      <div className="row justify-content-start ">
        <Destinos destinos={[...destinos].sort((a,b)=> 0.5 - Math.random())} />
      </div>
    </Layout>
  );
}