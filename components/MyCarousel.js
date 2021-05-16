import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import Image from "next/image"

const MyCarousel = ({ destino, width, height }) => {
    return (
        <div className='container-fluid mb-5' >
            <Carousel fade>
                <Carousel.Item key={destino.image.id} interval={2000}>
                    <Image src={destino.image.url} className="d-block w-100" alt={destino.image.url} width={width} height={height} />
                </Carousel.Item>
                {destino.more && destino.more.filter(d=>d.width>d.height).map(d => {
                    return (
                        <Carousel.Item key={d.id} interval={2000}>
                            <Image src={d.url} className="d-block w-100" alt={d.url} width={width} height={height} />
                        </Carousel.Item>)
                })}
            </Carousel>
        </div >
    )
}


export default MyCarousel;