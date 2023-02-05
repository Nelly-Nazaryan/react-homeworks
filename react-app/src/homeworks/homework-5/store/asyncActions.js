import { api } from '../api';
import { ACTIONS } from './actions'

export const loginUser = ({ email, password }) => {
    return async (dispatch,) => {
        dispatch({ type: ACTIONS.LOGIN_USER });

        const data = await api.getUsers();

        const user = data?.data?.find(userData => userData?.data?.email === email);
        
        if(user) {
            const token = user._id;

            dispatch({ type: ACTIONS.LOGIN_USER_COMPLETE, payload: { token } });
        }
     };
} 