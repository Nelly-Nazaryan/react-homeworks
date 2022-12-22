import React, { Component } from 'react';

import './styles.css';

export default class UserCard extends Component {
  render() {
    const {
        name,
        position,
        img,
        about
    } = this.props;
    return (
      <div className='userCard'>
        <div>
            <img referrerPolicy="no-referrer" src={img} alt={name} />
        </div>
        <div>
            <h4 className='userName'>{name}</h4>
            <h5 className='userPosition'>{position}</h5>
            <p className='userAbout'>{about}</p>
        </div>
      </div>
    )
  }
}
