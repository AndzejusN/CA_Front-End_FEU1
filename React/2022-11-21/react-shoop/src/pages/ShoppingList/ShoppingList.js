import './ShoppingList.css';

import ProductList from '../../components/Main/Products/ProductsList/ProductList';

const ShoppingList = () => {

    const productList = [
        {
            'title': 'Product 1',
            'done': false
        },
        {
            'title': 'Product 2',
            'done': false
        },
        {
            'title': 'Product 3',
            'done': false
        },
        {
            'title': 'Product 4',
            'done': false
        },
        {
            'title': 'Product 5',
            'done': false
        }
    ]

    return (
        (productList.length === 0) ? 'Your shopping list is empty.' : <ProductList data={productList} />
    );
}


export default ShoppingList;