import React from 'react';
import './ProductCard.css';

class ProductCard extends React.Component {
    render() {
        const { product } = this.props;

        return (
            <div className='card'>
                { product.face }
            </div>
        );
    }
}

export default ProductCard;