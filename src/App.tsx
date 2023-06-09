import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useGetAllMovieQuery } from "./redux/slice/slice-movie";

function App() {
  const { data } = useGetAllMovieQuery(undefined);
  // console.log("data", );
  return (
    <div>
      <h3>Hello</h3>
    </div>
  );
}

export default App;
