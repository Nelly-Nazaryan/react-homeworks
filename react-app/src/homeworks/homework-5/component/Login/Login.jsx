import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/asyncActions';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleLogin = () => {
    console.log('gggggggggggggggggg');
    dispatch(loginUser({ email, password }));
  }

  return (
    <div className='login'>
        <h4>Login</h4>
        <div>
            <input value={email} type="email" onChange={e => setEmail(e?.target?.value)} />
        </div>
        <div>
            <input value={password} type="password" onChange={e => setPassword(e?.target?.value)} />
        </div>
        <button onClick={handleLogin} disabled={!email || !password}>Login</button>
    </div>
  )
}

export default Login