import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import ParagraphWithTitle from './components/ParagraphWithTitle'
import TabContainer from './components/TabContainer/TabContainer'

export default class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <ParagraphWithTitle />
        <TabContainer />
      </div>
    )
  }
}
