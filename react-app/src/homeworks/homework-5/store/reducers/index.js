import {  combineReducers } from 'redux'

import { users } from './users';
import { login } from './login';

const reducers = combineReducers({
    users,
    login,
});

export default reducers;