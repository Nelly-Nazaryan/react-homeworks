import PropTypes from "prop-types"
import React, { Component } from 'react'
import Card from '../Card';

import './styles.css'

export default class CardsContainer extends Component {
    render() {
        const { cardsData } = this.props;
        return (
            <div className="cardsContainer">
                {
                    cardsData.map(({ src, name, description, price }) => 
                        <Card 
                            key={src + name} 
                            imageSrc={src} 
                            name={name}
                            price={price}
                            description={description}
                        />
                    )
                }
            </div>
        )
    }
}

CardsContainer.propTypes = {
  cardsData: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired, 
    description: PropTypes.string.isRequired, 
    price: PropTypes.number.isRequired
  }))
}

CardsContainer.defaultProps = {
    cardsData: []
}