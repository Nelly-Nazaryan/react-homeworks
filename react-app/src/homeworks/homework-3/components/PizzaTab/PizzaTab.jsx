import React, { Component } from 'react'
import CardsContainer from '../CardsContainer'

const pizzas = [
    {
        src: 'https://back.tashirpizza.am/images/product/3602c6ec9fd0e25d8c83c7fab79cb4b6.jpg',
        name: 'Altono',
        price:  490,
        description: 'semi- smoked sausage, ham, cheese, white sauce "Majorio"...',
    },
    {
        src: 'https://back.tashirpizza.am/images/product/bd540cd2b210449a5da7343499269c5c.jpg',
        name: 'Corrida',
        price:  450,
        description: 'Beef, mushrooms, cheese, white sauce Majorio...',
    },
    {
        src: 'https://back.tashirpizza.am/images/product/55d634a53ed3adbddb466ebb677b5125.jpg',
        name: 'Toscana',
        price:  560,
        description: 'bacon, smoked pork fillet, hot and Bulgarian pepper, tomatoes, cheese',
    },
    {
        src: 'https://back.tashirpizza.am/images/product/76166cea454e5db54670e21b859f93fc.jpg',
        name: 'Venice',
        price:  589,
        description: 'Mushrooms, chicken brisket, cheese, white sauce Majorio...',
    },
    {
        src: 'https://back.tashirpizza.am/images/product/1752faea3f678c37472f0b7b2f4628ee.jpg',
        name: 'Caesar',
        price:  490,
        description: 'semi- smoked sausage, ham, cheese, white sauce "Majorio"...',
    },
    {
        src: 'https://back.tashirpizza.am/images/product/3602c6ec9fd0e25d8c83c7fab79cb4b6.jpg',
        name: 'Altono 2',
        price:  495,
        description: 'semi- smoked sausage, ham, cheese, white sauce "Majorio"...',
    }
]

export default class PizzaTab extends Component {
  render() {
    return (
      <CardsContainer cardsData={pizzas} />
    )
  }
}
