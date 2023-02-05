import { ACTIONS } from "../actions";

const initialState = {
   token: localStorage.getItem('token'),
   loading: false,
   error: ''
};

export function login(state = initialState, action) {
   switch (action.type) {
       case ACTIONS.LOGIN_USER: {
           return {
               ...state,
               loading: true,
               error:''
           };
       }
       case ACTIONS.LOGIN_USER_COMPLETE: {
           return {
               ...state,
               token: action.payload.token,
               loading: false
           }
       }
       case ACTIONS.LOGIN_USER_ERROR: {
           return {
               ...state,
               loading: false,
               error: action.payload.error
           };
       }
       default: {
           return state;
       }
   }
}