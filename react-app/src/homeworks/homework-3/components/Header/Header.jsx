import React, { Component } from 'react'
import './styles.css'
import headerBg from '../../assets/simple-house-01.jpg';
import headerIcon from '../../assets/simple-house-logo.png';

export default class Header extends Component {
    render() {
        const { activePage, handlePage } = this.props;
        return (
            <div className='headerContainer'>
                <div className='header'>
                    <img src={headerBg} alt="sadas" className='headerBg' />
                    <div className='content'>
                        <div>
                            <img className='headerIcon' src={headerIcon} alt="" />
                            <div className='titleContainer'>
                                <h3>Simple House</h3>
                                <h4>new restaurant template</h4>
                            </div>
                        </div>
                        <div>
                            <button onClick={() => handlePage('home')} className={`navLink ${ activePage === 'home' ? 'activeLink' : ''}`}>Home</button>
                            <button onClick={() => handlePage('about')} className={`navLink ${ activePage === 'about' ? 'activeLink' : ''}`}>About</button>
                            <button onClick={() => handlePage('contact')} className={`navLink ${ activePage === 'contact' ? 'activeLink' : ''}`}>Contact</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
