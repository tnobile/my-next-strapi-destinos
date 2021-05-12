import Layout from '../components/Layout';
import fetchFromCMS from '../lib/graphcms';
import Destinos from '../components/Destinos';

export async function getStaticProps() {
  const [destinos, categories] = await fetchFromCMS();
  return {
    props: { destinos, categories },
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
          <p1 className='lead'>Excursion ideas/itinesaries</p1></div>
      </div>
      <div className="row justify-content-start ">
        <Destinos destinos={destinos} />
      </div>
    </Layout>
  );
}