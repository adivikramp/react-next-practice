/* eslint-disable react/prop-types */
import Summary from "../Summary/Summary.jsx";
import SingleWatchedMovie from "./SingleWatchedMovie.jsx";

const WatchedMovies = ({ watched }) => {
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
