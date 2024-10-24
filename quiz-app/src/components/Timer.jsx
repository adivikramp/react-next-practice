/* eslint-disable react/prop-types */
import { useEffect } from "react";

const Timer = ({ dispatch, secondsRemaining }) => {
  useEffect(() => {
    const id = setInterval(() => {
      dispatch({ type: "secondsRemaining" });
    }, 1000);

    return () => clearInterval(id);
  }, [dispatch]);

  return <div className="timer">{secondsRemaining}</div>;
};

export default Timer;
