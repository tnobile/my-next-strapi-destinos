const initialState = ''

export const searchTermReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'searchTerm/setSearchTerm':
      return action.payload.toLowerCase();
    case 'searchTerm/clearSearchTerm':
      return '';
    default:
      return state;
  }
}

// action creator
export function setSearchTerm(term) {
  return {
    type: 'searchTerm/setSearchTerm',
    payload: term
  }
}

// action creator
export function clearSearchTerm() {
  return {
    type: 'searchTerm/clearSearchTerm'
  }
}

export const selectSearchTerm = (state) => state.searchTerm;