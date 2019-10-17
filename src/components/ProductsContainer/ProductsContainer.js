import React from 'react';
import './ProductsContainer.css';
import ProductRow from './ui/ProductRow';
import LoadingIndicator from './ui/LoadingIndicator';
import EndIndicator from './ui/EndIndicator';
import Advert from './ui/Advert';

class ProductsWrapper extends React.Component {
    // Function for creating the products grid, with 5 products per row
    CreateGrid(products) {
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
        const { products, loading, endOfCatalogue, ads } = this.props;

        const grid = this.CreateGrid(products);
        let adCounter = 0;

        return (
            <span>
                <span className='container'>
                    {
                        grid.map((row, index) => {
                            // Since there are 5 products per row, every 4th row will be 20 products
                            const showAd = (index + 1) % 4 === 0;
                            let ad = null;

                            if (showAd) {
                                ad = ads[adCounter];
                                adCounter++;
                            }

                            return (
                                <span>
                                    <ProductRow key={index} row={row} />
                                    {
                                        showAd && <span className='adContainer'>
                                            <Advert ad={ad} />
                                        </span>
                                    }
                                </span>
                            );
                        })
                    }
                    {loading && <LoadingIndicator />}
                    {endOfCatalogue && <EndIndicator />}
                </span>
            </span>
        );
    }
}

export default ProductsWrapper;