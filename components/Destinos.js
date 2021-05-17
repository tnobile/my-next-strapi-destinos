import Destino from "./Destino"

const Destinos = ({ destinos }) => {
    return (
        destinos && destinos.map(d =>
            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12">
                <Destino d={d} key={d.id} />
            </div>
        )
    )
}

export default Destinos