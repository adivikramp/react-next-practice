import { useState } from "react";

import { tempWatchedData } from "../../data/tempWatchedData.js";

import Summary from "../Summary/Summary.jsx";
import SingleWatchedMovie from "../SingleWatchedMovie/SingleWatchedMovie.jsx";

const WatchedMovies = () => {
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <>
      <Summary watched={watched} />
      <ul className="list">
        {watched.map((movie) => (
          <SingleWatchedMovie movie={movie} key={movie.id} />
        ))}
      </ul>
    </>
  );
};

export default WatchedMovies;
