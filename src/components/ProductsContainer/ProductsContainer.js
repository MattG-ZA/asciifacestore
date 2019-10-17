import React from 'react';
import './ProductsContainer.css';
import ProductRow from './ui/ProductRow';
import LoadingIndicator from './ui/LoadingIndicator';
import EndIndicator from './ui/EndIndicator';

class ProductsWrapper extends React.Component {
    CreateGrid(products ) {
        const grid = [];
        let row = [];
        let counter = 0;

        products.forEach((product) => {
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

        return grid;
    }

    render() {
        const { products, loading, endOfCatalogue } = this.props;

        const grid = this.CreateGrid(products);

        return (
            <span>
                <span className='container'>
                    {
                        grid.map((row, index) => {
                            return <ProductRow key={index} row={row} />;
                        })
                    }
                    {
                        loading && <LoadingIndicator />
                    }
                    {
                        endOfCatalogue && <EndIndicator />
                    }
                </span>
            </span>
        );
    }
}

export default ProductsWrapper;