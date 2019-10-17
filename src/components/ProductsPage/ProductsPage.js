import React from 'react';
import ProductsContainer from '../ProductsContainer/ProductsContainer';
import SortButtons from '../SortButtons/SortButtons';

class ProductsPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            products: [],
            sort: null,
            page: 1,
            loading: true,
            endOfCatalogue: false,
            cachedBatch: [],
        };

        this.SortProducts = this.SortProducts.bind(this);
    }

    // Function for getting products from either the API or the cache
    FetchProducts(page = this.state.page, sort = this.state.sort, isSorting = false) {
        // If there is cached data, load it and clear cache
        if (this.state.cachedBatch.length > 0 && !isSorting) {
            this.setState({
                products: this.state.products.concat(this.state.cachedBatch),
                cachedBatch: [],
            });
        }
        else {
            this.setState({ loading: true });

            // If sorting, set limit to total products that should be displayed
            const limit = isSorting ? this.state.page * 10 : 10;

            fetch(`http://localhost:3000/products?_page=${page}&_limit=${limit}&_sort=${sort}`)
                .then(response => response.json())
                .then(json => this.setState({
                    // If sorting, load products from scratch, else append next batch
                    products: isSorting ? json : this.state.products.concat(json),
                    loading: false,
                    endOfCatalogue: page === 50 || limit === 500 ? true : this.state.endOfCatalogue,
                    // Clear the cache here since it will be old now
                    cachedBatch: [],
                }));
        }
    }

    // Function for getting next batch of products and keeping in reserve
    CacheNextBatch(page = this.state.page + 1, sort = this.state.sort) {
        fetch(`http://localhost:3000/products?_page=${page}&_limit=10&_sort=${sort}`)
            .then(response => response.json())
            .then(json => this.setState({
                cachedBatch: json,
            }));
    }

    // Callback function for when a sort button is clicked
    SortProducts(sort) {
        this.setState({ sort });
        this.FetchProducts(1, sort, true);
    }

    // Function attached to scroll event
    runOnScroll = (event) => {
        const scrollHeight = event.target.scrollingElement.scrollHeight;
        const clientHeight = event.target.scrollingElement.clientHeight;
        const scrollTop = event.target.scrollingElement.scrollTop;

        // Check if scroll is at bottom of screen and more data isn't already being loaded
        if (scrollHeight - clientHeight === scrollTop && !this.state.loading) {
            this.setState({ page: this.state.page + 1 });

            if (!this.state.endOfCatalogue) {
                this.FetchProducts();

                // If there are no products cached, get the next batch
                if (this.state.cachedBatch.length === 0) {
                    this.CacheNextBatch();
                }
            }
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.runOnScroll);

        // Get initial load of products and cached products
        this.FetchProducts();
        this.CacheNextBatch();
    }

    render() {
        return (
            <span>
                <SortButtons SortProducts={this.SortProducts} />
                <ProductsContainer
                    products={this.state.products}
                    loading={this.state.loading}
                    endOfCatalogue={this.state.endOfCatalogue}
                />
            </span>
        );
    }
}

export default ProductsPage;