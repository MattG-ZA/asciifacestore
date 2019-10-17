import React from 'react';
import '../ProductCard.css';

class Details extends React.Component {
    // Function to format the price
    CalculatePriceDisplay(price) {
        return '$' + (price / 100).toFixed(2);
    }

    // Function to format the date
    CalculateDateDisplay(date) {
        // hours * minutes * seconds * milliseconds
        const oneDay = 24 * 60 * 60 * 1000;
        const firstDate = new Date();
        const secondDate = new Date(date);

        // Get the difference between the 2 dates
        const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));

        // Format the date to make it easier to read
        let displayDate = secondDate.toLocaleDateString();

        if (diffDays <= 7) {
            displayDate = diffDays + ' days ago';
        }

        return displayDate;
    }

    render() {
        const { product } = this.props;

        return (
            <div className='faceDetails'>
                <div>
                    {this.CalculatePriceDisplay(product.price)}
                </div>
                <div>
                    {this.CalculateDateDisplay(product.date)}
                </div>
            </div>
        );
    }
}

export default Details;