/* eslint-disable react/prop-types */
import SingleMovie from "./SingleMovie";

const MovieList = ({ movies }) => {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <SingleMovie movie={movie} key={movie.id} />
      ))}
    </ul>
  );
};

export default MovieList;
