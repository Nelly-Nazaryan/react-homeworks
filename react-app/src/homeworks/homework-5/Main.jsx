import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AddUser, Login, Navigation, Users } from './component';


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


export default function Main() {
    const [activeScene, setActiveScene] = useState(SCENES.users.key);
    const loginData = useSelector(store => store.login);

    console.log(loginData);

    const changeScene = (sceneName) => {
        setActiveScene(SCENES[sceneName].key)
    }

    const ActiveScene = SCENES[activeScene].Component;

    if(!loginData.token) return <Login />;

  return (
    <div className='todoApp'>
        <Navigation changeScene={changeScene} />
        <ActiveScene />
    </div>
  )
}
