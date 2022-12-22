import React, { Component } from 'react'
import './styles.css'

export default class ParagraphWithTitle extends Component {
  render() {
    const { title, paragraph } = this.props
    return (
      <div className='paragraphWithTitle'>
        <h2>{title}</h2>
        <p>{paragraph}</p>
      </div>
    )
  }
}
