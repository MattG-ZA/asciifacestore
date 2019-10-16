import React from 'react';
import Header from '../Header/Header';
import ProductsContainer from '../ProductsContainer/ProductsContainer';

class ProductsPage extends React.Component {
    render() {
        return (
            <span>
                <Header />
                <ProductsContainer />
            </span>
        );
    }
}

export default ProductsPage;