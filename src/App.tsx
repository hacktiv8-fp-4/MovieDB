import Header from "./components/Header/Index";
import DiscoverMovies from "./pages/Discover/DiscoverMovies";
import Discover from "./pages/Discover";
import Home from "./pages/Home";
// import { useGetAllMovieQuery } from "./redux/slice/slice-movie";
import { Routes, Route } from "react-router-dom";
import DiscoverTV from "./pages/Discover/DiscoverTV";
import Upcoming from "./pages/Upcoming";
import Watchlist from "./pages/Watchlist";
import Details from "./pages/Details";
import Searchs from "./pages/Searchs";

function App() {
  // const { data } = useGetAllMovieQuery(undefined);
  // console.log("data", data);
  return (
    <Routes>
      <Route path="" element={<Header />}>
        <Route index path="" element={<Home />} />
        <Route path="discover" element={<Discover />}>
          <Route path="movies" element={<DiscoverMovies />} />
          <Route path="tvshows" element={<DiscoverTV />} />
        </Route>
        <Route path="upcoming" element={<Upcoming />} />
        <Route path="watchlist" element={<Watchlist />} />
        <Route path="details/:id" element={<Details />} />
        <Route path="search/:keyword" element={<Searchs />} />
      </Route>
    </Routes>
  );
}

export default App;
