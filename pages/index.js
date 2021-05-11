import Layout from '../components/Layout';
import fetchFromCMS, { fetchCategoriesFromCMS } from '../lib/graphcmsService';
import Image from 'next/image';
import Link from 'next/link';

export async function getStaticProps() {
  const destinos = await fetchFromCMS();
  const categories = await fetchCategoriesFromCMS();
  return {
    props: { destinos, categories },
    revalidate: 30,
  };
}

export default function Home({ destinos, categories }) {
  console.log("data", destinos);
  return (
    <Layout categories={categories}>
      <div className="entries">
        <div className="row justify-content-start ">
          {destinos && destinos.map(d => (
            <div className="col-md-6">
              <div className="entry mb-3">
                <Link as={`/articles/${d.slug}`} href={`/articles/${d.slug}`} key={d.slug}>
                  <div className="main-image">
                    <Image
                      src={d.image.url}
                      width={600}
                      height={400}
                      alt={d.Destino}
                    />
                    <h1 className='text-center'>{d.Destino}</h1>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}