import React from 'react'
import { useState } from 'react'
import { withAppContext } from '../../AppContext';
import './styles.css'

const initialState = {
    firstName: '',
    lastName: '',
    age: null,
    gender: 'male',
    position: '',
    email: '',
    phone: null,
    date: null,
}

function AddUser({ context }) {
    const [fields, setFields] = useState(initialState);

    const {
        addUser,
        users
    } = context;

    console.log(context, 'context');

    const setFieldValue = (value, fieldName) => {
        setFields(prev => ({ ...prev, [fieldName]: value }))
    }

    return (
        <div className='addUser'>
            <div>
                <label htmlFor="firstName">First Name</label>
                <input onChange={e => setFieldValue(e?.target?.value, 'firstName')} type="text" name="firstName" id="firstName" />
            </div>
            <div>
                <label htmlFor="lastName">Last Name</label>
                <input onChange={e => setFieldValue(e?.target?.value, 'lastName')} type="text" name="lastName" id="lastName" />
            </div>
            <div>
                <label htmlFor="age">Age</label>
                <input onChange={e => setFieldValue(e?.target?.value, 'age')} min={16} type="number" name="age" id="age" />
            </div>
            <div>
                <label>Gender</label>
                <label htmlFor="male">Male</label>
                <input checked={fields.gender === 'male'} onChange={e => setFieldValue(e?.target?.checked ? 'male' : 'female', 'gender')} type="radio" name="male" id="male" />
                <label htmlFor="male">Female</label>
                <input checked={fields.gender === 'female'} onChange={e => setFieldValue(e?.target?.checked ? 'female' : 'male', 'gender')} type="radio" name="feMale" id="feMale" />
            </div>
            <div>
                <label htmlFor="position">Position</label>
                <input onChange={e => setFieldValue(e?.target?.value, 'position')} type="text" name="position" id="position" />
            </div>
            <div>
                <label htmlFor="email">Email</label>
                <input onChange={e => setFieldValue(e?.target?.value, 'email')} type="email" name="email" id="email" />
            </div>
            <div>
                <label htmlFor="phoneNumber">Phone</label>
                <input onChange={e => setFieldValue(e?.target?.value, 'phone')} type="phone" name="phoneNumber" id="phoneNumber" />
            </div>
            <div>
                <label htmlFor="date">Date of Birth</label>
                <input onChange={e => setFieldValue(e?.target?.value, 'date')} type="date" name="date" id="date" />
            </div>

            <button onClick={() => addUser(fields)}>Submit</button>
        </div>
    )
}

export default withAppContext(AddUser);