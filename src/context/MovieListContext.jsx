import React, { createContext, useReducer, useEffect } from 'react';

const initialState = JSON.parse(localStorage.getItem('myList')) || [];

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return [...state, action.payload];
        case 'REMOVE':
            return state.filter(movie => movie.id !== action.payload.id);
        default:
            return state;
    }
};

export const MovieListContext = createContext();

export const MovieListProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        localStorage.setItem('myList', JSON.stringify(state));
    }, [state]);

    return (
        <MovieListContext.Provider value={{ state, dispatch }}>
            {children}
        </MovieListContext.Provider>
    );
};


// Note: 1. This file is created for the Movie Hold Like to display
// 2. Add List and Remove the List
// for give the access provide movie list provider to another component
