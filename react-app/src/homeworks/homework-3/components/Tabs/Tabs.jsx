import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Tab from './Tab';
import './styles.css';


export default class Tabs extends Component {
  render() {
    const { activeTab, tabs, handleChange } = this.props;
    return (
      <div className='tabs'>
        {tabs.map(({ key, value, ...rest } = {}) => 
            <Tab isActive={activeTab === value} onSelect={() => handleChange(value)} key={key} {...rest} />)}
      </div>
    )
  }
}

Tabs.defaultProps = {
    tabs: [],
}

Tabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
  tabs: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    label: PropTypes.string.isRequired
  }).isRequired).isRequired
}