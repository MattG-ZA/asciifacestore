import React from 'react';
import './ProductCard.css';
import Face from './ui/Face';
import Details from './ui/Details';

class ProductCard extends React.Component {
    render() {
        const { product } = this.props;

        return (
            <div className='card'>
                <Face product={product} />
                <Details product={product} />
            </div>
        );
    }
}

export default ProductCard;