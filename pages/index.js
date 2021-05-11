import Layout from '../components/Layout';
import fetchFromCMS, { getApiUrl } from '../lib/service';
import Image from 'next/image';
import Link from 'next/link';

export async function getStaticProps() {
  const destinos = await fetchFromCMS('destinos');
  return {
    props: { destinos },
    revalidate: 30,
  };
}

export default function Home({ destinos }) {
  console.log("data", destinos);
  return (
    <Layout>
      <div className="entries">
        <div className="row justify-content-start ">
          {destinos && destinos.map(d => (
            <div className="col-md-6">
              <div className="entry mb-3">
                <Link as={`/articles/${d.slug}`} href="/articles/[id]">
                  <div className="main-image">
                    <Image
                      src={getApiUrl(d.image.url)}
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