import React from 'react'
import PropTypes from 'prop-types'

export default function Item(props) {
    const { listing_id, url, MainImage, title, currency_code, price, quantity } = props;

    const getTitle = () => {
        if (!title) {
            return;
        } else if (title.length > 50) {
            return title.slice(0, 50) + '...'
        }
        return title;
    }

    const getCurrentPrice = () => {
        let currentPrice = `${price} GBP`;
        if (currency_code === 'USD') {
            currentPrice = `$ ${price}`;
        } else if (currency_code === 'EUR') {
            currentPrice = `€ ${price}`;
        }
        return currentPrice
    }

    const setClassLevel = () => {
        let classLevel = 'high';
        if (quantity <= 10) {
            classLevel = 'low'
        } else if (quantity <= 20) {
            classLevel = 'medium'
        }
        return `item-quantity level-${classLevel}`
    }

    return (
        <div className="item" key={listing_id}>
            <div className="item-image">
                <a href={url}>
                    <img src={MainImage ? MainImage.url_570xN : ''} alt={title} />
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{getTitle(title)}</p>
                <p className="item-price">{getCurrentPrice()}</p>
                <p className={setClassLevel()}>{quantity} left</p>
            </div>
        </div>
    )
}

Item.propTypes = {
    listing_id: PropTypes.number,
    url: PropTypes.string,
    MainImage: PropTypes.object,
    title: PropTypes.string,
    currency_code: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number
}

// listing_id — уникальный идентификатор предложения, число;
// url — ссылка на предложение, строка;
// MainImage — информация об изображении, объект, нам необходимо использовать свойство url_570xN для получения адреса главной картинки, строка;
// title — название предложения, строка;
// currency_code — код валюты, строка;
// price — цена, строка;
// quantity — доступное количество, число.

