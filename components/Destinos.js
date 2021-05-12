import Image from 'next/image';
import Link from 'next/link';

const Destinos = ({ destinos }) => {
    return (
        destinos && destinos.map(d => (
            <div className="col-md-3">
                <div className="mb-3">
                    <Link as={`/articles/${d.slug}`} href={`/articles/${d.slug}`} key={d.slug}>
                        <div className="">
                            <Image
                                src={d.image.url}
                                width={300}
                                height={200}
                                alt={d.Destino}
                            />
                            <h3 className='text-center'>{d.name}</h3>
                        </div>
                    </Link>
                </div>
            </div>
        ))
    )
}

export default Destinos