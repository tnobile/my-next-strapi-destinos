import Layout from '../../components/Layout';
import fetchFromCMS, { fetchOneFromCMS } from '../../lib/graphcms-apollo';
import processMarkdown from '../../lib/processMarkdown';
import MyMapContainer from '../../components/MyMapContainer';
import MyCarousel from '../../components/MyCarousel';
import Image from 'next/image'

/** 
 * https://medium.com/swlh/lets-create-portfolio-app-with-next-js-strapi-headless-cms-and-bootstrap-5-fac7d9578bbd 
 * https://github.com/GraphCMS/graphcms-examples/blob/master/with-nextjs/src/pages/products/%5Bslug%5D.js
 */

const getWidth = w => w ?? 1000;
const getHeight = h => h ?? 600;

const PortfolioItem = ({ destino, categories }) => {
    console.log('dest', destino);
    return (
        <Layout categories={categories}>
            {destino?.name &&
                <div className="container">
                    <div className='row'>
                        <div className='col display-4 text-center'>{destino.name} {destino.region ? ` in ${destino.region}` : ''}</div>
                    </div>
                    <div className="row">
                        <div className="col text-center">
                            <MyCarousel destino={destino} width={getWidth(destino.width)} height={getHeight(destino.height)} />
                        </div>
                    </div>
                    <div className="row m-3">
                        <div className="col text-center display-4 m-1" dangerouslySetInnerHTML={{ __html: destino.description }} />
                    </div>
                    <div className="row m-3">
                        {destino.content && <div className="col border border-primary border-2 p-3" dangerouslySetInnerHTML={{ __html: destino.content }} />}
                    </div>
                    <div className="row justify-content-start m-2">
                        {destino.more && [...destino.more].sort((a, b) => 0.5 - Math.random()).map(d =>
                            <div className="col-md-3" key={d.id}>
                                <div className="mb-1">
                                    <Image src={d.url} width={300} height={200} alt='' />
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="row">
                        <MyMapContainer className="col" destino={destino} width={getWidth(destino.width)} height={getHeight(destino.height)} />
                    </div>
                </div>
            }
        </Layout >
    );
};

export async function getStaticPaths() {
    const [destinos] = await fetchFromCMS();
    return {
        paths: destinos.map(d => ({
            params: {
                slug: d.slug,
            },
        })),
        fallback: true,
    };
}

export async function getStaticProps({ params }) {
    const [destino, categories] = await fetchOneFromCMS({ params });
    const content = await processMarkdown(destino[0]?.content);
    const desc = await processMarkdown(destino[0]?.description);

    return {
        props: {
            destino: { ...destino[0], description: desc, content: content },
            categories: categories,
        },
        revalidate: 1800,
    };
}

export default PortfolioItem;
