import { createContext, useContext, useMemo, useReducer, useState } from "react"
import { createUser } from "./api";

const AppContext = createContext({});

const ACTIONS = {
    ADD_USER: 'ADD_USER',
    REMOVE_USER: 'REMOVE_USER',
    SET_USERS: 'SET_USERS',
}

const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.ADD_USER:
        const { payload } = action;
        return [...state, { ...payload, id: `User: ${Date.now()}`}];
      case ACTIONS.REMOVE_USER:
        const { payload: { id } } = action;
        return state.filter(user => user.id !== id);
      case ACTIONS.SET_USERS:
        const { payload: { users } } = action;
        return users;
      default:
        throw new Error('No action');
    }
  }

export const AppContextProvide = ({ children }) => {
    const [users, dispatch] = useReducer(reducer, []);

    const addUser = (user) => {
        createUser(user);
        dispatch({ type: ACTIONS.ADD_USER, payload: user });
    }

    const setUsers = users => {
        dispatch({ type: ACTIONS.SET_USERS, payload: { users } });
    }

    const context =  useMemo(() => ({
        users,
        addUser,
        setUsers,
    }), [users])

    return <AppContext.Provider value={context}>
        {children}
    </AppContext.Provider>
}

export const withAppContext = (Comment) => {
    return () => {
        const context = useContext(AppContext);

        return <Comment context={context} />
    }
}