import { ACTIONS } from '../actions'

export const users = (state = [], action) => {
    switch(action.type) {
        case ACTIONS.ADD_USER:
            console.log(state, action);

            return [...state, action.payload.user];
        case ACTIONS.SET_USERS:
            return [...state, ...action.payload.users];
        default:
            return state;
    }
}