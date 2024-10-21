import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Error from "./components/Error";
import Loader from "./components/Loader";
import Main from "./components/Main";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";

const initialState = {
  questions: [],
  status: "loading", // Loading, Error, Ready, Active, Finished
  index: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };

    case "dataFailed":
      return { ...state, status: "error" };

    case "start":
      return { ...state, status: "active" };

    default:
      throw new Error("Action Unknown");
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { questions, status, index } = state;

  const numQuestions = questions.length;

  useEffect(() => {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => {
        dispatch({ type: "dataFailed" });
        console.log(err);
      });
  }, []);

  return (
    <div className="app">
      <Header />

      <Main>
        {status === "loading" && <Loader />}

        {status === "error" && <Error />}

        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}

        {status === "active" && <Question questions={questions[index]} />}
      </Main>
    </div>
  );
};

export default App;
