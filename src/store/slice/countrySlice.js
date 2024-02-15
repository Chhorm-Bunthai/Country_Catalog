import { createSlice } from "@reduxjs/toolkit";

const coutrySlice = createSlice({
  name: "country",
  initialState: {
    searchTerm: "",
    data: [],
  },
  reducers: {
    changeSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    getAllCountries: (state, action) => {
      state.data.push(action.payload);
    },
  },
});
export const { changeSearchTerm, getAllCountries } = coutrySlice.actions;
export const countrySlice = coutrySlice.reducer;
