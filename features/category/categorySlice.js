import { createSlice } from '@reduxjs/toolkit'


const category = createSlice({
    name: "categories",
    initialState: {
        selected: "",
        all: []
    },
    reducers: {
        setCategories: (state, action) => ({ ...state, all: action.payload }),
        clearCategories: (state) => [],
        setSelected: (state, action) => ({ ...state, selected: action.payload }),
    }
})

export const { setCategories, clearCategories, setSelected } = category.actions;
export default category.reducer;