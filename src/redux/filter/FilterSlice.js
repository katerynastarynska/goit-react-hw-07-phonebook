const { createSlice } = require("@reduxjs/toolkit");

const filterState = '';

const filterReducer = createSlice({
    name: "filter",
    initialState: filterState,
    reducers: {
        filterContactsByName(state, action) {
            const filter = action.payload;
            return (state = filter);
        }
    }
})

export const { filterContactsByName } = filterReducer.actions;
export default filterReducer.reducer;