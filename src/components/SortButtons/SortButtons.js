import React from 'react';
import './SortButtons.css';
import Button from './ui/Button';

class SortButtons extends React.Component {
    render() {
        const { SortProducts } = this.props;

        return (
            <div className='sortButtons'>
                <Button label={'size'} SortProducts={SortProducts} />
                <Button label={'price'} SortProducts={SortProducts} />
                <Button label={'id'} SortProducts={SortProducts} />
            </div>
        );
    }
}

export default SortButtons;