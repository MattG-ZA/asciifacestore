import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductsContainer.css';

class ProductsWrapper extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
        };
    }

    componentDidMount() {
        fetch('http://localhost:3000/products?_limit=10') // /api/products?_page=10&_limit=15
            .then(response => response.json())
            .then(json => this.setState({ products: json }));
    }

    render() {
        const grid = [];
        let row = [];
        let counter = 0;

        this.state.products.forEach((product) => {
            counter++;

            row.push(product);

            // Add 5 products per row, then push the row to the grid and start a new row
            if (counter === 5) {
                grid.push(row);
                row = [];
                counter = 0;
            }
        });

        // Add any remainders
        if (row.length > 0) {
            grid.push(row);
        }

        console.log('grid', grid);

        return (
            <span className='container'>
                {
                    grid.map((row, index) => {
                        return (
                            <div key={index} style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                                {
                                    row.map((product, index) => {
                                        return <ProductCard key={index} product={product} />;
                                    })
                                }
                            </div>
                        );
                    })
                }
            </span>
        );
    }
}

export default ProductsWrapper;