import { useGetAllCountriesQuery } from "./store/store";
function App() {
  const { data, error, isLoading } = useGetAllCountriesQuery("all");

  if (isLoading) {
    return <div>loading</div>;
  }
  if (error) {
    return <div>error</div>;
  }
  console.log(data, error, isLoading);
  return <div>App!</div>;
}

export default App;
