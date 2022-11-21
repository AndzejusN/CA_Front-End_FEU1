export default function googleMap(props) {
    let mapContainer = document.createElement('div');
    mapContainer.style.width = '600px';
    mapContainer.style.height = '450px';

    mapContainer.innerHTML = `<iframe src="${props.linkSrc}" ${props.style}></iframe>`;

    return mapContainer;
}