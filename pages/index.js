import Layout from '../components/Layout';
import fetchFromCMS, { fetchCategoriesFromCMS } from '../lib/graphcmsService';
import Image from 'next/image';
import Link from 'next/link';

export async function getStaticProps() {
  const destinos = await fetchFromCMS();
  const categories = await fetchCategoriesFromCMS();
  return {
    props: { destinos, categories },
    //revalidate: 30,
  };
}

export default function Home({ destinos, categories }) {
  console.log("data", destinos);
  return (
    <Layout categories={categories}>
      <div className='jumbotron jumbotron-fluid'>
        <div className='container text-center m-1'>
          <h1 className='display-2'>Lucerne in 🇨🇭</h1>
          <p1 className='lead'>Excursion ideas/itinesaries</p1></div>
      </div>
    </Layout>
  );
}