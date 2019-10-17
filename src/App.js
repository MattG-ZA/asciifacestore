import React, { Component } from 'react';
import ProductsPage from './components/ProductsPage/ProductsPage';
import Header from './components/Header/Header';

class App extends Component {
    render() {
        return (
            <span>
                <Header />
                <ProductsPage />
            </span>
        );
    }
}

export default App;