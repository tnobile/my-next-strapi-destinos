import Image from 'next/image';
import Link from 'next/link';

const Destino = ({ width, height, d }) => {
    return (
        <div>
            <Link as={`/articles/${d.slug}`} href={`/articles/${d.slug}`} key={d.slug}>
                <Image
                    src={d.image.url}
                    width={width ?? 300}
                    height={height ?? 200}
                    alt={d.Destino} />
            </Link>
            <h4 className='text-center'>{d.name}</h4>
        </div>
    )
}

export default Destino;