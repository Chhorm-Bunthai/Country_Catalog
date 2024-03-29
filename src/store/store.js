import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { countryApi } from "../store/apis/countryApi";
export const store = configureStore({
  reducer: {
    [countryApi.reducerPath]: countryApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(countryApi.middleware),
});

setupListeners(store.dispatch);

export { countryApi };
export { useGetAllCountriesQuery } from "./apis/countryApi";
