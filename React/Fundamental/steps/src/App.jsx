import { useState } from "react";
import "./styles.css";

// Flashcards :
// export default function App() {
//   return (
//     <div className="App">
//       <FlashCards />
//     </div>
//   );
// }

// const questions = [
//   {
//     id: 3457,
//     question: "What language is React based on?",
//     answer: "JavaScript",
//   },
//   {
//     id: 7336,
//     question: "What are the building blocks of React apps?",
//     answer: "Components",
//   },
//   {
//     id: 8832,
//     question: "What's the name of the syntax we use to describe a UI in React?",
//     answer: "JSX",
//   },
//   {
//     id: 1297,
//     question: "How to pass data from parent to child components?",
//     answer: "Props",
//   },
//   {
//     id: 9103,
//     question: "How to give components memory?",
//     answer: "useState hook",
//   },
//   {
//     id: 2002,
//     question:
//       "What do we call an input element that is completely synchronised with state?",
//     answer: "Controlled element",
//   },
// ];

// function FlashCards() {
//   const [selectedId, setSelectedId] = useState(null);

//   function handleClick(id) {
//     setSelectedId(id !== selectedId ? id : null);
//   }

//   return (
//     <div className="flashcards">
//       {questions.map((el) => (
//         <div
//           key={el.id}
//           onClick={() => handleClick(el.id)}
//           className={el.id === selectedId ? "selected" : ""}
//         >
//           <p>{el.id === selectedId ? el.answer : el.question}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

const App = () => {
  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

  const [count, setCount] = useState(1);
  const [close, setClose] = useState(false);

  function incCount() {
    if (count < 3) setCount((s) => s + 1);
  }

  function decCount() {
    if (count > 1) setCount((s) => s - 1);
  }

  function toggleClose() {
    setClose(s => !s);
  }

  return (
    <>
      <div className="close" onClick={toggleClose}>
        &times;
      </div>
      {!close && (
        <div className="steps">
          <div className="numbers">
            <div className={count >= 1 ? "active" : ""}>1</div>
            <div className={count >= 2 ? "active" : ""}>2</div>
            <div className={count >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {count}: {messages[count - 1]}
          </p>

          <div className="buttons">
            <button onClick={decCount}>
              <span>Previous</span>
            </button>
            <button onClick={incCount}>
              <span>Next</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
