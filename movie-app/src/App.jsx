import { useState } from "react";

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
import useMovies from "./components/hooks/useMovies";
import useLocalStorage from "./components/hooks/useLocalStorage";

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
  // State variables
  const [query, setQuery] = useState("");
  const [selectedMovieId, setSelectedMovieId] = useState(null);

  // Custom Hooks
  const [watched, setWatched] = useLocalStorage([], "watched");
  const { movies, isLoading, error } = useMovies(query, CloseSelectedMovie);

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
