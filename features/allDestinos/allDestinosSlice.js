import { selectSearchTerm } from '../searchTerm/searchTermSlice.js';
import { categorySelected } from '../category/categorySlice.js';


const initialState = [];
export const allDestinosReducer = (allDestinos = initialState, action) => {
    switch (action.type) {
        case 'allDestinos/loadData':
            return action.payload;
        default:
            return allDestinos;
    }
}

// action creator
export function loadDestinos(destinos) {
    return {
        type: `allDestinos/loadData`,
        payload: destinos
    }
}

export const selectAllDestinos = (state) => state.allDestinos;

const doesContain = (a, term) => a.name.toLowerCase().includes(term) || a.category.includes(term);

export const selectFilteredAllDestinos = (state) => {
    const allDestinos = selectAllDestinos(state);
    const searchTerm = selectSearchTerm(state);
    return allDestinos.filter(d => searchTerm && searchTerm !== '' ? doesContain(d, searchTerm) : true)
};

export const selectAllDesitinosForCategory = (state) => {
    const allDestinos = selectAllDestinos(state);
    const category = categorySelected(state);
    return allDestinos.filter(d => category && category !== '' ? d.category = category : true);
}