import { createStore, combineReducers, applyMiddleware } from 'redux';
import { searchTermReducer } from '../features/searchTerm/searchTermSlice.js';
import { composeWithDevTools } from 'redux-devtools-extension'

export const store = createStore(
    combineReducers({ searchTerm: searchTermReducer }),
    composeWithDevTools(applyMiddleware()));