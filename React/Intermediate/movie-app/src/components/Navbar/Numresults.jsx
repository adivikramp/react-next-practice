/* eslint-disable react/prop-types */
const Numresults = ({ movies }) => {
  return (
    <p className="num-results">
      Found <strong>{movies.length}</strong> results
    </p>
  );
};

export default Numresults;
