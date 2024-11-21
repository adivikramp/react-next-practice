/* eslint-disable react/prop-types */
// import Logo from "./Logo";
// import Numresults from "./Numresults";
// import Searchbar from "./Searchbar";

// With Prop Drilling
// const Navbar = ({ movies }) => {
//   return (
//     <nav className="nav-bar">
//       <Logo />
//       <Searchbar />
//       <Numresults movies={movies} />
//     </nav>
//   );
// };

// Without Prop Drilling
const Navbar = ({ children }) => {
  return <nav className="nav-bar">{children}</nav>;
};

export default Navbar;
