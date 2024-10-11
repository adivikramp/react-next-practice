import { useState } from "react";
import { tempMovieData } from "../../data/tempMovieData";
import SingleMovie from "../SingleMovie/SingleMovie";

const MovieList = () => {
  const [movies, setMovies] = useState(tempMovieData);

  return (
    <ul className="list">
      {movies?.map((movie) => (
        <SingleMovie movie={movie} key={movie.id} />
      ))}
    </ul>
  );
};

export default MovieList;
