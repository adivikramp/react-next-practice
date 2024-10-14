import { useState } from "react";

import { tempMovieData } from "./data/tempMovieData";
import { tempWatchedData } from "./data/tempWatchedData";

import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Logo from "./components/Navbar/Logo";
import Searchbar from "./components/Navbar/Searchbar";
import Numresults from "./components/Navbar/Numresults";
// import MovieListBox from "./components/MovieListBox/MovieListBox";
// import WatchedListBox from "./components/WatchedListBox/WatchedListBox";
import MovieList from "./components/MovieListBox/MovieList";
import Box from "./components/Box/Box";
import WatchedMovies from "./components/WatchedListBox/WatchedMovies";
import StarRating from "./components/StarComponent/StarRating";

export default function App() {
  const [movies, setMovies] = useState(tempMovieData);
  const [watched, setWatched] = useState(tempWatchedData);

  return (
    <>
      {/* With Prop Drilling */}
      {/* <Navbar movies={movies}>
      <Main movies={movies} /> */}

      {/* Without Prop Drilling */}
      <Navbar>
        <Logo />
        <Searchbar />
        <Numresults movies={movies} />
      </Navbar>

      <Main>
        <Box>
          <StarRating maxRating={5} />
          <StarRating maxRating={8} size={24} color="red" />
          <MovieList movies={movies} />
        </Box>
        <Box>
          <WatchedMovies watched={watched} />
        </Box>
      </Main>
    </>
  );
}
