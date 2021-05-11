import Layout from '../../components/Layout';
import Image from 'next/image';
import fetchFromCMS, { getMedia } from '../../lib/service';
import processMarkdown from '../../lib/processMarkdown';

/** 
 * https://medium.com/swlh/lets-create-portfolio-app-with-next-js-strapi-headless-cms-and-bootstrap-5-fac7d9578bbd 
 */
const PortfolioItem = ({ destino }) => {
    console.log('dest', destino);
    return (
        <Layout>
            <div className="row">
                <div className="portfolio-image text-center mb-4">
                    <div className="col-md-12">
                        <Image
                            src={getMedia(destino.image)}
                            width={destino.image.width}
                            height={destino.image.height}
                        />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="portfolio-content">
                    <div className="col-md-12">
                        <div className="portfolio-headline text-center m-2">
                            <h1>{destino.destino}</h1>
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: destino.content }} />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export async function getStaticPaths() {
    const destinos = await fetchFromCMS('/destinos');
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
    const destino = await fetchFromCMS(`/destinos?slug=${params.slug}`);
    const content = await processMarkdown(destino[0]);
    return {
        props: { destino: { ...destino[0], content: content } },
        revalidate: 1,
    };
}

export default PortfolioItem;