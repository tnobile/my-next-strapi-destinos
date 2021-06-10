import { createStore, combineReducers, applyMiddleware } from 'redux';
import { useMemo } from 'react'
import { searchTermReducer } from '../features/searchTerm/searchTermSlice';
import { allDestinosReducer } from '../features/allDestinos/allDestinosSlice';
import categoriesReducer from '../features/category/categorySlice';
import { composeWithDevTools } from 'redux-devtools-extension'

// export const store = preloadedState => createStore(
//     combineReducers({
//         searchTerm: searchTermReducer,
//         allDestinos: allDestinosReducer,
//         categories: categoriesReducer,
//     }),
//     preloadedState,
//     composeWithDevTools(applyMiddleware()));

let store;
const initialState = {};

function initStore(preloadedState = initialState) {
    return createStore(
        combineReducers({
            searchTerm: searchTermReducer,
            allDestinos: allDestinosReducer,
            categories: categoriesReducer,
        }),
        preloadedState,
        composeWithDevTools(applyMiddleware())
    )
}
export const initializeStore = (preloadedState) => {
    let _store = store ?? initStore(preloadedState)

    // After navigating to a page with an initial Redux state, merge that state
    // with the current state in the store, and create a new store
    if (preloadedState && store) {
        _store = initStore({
            ...store.getState(),
            ...preloadedState,
        })
        // Reset the current store
        store = undefined
    }

    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store
    // Create the store once in the client
    if (!store) store = _store

    return _store
}

export function useStore(initialState) {
    const store = useMemo(() => initializeStore(initialState), [initialState])
    return store
}
