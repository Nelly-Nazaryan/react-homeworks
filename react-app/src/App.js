import { Component } from 'react';
import Counter from './homeworks/homework-1/Counter';
import { Form } from './homeworks/homework-2/Form';
import App from './homeworks/homework-3';
import './App.css';

class Root extends Component {
  render () {
    return (
      <div className='root'>
        {/* <Counter /> */}
        {/* <Form /> */}
        <App />
      </div>
    )
  }
}

export default Root;
