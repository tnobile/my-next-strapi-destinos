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
      <div className="entries">
        <div className="row justify-content-start ">
          {destinos && destinos.map(d => (
            <div className="col-md-6">
              <div className="mb-3">
                <Image
                  src={d.image.url}
                  width={600}
                  height={400}
                  alt={d.Destino}
                />
                <h3 className='text-center'>{d.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}