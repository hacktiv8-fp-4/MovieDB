import { useGetAllMovieQuery } from "./redux/slice/slice-movie";

function App() {
  const { data } = useGetAllMovieQuery(undefined);
  console.log("data", data);
  return (
    <div>
      <h3 className="text-green-400">Hello</h3>
    </div>
  );
}

export default App;
