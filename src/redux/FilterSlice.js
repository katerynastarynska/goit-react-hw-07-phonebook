const { createSlice } = require("@reduxjs/toolkit");

const filterState = '';

const filterReducer = createSlice({
    name: "filter",
    initialState: filterState,
    reducers: {
        filterContactsByName: (state, action) => {
          return state = action.payload;
        },
      },
})

export const { filterContactsByName } = filterReducer.actions;
export default filterReducer.reducer;