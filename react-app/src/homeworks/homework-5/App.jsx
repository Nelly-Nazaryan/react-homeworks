import React, { useState } from 'react'
import { Provider } from "react-redux";

import { AddUser, Navigation, Users } from './component';
import store from './store/store';
import './styles.css';

const SCENES = {
    addUser: {
        key: 'addUser',
        Component: AddUser,
    },
    users: {
        key: 'users',
        Component: Users,
    }
}

export default function App() {
    const [activeScene, setActiveScene] = useState(SCENES.users.key)

    const changeScene = (sceneName) => {
        setActiveScene(SCENES[sceneName].key)
    }

    const ActiveScene = SCENES[activeScene].Component

    return (
        <Provider store={store}>
            <div className='todoApp'>
                <Navigation changeScene={changeScene} />
                <ActiveScene />
            </div>
        </Provider>
    )
}
