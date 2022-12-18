import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './styles.css';

export default class Tab extends Component {
  render() {
    const { 
        label,
        disabled,
        onSelect,
        isActive
     } = this.props;

    return (
      <button className={`tab ${isActive ? 'activeTab' : ''}`} disabled={disabled} onClick={onSelect}>{label}</button>
    )
  }
}

Tab.propTypes = {
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onSelect: PropTypes.func.isRequired,
    isActive: PropTypes.bool.isRequired
}