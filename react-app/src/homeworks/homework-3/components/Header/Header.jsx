import React, { Component } from 'react'
import './styles.css'
import headerBg from '../../assets/simple-house-01.jpg';
import headerIcon from '../../assets/simple-house-logo.png';

export default class Header extends Component {
  render() {
    return (
      <div className='header'>
        <div style={{ backgroundImage:`url(${headerBg})` }} className='headerBg' />
        <div className='content'>
            <img className='headerIcon' src={headerIcon} alt="" />
            <div className='titleContainer'>
                <h3>Simple House</h3>
                <h4>new restaurant template</h4>
            </div>
        </div>
      </div>
    )
  }
}
