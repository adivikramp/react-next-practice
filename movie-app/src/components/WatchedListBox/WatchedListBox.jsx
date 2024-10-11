import { useState } from "react";
import WatchedMovies from "../WatchedMovies/WatchedMovies";

const WatchedListBox = () => {
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && <WatchedMovies />}
    </div>
  );
};

export default WatchedListBox;
