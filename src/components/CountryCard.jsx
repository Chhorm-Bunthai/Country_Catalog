import { useGetAllCountriesQuery } from "../store/store";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Grid } from "@mui/material";

export default function CountryCard({ columns}) {
  const { data, error, isLoading } = useGetAllCountriesQuery("all");

  return (
    <Grid container spacing={2}>
      {data.map((country, index) => (
        <Grid item key={index} xs={12} sm={columns.sm} md={columns.md}>
          <Card sx={{ maxWidth: 345 }} key={index}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={country.flags.png}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {country.name.official}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {country.flags.alt}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
