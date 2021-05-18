import Destino from "./Destino"

const Destinos = ({ destinos }) => {
    return (
        destinos && destinos.map((d, i) =>
            i < 3 ?
                < div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-xs-12" >
                    <Destino d={d} key={d.id} width={600} height={400} />
                </div >
                :
                < div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-12" >
                    <Destino d={d} key={d.id} />
                </div >
        ))
}

export default Destinos