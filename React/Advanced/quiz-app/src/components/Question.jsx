import Option from "./Option";

/* eslint-disable react/prop-types */
const Question = ({ question, dispatch, answer }) => {
  return (
    <div>
      <h4>{question.question}</h4>

      <Option question={question} answer={answer} dispatch={dispatch} />
    </div>
  );
};

export default Question;
