import React from 'react';
import '../ProductsContainer.css';
import ProductCard from '../../ProductCard/ProductCard';

class ProductRow extends React.Component {
    render() {
        const { row } = this.props;

        return (
            <div className='row'>
                {
                    row.map((product, index) => {
                        return <ProductCard key={index} product={product} />;
                    })
                }
            </div>
        );
    }
}

export default ProductRow;