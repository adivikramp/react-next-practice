/* eslint-disable react/prop-types */
import Logo from "./Logo";
import Numresults from "./Numresults";
import Searchbar from "./Searchbar";

const Navbar = ({ movies }) => {
  return (
    <nav className="nav-bar">
      <Logo />
      <Searchbar />
      <Numresults movies={movies} />
    </nav>
  );
};

export default Navbar;
