import React, { useState } from 'react'
import { AppContextProvide } from './AppContext';
import { AddUser, Navigation, Users } from './component';
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

    console.log(ActiveScene);

    return (
        <AppContextProvide>
            <div className='todoApp'>
                <Navigation changeScene={changeScene} />
                <ActiveScene />
            </div>
        </AppContextProvide>
    )
}
