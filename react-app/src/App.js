import { Component } from 'react';
import './App.css';
import Counter from './homeworks/homework-1/Counter';
import { Form } from './homeworks/homework-2/Form';

class App extends Component {
  render () {
    return (
      <div className='root'>
        {/* <Counter /> */}
        <Form />
      </div>
    )
  }
}

export default App;
