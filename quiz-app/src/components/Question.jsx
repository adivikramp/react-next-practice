/* eslint-disable react/prop-types */
const Question = ({ questions }) => {
  return (
    <div>
      <h4>{questions.question}</h4>
      <div className="options">
        {questions.options.map((option, i) => (
          <button key={i} className="btn btn-option">
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Question;
