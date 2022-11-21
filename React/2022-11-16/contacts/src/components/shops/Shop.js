import './Shop.css';


function Shop(props) {
    return (
        <div className="shop">
            <h3 className="shop-title">{props.shopName}</h3>
            <ul className="shop-address-list">
                <li>Phone: <a href={`tel:${props.shopPhone}`}>{props.shopPhone}</a></li>
                <li>Email: <a href={`mailto:${props.shopEmail}`}>{props.shopEmail}</a></li>
                <li>Address: <a href={props.linkGoogle}>{props.address}</a></li>
            </ul>
        </div>
    );
}

export default Shop;