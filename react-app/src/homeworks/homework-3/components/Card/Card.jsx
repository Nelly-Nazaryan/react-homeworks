import PropTypes from 'prop-types';
import React, { Component } from 'react'
import './styles.css'

export default class Card extends Component {
  render() {
    const { 
        imageSrc, 
        name,
        description,
        price
    } = this.props;
    return (
      <div className='card'>
        <img src={imageSrc} alt="" />
        <h4>{name}</h4>
        <p>{description}</p>
        <p>{price}</p>
      </div>
    )
  }
}

Card.propTypes = {
    imageSrc: PropTypes.string.isRequired, 
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}
