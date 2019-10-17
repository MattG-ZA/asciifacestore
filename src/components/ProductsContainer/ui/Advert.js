import React from 'react';
import '../ProductsContainer.css';

class Advert extends React.Component {
    render() {
        const { ad } = this.props;
        
        return <img className='ad' src={`http://localhost:3000/ads/?r=${ad}`} />;
    }
}

export default Advert;