import Layout from '../../components/Layout';
import Image from 'next/image';
import fetchFromCMS, { fetchOneFromCMS } from '../../lib/graphcms-apollo';
import processMarkdown from '../../lib/processMarkdown';
import MyMapContainer from '../../components/MyMapContainer';
import MyCarousel from '../../components/MyCarousel';

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
            <div className="row">
                <h1 className='display-3 text-center'>{destino.name} {destino.region ? ` in ${destino.region}` : ''}</h1>
            </div>
            <div className="row text-center">
                <MyCarousel destino={destino} width={getWidth(destino.width)} height={getHeight(destino.height)} />
            </div>
            <div className="row">
                <div className="text-center display-6" dangerouslySetInnerHTML={{ __html: destino.description }} />
                <div className="p-2 border border-primary border-2" dangerouslySetInnerHTML={{ __html: destino.content }} />
            </div>
            <div className="row">
                <MyMapContainer destino={destino} width={getWidth(destino.width)} height={getHeight(destino.height)} />
            </div>
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
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const [destino, categories] = await fetchOneFromCMS({ params });
    const content = await processMarkdown(destino[0].content);
    const desc = await processMarkdown(destino[0].description);

    return {
        props: {
            destino: { ...destino[0], description: desc, content: content },
            categories: categories,
        },
        //revalidate: 60,
    };
}

export default PortfolioItem;