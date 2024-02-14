import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const countryApi = createApi({
  reducerPath: "country",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://restcountries.com/v3.1/",
  }),
  endpoints: (builder) => {
    return {
      getAllCountries: builder.query({
        query: (countries) => {
          return {
            method: "GET",
            url: `${countries}`,
          };
        },
      }),
    };
  },
});
export { countryApi };
export const { useGetAllCountriesQuery } = countryApi;
