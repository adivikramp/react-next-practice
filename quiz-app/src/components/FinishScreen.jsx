/* eslint-disable react/prop-types */
const FinishScreen = ({ points, totalPoints }) => {
  return (
    <p className="result">
      You Scored {points} out of {totalPoints}
    </p>
  );
};

export default FinishScreen;
