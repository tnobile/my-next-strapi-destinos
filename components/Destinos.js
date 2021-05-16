import Destino from "./Destino"

const Destinos = ({ destinos }) => {
    return (
        destinos && destinos.map(d =>
            <div className="col-md-3 col-xs-6">
                <div className="mb-1">
                    <Destino d={d} key={d.id} />
                </div>
            </div>
        )
    )
}

export default Destinos