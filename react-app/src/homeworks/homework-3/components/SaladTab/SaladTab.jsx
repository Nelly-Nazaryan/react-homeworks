import React, { Component } from 'react'
import CardsContainer from '../CardsContainer'

const salads = [
    {
        src: 'https://back.tashirpizza.am/images/product/a9e5f03266add5821a7a2f75abdd45de.jpg',
        name: 'Greek 240',
        price:  1800,
        description: 'cucumber, tomato, olives, lettuce, Feta cheese, oregano, lemons...',
    },
    {
        src: 'https://back.tashirpizza.am/images/product/27b989d72f3fcfc553248459689e1afc.jpg',
        name: 'Caesar',
        price:  450,
        description: 'cheese, lettuce, chicken brisket, croutons, sauce "Caesar"...',
    },
    {
        src: 'https://back.tashirpizza.am/images/product/de4736cf229b3e0f8dd56b73bd5c619c.jpg',
        name: 'Salad with arugula ',
        price:  560,
        description: 'arugula, Bell. pepper, Dutch cheese, bacon, tomato Cherry, sesame, sal...',
    },
    {
        src: 'https://back.tashirpizza.am/images/product/51f21a22870f96db9f46a35ea048c96e.jpg',
        name: 'Caprese ',
        price:  589,
        description: 'Cheese "Mozzarella", fresh basil, tomato, sauce "Pesto", balsamic sauc...',
    },
    {
        src: 'https://back.tashirpizza.am/images/product/a9aafa712dc9d8fa032019108f11d4b1.jpg',
        name: 'Grilled vegetables ',
        price:  490,
        description: 'Bulgarian pepper, carrot, mushrooms, tomato, corn, eggplant, courgette...',
    },
    {
        src: 'https://back.tashirpizza.am/images/product/b4bbee610b8503a7d683b400c767c6cb.jpg',
        name: 'Tabbouleh',
        price:  490,
        description: 'tomatoes, wheat, green onion, lettuce, tomato paste, lemon, parsley...',
    }
]

export default class PizzaTab extends Component {
  render() {
    return (
      <CardsContainer cardsData={salads} />
    )
  }
}
