import React from 'react';
import '../ProductCard.css';

class Face extends React.Component {
    render() {
        const { product } = this.props;

        return (
            <span className='face' style={{ fontSize: product.size }}>
                {product.face}
            </span>
        );
    }
}

export default Face;