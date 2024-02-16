import { useGetAllCountriesQuery } from "./store/store";
import { Grid } from "@mui/material";
import SearchAppBar from "./components/SearchAppBar";
import { useState } from "react";
import Country from "./components/CountryList";
import Loading from "./components/Loading";
import Error from "./components/Error";

function App() {
  const { data, error, isLoading } = useGetAllCountriesQuery("all");
  const [countryName, setCountryName] = useState("");
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Error error={error} />;
  }
  const filteredCountries = data.filter((country) =>
    country.name.official.toLowerCase().includes(countryName.toLowerCase())
  );
  return (
    <>
      <SearchAppBar onSearch={setCountryName} />
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={10} md={8}>
          <Country data={filteredCountries} />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
