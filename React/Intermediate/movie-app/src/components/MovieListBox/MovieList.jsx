/* eslint-disable react/prop-types */
import SingleMovie from "./SingleMovie";

const MovieList = ({ movies, onSelectedMovie }) => {
  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <SingleMovie
          movie={movie}
          key={movie.id}
          onSelectedMovie={onSelectedMovie}
        />
      ))}
    </ul>
  );
};

export default MovieList;
