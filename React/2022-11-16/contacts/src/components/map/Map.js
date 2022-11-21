import './Map.css';

function Map(props) {

    return (<div className="map-wrapper">
        <iframe src={props.srcMap} title={props.frameTitle} loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
    )
}

export default Map;