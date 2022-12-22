import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import { About, Contact, Home } from './pages'

const pages = [
    {
        value: 'home',
        Component: Home,
    },
    {
        value: 'about',
        Component: About,
    },
    {
        value: 'contact',
        Component: Contact,
    }
]

export default class App extends Component {
  state = {
    activePage: pages[2]
  }

  handlePage = (pageName) => {
    this.setState({
        activePage: pages.find(page => page.value === pageName)
    })
  }

  render() {
    const { Component: ActivePage } = this.state.activePage;
    return (
      <div className='App'>
        <Header activePage={this.state.activePage.value} handlePage={this.handlePage} />
        <div className='appContent'>
            <ActivePage />
        </div>
      </div>
    )
  }
}
