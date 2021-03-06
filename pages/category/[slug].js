import Destinos from "../../components/Destinos";
import Layout from "../../components/Layout";
import fetchFromCMS from '../../lib/graphcms-apollo'
import { useDispatch } from 'react-redux'
import { setSelected } from '../../features/category/categorySlice'
import { setSearchTerm } from '../../features/searchTerm/searchTermSlice'
import { useEffect } from "react"

const CategoryItem = ({ category, destinos, categories }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSelected(category));
        dispatch(setSearchTerm(''));
    }, [category])

    return (
        <Layout categories={categories}>
            <div className='jumbotron jumbotron-fluid'>
                <div className='container-fluid text-center m-1'>
                    <h1 className='display-2'>❤️🇨🇭 {category} 🇨🇭❤️</h1>
                </div>
            </div>
            <div className="row justify-content-start ">
                <Destinos destinos={[...destinos].sort((a, b) => a.name.localeCompare(b.name))} />
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const [destinos, categories] = await fetchFromCMS();
    console.log('static paths in category', categories);
    return {
        paths: categories.map(c => ({
            params: {
                slug: c,
            },
        })),
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const [destinos, categories] = await fetchFromCMS(params.slug);
    return {
        props: {
            category: params.slug,
            destinos,
            categories,
        },
        revalidate: 1800,
    };
}

export default CategoryItem;