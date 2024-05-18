import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import "./app.css";

import RowPost from "./Components/RowPost/RowPost";
import {
  ComedyMovies,
  Documentaries,
  HorrorMovies,
  RomanceMovies,
  action,
  originals,
} from "./urls";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title="Netflix Originals" />
      <RowPost url={action} title="Action" isSmall />
      <RowPost url={RomanceMovies} title="Romance" isSmall />
      <RowPost url={ComedyMovies} title="Comedy" isSmall />
      <RowPost url={HorrorMovies} title="Horror" isSmall />
      <RowPost url={Documentaries} title="Documentaries" isSmall />
    </div>
  );
}

export default App;
