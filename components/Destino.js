import Image from 'next/image';
import Link from 'next/link';

const Destino = ({ width, height, d }) => {
    return (
        <div>
            <Link as={`/articles/${d.slug}`} href={`/articles/${d.slug}`}>
                <Image
                    src={d.image.url}
                    width={width ?? 300}
                    height={height ?? 200}
                    alt="" />
            </Link>
            <div className='h6 text-center'>{d.name}</div>
        </div>
    )
}

export default Destino;