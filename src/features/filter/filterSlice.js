import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  tags: [],
  search: "",
  author: "",
}

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    tagSelected: (state, action) => {
      state.tags.push(action.payload)
    },

    tagRemoved: (state, action) => {
      // state.tags = state.tags.filter(tag => tag !== action.payload);
      const indexToRemove = state.tags.indexOf(action.payload);
      if (indexToRemove !== -1) {
        state.tags.splice(indexToRemove, 1);
      }
    },

    authorSelected: (state, action) => {
      state.author = action.payload;
    },
    authorRemoved: (state) => {
      state.author = "";
    },

    searched: (state, action) => {
      state.search = action.payload;
    },

    clearFilter: (state) => {
      state.search = "";
      state.author = "";
      state.tags = [];
    },
  }
});

export default filterSlice.reducer;
export const { tagSelected, tagRemoved, searched, authorSelected,authorRemoved, clearFilter } = filterSlice.actions;