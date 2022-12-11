import { Component } from 'react';
import './App.css';
import Counter from './homeworks/homework-1/Counter';

class App extends Component {
  render () {
    return (
      <div className='root'>
        <Counter />
      </div>
    )
  }
}

export default App;
