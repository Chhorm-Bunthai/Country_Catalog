import { useGetAllCountriesQuery } from "./store/store";
import { Grid } from "@mui/material";
import SearchAppBar from "./components/SearchAppBar";
import { useState } from "react";
import Country from "./components/CountryList";

function App() {
  const { data, error, isLoading } = useGetAllCountriesQuery("all");
  const [countryName, setCountryName] = useState("");

  if (isLoading) {
    return <div>loading</div>;
  }
  if (error) {
    return <div>error</div>;
  }
  const filteredCountries = data.filter((country) =>
    country.name.official.toLowerCase().includes(countryName.toLowerCase())
  );
  const columns = {
    sm: 6,
    md: 4,
  };
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={12} sm={10} md={8}>
        <SearchAppBar onSearch={setCountryName} />
        <Country data={filteredCountries} />
      </Grid>
    </Grid>
  );
}

export default App;
