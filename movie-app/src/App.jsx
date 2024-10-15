import { useEffect, useState } from "react";

// import { tempMovieData } from "./data/tempMovieData";
// import { tempWatchedData } from "./data/tempWatchedData";

// import MovieListBox from "./components/MovieListBox/MovieListBox";
// import WatchedListBox from "./components/WatchedListBox/WatchedListBox";
// import StarRating from "./components/StarComponent/StarRating";

import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Logo from "./components/Navbar/Logo";
import Searchbar from "./components/Navbar/Searchbar";
import Numresults from "./components/Navbar/Numresults";
import MovieList from "./components/MovieListBox/MovieList";
import Box from "./components/Box/Box";
import WatchedMovies from "./components/WatchedListBox/WatchedMovies";
import ErrorMessage from "./components/Error/ErrorMessage";
import Loader from "./components/Loader/Loader";
import SelectedMovie from "./components/WatchedListBox/SelectedMovie";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <>
//       <StarRating maxRating={10} onSetRating={setMovieRating} size={24} />
//       <p>This movie is rated {movieRating} stars</p>
//     </>
//   );
// }

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleSelectedMovie(id) {
    setSelectedMovieId((selectedId) => (id === selectedId ? null : id));
  }

  function CloseSelectedMovie() {
    setSelectedMovieId(null);
  }

  function handleAddWatchedMovie(movie) {
    setWatched((watched) => [...watched, movie]);
  }

  function handleDeleteWatched(id) {
    setWatched((watched) => watched.filter((movie) => movie.imdbID !== id));
  }

  useEffect(() => {
    const controller = new AbortController();

    async function fetchMovies() {
      try {
        setIsLoading(true);
        setError("");

        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${
            import.meta.env.VITE_API_KEY
          }&s=${query}`,
          { signal: controller.signal }
        );

        if (!res.ok)
          throw new Error("Something went wrong while fetching data!!");

        const data = await res.json();

        if (data.Response === "False")
          throw new Error("No movies found for this search");

        setMovies(data.Search);
        setError("");
      } catch (err) {
        setError(err.message);

        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    if (query.length < 3) {
      setMovies([]);
      setError("");
      return;
    }

    fetchMovies();

    return function () {
      controller.abort();
    };
  }, [query]);

  return (
    <>
      {/* With Prop Drilling */}
      {/* <Navbar movies={movies}>
      <Main movies={movies} /> */}

      {/* Without Prop Drilling */}
      <Navbar>
        <Logo />
        <Searchbar query={query} setQuery={setQuery} />
        <Numresults movies={movies} />
      </Navbar>

      <Main>
        <Box>
          {isLoading && <Loader />}
          {!isLoading && !error && (
            <MovieList movies={movies} onSelectedMovie={handleSelectedMovie} />
          )}
          {error && <ErrorMessage message={error} />}
        </Box>
        <Box>
          {selectedMovieId ? (
            <SelectedMovie
              selectedMovieId={selectedMovieId}
              onCloseSelectedMovie={CloseSelectedMovie}
              onAddedWatched={handleAddWatchedMovie}
              watched={watched}
            />
          ) : (
            <WatchedMovies
              watched={watched}
              onDeleteWatched={handleDeleteWatched}
            />
          )}
        </Box>
      </Main>
    </>
  );
}
