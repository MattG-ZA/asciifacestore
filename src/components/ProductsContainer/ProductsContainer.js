import React from 'react';
import './ProductsContainer.css';
import ProductRow from './ui/ProductRow';
import SortButtons from '../SortButtons/SortButtons';

class ProductsWrapper extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
        };

        this.SortProducts = this.SortProducts.bind(this);
    }

    CreateGrid() {
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

        return grid;
    }

    FetchProducts(type) {
        fetch(`http://localhost:3000/products?_page=1&_limit=10&_sort=${type}`)
            .then(response => response.json())
            .then(json => this.setState({ products: json }));
    }

    SortProducts(type) {
        this.FetchProducts(type);
    }

    componentDidMount() {
        this.FetchProducts(null);
    }

    render() {
        const grid = this.CreateGrid();

        return (
            <span>
                <SortButtons SortProducts={this.SortProducts} />
                <span className='container'>
                    {
                        grid.map((row, index) => {
                            return (
                                <ProductRow key={index} row={row} />
                            );
                        })
                    }
                </span>
            </span>
        );
    }
}

export default ProductsWrapper;