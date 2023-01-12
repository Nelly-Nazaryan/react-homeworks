import React from 'react'
import './styles.css';

export default function Navigation({ changeScene }) {
    return (
        <div className='navigation'>
            <div className='link'>
                <button onClick={() => changeScene('users')}>Users</button>
            </div>
            <div className='link'>
                <button onClick={() => changeScene('addUser')}>Create User</button>
            </div>
        </div>
    )
}
