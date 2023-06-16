import Header from "./components/Header/Index";
import Discover from "./pages/Discover";
import Home from "./pages/Home";
// import { useGetAllMovieQuery } from "./redux/slice/slice-movie";
import { Routes, Route } from "react-router-dom";
import Upcoming from "./pages/Upcoming";
import TopRated from "./pages/Top Rated";
import Details from "./pages/Details";
import Searchs from "./pages/Searchs";
import Watchlist from "./pages/Watchlist";

function App() {
  // const { data } = useGetAllMovieQuery(undefined);
  // console.log("data", data);
  return (
    <Routes>
      <Route path="" element={<Header />}>
        <Route index path="" element={<Home />} />
        <Route path="discover" element={<Discover />} />
        <Route path="upcoming" element={<Upcoming />} />
        <Route path="top_rated" element={<TopRated />} />
        <Route path="details/:id" element={<Details />} />
        <Route path="search/:keyword" element={<Searchs />} />
        <Route path="watchlist" element={<Watchlist />} />
      </Route>
    </Routes>
  );
}

export default App;
