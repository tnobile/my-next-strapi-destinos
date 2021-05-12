import Destino from "./Destino"

const Destinos = ({ destinos }) => {
    return (
        destinos && destinos.map(d =>
            <div className="col-md-3">
                <div className="mb-3">
                    <Destino d={d} />
                </div>
            </div>
        )
    )
}

export default Destinos