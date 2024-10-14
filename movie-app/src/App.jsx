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

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <>
      <StarRating maxRating={10} onSetRating={setMovieRating} size={24} />
      <p>This movie is rated {movieRating} stars</p>
    </>
  );
}

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
          <Test />
          <StarRating maxRating={5} />
          <StarRating maxRating={5} defaultRating={3} />
          <StarRating maxRating={8} size={24} color="red" />
          <StarRating
            maxRating={3}
            size={24}
            color="green"
            messages={["bad", "OK", "Good"]}
          />
          <MovieList movies={movies} />
        </Box>
        <Box>
          <WatchedMovies watched={watched} />
        </Box>
      </Main>
    </>
  );
}
