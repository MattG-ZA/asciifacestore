import React from 'react';
import image from '../../../images/DownChevron.svg'

class Button extends React.Component {
    render() {
        const { label, SortProducts } = this.props;

        return (
            <button className='button ripple' onClick={() => SortProducts(label)}>
                {label}
                <img className='buttonIcon' src={image}></img>
            </button>
        );
    }
}

export default Button;