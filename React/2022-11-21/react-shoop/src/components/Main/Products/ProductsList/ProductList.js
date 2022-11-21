import './ProductList.css';

const ProductList = ({ data }) => {
    const productsList = data.map((element, index) =>
        <ul key={index} className="main-menu">
            <li className="menu-item">{element.title}</li>
        </ul>);

    return (
        <>
            {productsList}
        </>
    );
}


export default ProductList;