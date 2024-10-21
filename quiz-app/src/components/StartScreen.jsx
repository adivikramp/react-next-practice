/* eslint-disable react/prop-types */
const StartScreen = ({ numQuestions, dispatch }) => {
  return (
    <div className="start">
      <h3>Welcome to the React Quiz</h3>
      <h3>{numQuestions} questions to test your react Mastery</h3>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "start" })}
      >
        Let us Start
      </button>
    </div>
  );
};

export default StartScreen;
