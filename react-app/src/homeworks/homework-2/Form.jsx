import React from 'react'

export class Form extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            password: '',
            confirmPassword: '',
            email: '',
            phoneNumber: '',
        }
    }
    
    onChange = (value, fieldName) => {
        this.setState({ [fieldName]: value });
    }

    onSubmit = (e) => {
        e.stopPropagation();
        e.preventDefault();

        alert(JSON.stringify(this.state))
    }

    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <div><input onChange={(e) => this.onChange(e.target.value, 'name')} type="text" placeholder='Name' name='name' /></div>
                <div><input onChange={(e) => this.onChange(e.target.value, 'password')} type="password" placeholder='Password' name='password' /></div>
                <div><input onChange={(e) => this.onChange(e.target.value, 'confirmPassword')} type="password" placeholder='Confirm Password' name='confirmPassword' /></div>
                <div><input onChange={(e) => this.onChange(e.target.value, 'email')} type="email" placeholder='Email' name='email' /></div>
                <div><input onChange={(e) => this.onChange(e.target.value, 'name')} type="number" placeholder='Phone number' name='phoneNumber' /></div>
                <button type='submit'>Register</button>
            </form>
        )
    }
}
