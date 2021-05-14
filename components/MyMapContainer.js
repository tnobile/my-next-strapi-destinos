const MyMapContainer = ({ destino, zoom }) => {
    return (
        <div className="text-center m-2">
            <h3>{destino.duration}h</h3>
            <iframe src={`https://maps.google.com/maps?q=${destino.location[0].latitude},${destino.location[0].longitude}&z=${zoom ?? 7}&output=embed`} height="450" width="700"></iframe>
        </div>
    )
}


export default MyMapContainer;