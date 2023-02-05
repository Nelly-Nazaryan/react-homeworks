import React from 'react'
import { Provider } from "react-redux";
import Main from './Main';

import store from './store/store';
import './styles.css';


export default function App() {

    return (
        <Provider store={store}>
            <Main />
        </Provider>
    )
}
