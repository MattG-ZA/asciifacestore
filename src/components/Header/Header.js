import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Products Grid</h1>

                <p>Here you're sure to find a bargain on some of the finest ascii available to purchase. Be sure to peruse our
                selection of ascii faces in an exciting range of sizes and prices.</p>

                <p>But first, a word from our sponsors:</p>

                <img className="ad" src={`http://localhost:3000/ads/?r=${Math.floor(Math.random() * 1000)}`} />
            </div>
        );
    }
}

export default Header;