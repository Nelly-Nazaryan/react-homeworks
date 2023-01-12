import { createContext, useContext, useMemo, useReducer, useState } from "react"

const AppContext = createContext({});

const ACTIONS = {
    ADD_USER: 'ADD_USER',
    REMOVE_USER: 'REMOVE_USER',
}

const reducer = (state, action) => {
    switch (action.type) {
      case ACTIONS.ADD_USER:
        const { payload } = action;
        return [...state, { ...payload, id: `User: ${Date.now()}`}];
      case ACTIONS.REMOVE_USER:
        const { payload: { id } } = action;
        return state.filter(user => user.id !== id);
      default:
        throw new Error('No action');
    }
  }

export const AppContextProvide = ({ children }) => {
    const [users, dispatch] = useReducer(reducer, []);

    const addUser = (user) => {
        dispatch({ type: ACTIONS.ADD_USER, payload: user })
    }
    const removeUser = (id) => {
        dispatch({ type: ACTIONS.ADD_USER, payload: { id } })
    }

    const context =  useMemo(() => ({
        users,
        addUser,
        removeUser,
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