import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { countryApi } from "../store/apis/countryApi";
import { countrySlice } from "./slice/countrySlice";
import { changeSearchTerm } from "./slice/countrySlice";
export const store = configureStore({
  reducer: {
    countries: countrySlice,
    [countryApi.reducerPath]: countryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countryApi.middleware),
});

setupListeners(store.dispatch);

export { changeSearchTerm };

export { countryApi };
export { useGetAllCountriesQuery } from "./apis/countryApi";
