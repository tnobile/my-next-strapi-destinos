import { createSlice } from '@reduxjs/toolkit'


const category = createSlice({
    name: "categories",
    initialState: [],
    reducers: {
        setCategories: (state, action) =>action.payload,
        clearCategories: (state) => []
    }
})

export const { setCategories, clearCategories } = category.actions;
export default category.reducer;