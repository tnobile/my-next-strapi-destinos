import Layout from '../../components/Layout';
import Image from 'next/image';
import fetchFromCMS, { fetchOneFromCMS } from '../../lib/graphcms';
import processMarkdown from '../../lib/processMarkdown';

/** 
 * https://medium.com/swlh/lets-create-portfolio-app-with-next-js-strapi-headless-cms-and-bootstrap-5-fac7d9578bbd 
 * https://github.com/GraphCMS/graphcms-examples/blob/master/with-nextjs/src/pages/products/%5Bslug%5D.js
 */
const PortfolioItem = ({ destino, categories }) => {
    //console.log('dest', destino);
    return (
        <Layout categories={categories}>
            <h1 className='display-3 m-1 text-center'>{destino.name}</h1>
            <div className="row m-1">
                <div className="portfolio-image text-center mb-1">
                    <div className="col-md-12">
                        <Image
                            src={destino.image.url}
                            width={destino.width ?? 800}
                            height={destino.height ?? 600}
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="portfolio-headline text-center m-2">
                        <h3>{destino.location[0].longitude}</h3>
                        <h3>{destino.location[0].latitude}</h3>
                        <h3>{destino.duration}h</h3>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: destino.description }} />
                </div>
            </div>
        </Layout>
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
    const content = await processMarkdown(destino[0].description);

    return {
        props: {
            destino: { ...destino[0], description: content },
            categories: categories,
        },
        //revalidate: 60,
    };
}

export default PortfolioItem;