import { useGetAllCountriesQuery } from "./store/store";
import { Grid } from "@mui/material";
import CountryCard from "./components/CountryCard";
import SearchAppBar from "./components/SearchAppBar";
import { useState } from "react";

function App() {
  const { data, error, isLoading } = useGetAllCountriesQuery("all");
  const [countryName, setCountryName] = useState("");
  const columns = {
    sm: 6,
    md: 4, 
  };

  if (isLoading) {
    return <div>loading</div>;
  }
  if (error) {
    return <div>error</div>;
  }

  const filteredCountry = data.filter((country) =>
    country.name.official.toLowerCase().includes(countryName.toLowerCase())
  );
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <Grid item xs={12} sm={10} md={8}>
        <SearchAppBar onSearch={setCountryName} />
        <CountryCard columns={columns} filteredCountry={filteredCountry} />
      </Grid>
    </Grid>
  );
}

export default App;

{
  /* <ul>
        <img src={each.flags.png} alt="" />
        <li>{each.name.official}</li>
        <li>{each.cca2}</li>
        <li>{each.cca3}</li>
        <li>{each.name.nativeName.ell.official}</li>
        <li>{each.altSpellings[1]}</li>
        <li>{each.idd.root}</li>
      </ul> */
}
