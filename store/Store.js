import { createStore, combineReducers, applyMiddleware } from 'redux';
import { searchTermReducer } from '../features/searchTerm/searchTermSlice';
import { allDestinosReducer } from '../features/allDestinos/allDestinosSlice';
import categoriesReducer from '../features/category/categorySlice'; 
import { composeWithDevTools } from 'redux-devtools-extension'

export const store = createStore(
    combineReducers({
        searchTerm: searchTermReducer,
        allDestinos: allDestinosReducer,
        categories: categoriesReducer,
    }),
    composeWithDevTools(applyMiddleware()));