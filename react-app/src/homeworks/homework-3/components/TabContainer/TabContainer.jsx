import React, { Component } from 'react'
import PizzaTab from '../PizzaTab/PizzaTab'
import SaladTab from '../SaladTab'
import Tabs from '../Tabs'

const tabs = [
    {
        value: 'pizza',
        key: 'pizza',
        label: 'Pizza',
        Component: PizzaTab,
    },
    {
        value: 'salad',
        key: 'salad',
        label: 'Salad',
        Component: SaladTab,
    },
]

export default class TabContainer extends Component {
  state = {
    activeTab: tabs[0].value,
  }

  handleChange = (tab) => {
    this.setState({ activeTab: tab })
  }

  render() {
    const ActiveTab = tabs.find(tab => tab.value === this.state.activeTab)?.Component

    return (
      <div>
        <Tabs 
            tabs={tabs} 
            handleChange={this.handleChange} 
            activeTab={this.state.activeTab} 
        />
        {ActiveTab && <ActiveTab />}
      </div>
    )
  }
}
