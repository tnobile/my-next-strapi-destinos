import { createSlice } from '@reduxjs/toolkit'


const category = createSlice({
    name: "categories",
    initialState: {
        selected: "",
        all: []
    },
    reducers: {
        setCategories: (state, action) => ({ ...state, all: action.payload }),
        clearCategories: (state) => []
    }
})

export const { setCategories, clearCategories } = category.actions;
export default category.reducer;