import { useGetAllCountriesQuery } from "./store/store";
import CountryCard from "./components/CountryCard";
import { Grid } from "@mui/material";
function App() {
  const { data, error, isLoading } = useGetAllCountriesQuery("all");
  const columns = {
    sm: 6, // Number of columns to display on small screens
    md: 4, // Number of columns to display on medium screens
  };

  if (isLoading) {
    return <div>loading</div>;
  }
  if (error) {
    return <div>error</div>;
  }
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh" }}
    >
      <Grid item xs={12} sm={10} md={8}>
        <CountryCard columns={columns} />
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
