import React from 'react'
import listingData from './Listing.const'
import Item from './Item';

export default function Listing(props) {
    console.log(listingData)

    return (
        <div className='item-list'>
            {listingData.map((item) => <Item
                key={item.listing_id}
                url={item.url}
                MainImage={item.MainImage}
                title={item.title}
                currency_code={item.currency_code}
                price={item.price}
                quantity={item.quantity}
            />)}
        </div>
    )
}

Listing.defaultProps = {
    items: []
}
