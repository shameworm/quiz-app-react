import { useState } from "react";
import { reactQuiz, historyOfUkraineQuiz, mathQuiz } from "../questions";
import Quiz from "./Quiz";

function App() {
  const [pickSubject, setPickSubject] = useState(null);

  function onPickSubject(quiz) {
    setPickSubject(quiz);
  }

  function onDropSubject() {
    setPickSubject(null);
  }

  return (
    <>
      <main>
        {!pickSubject && (
          <ul className="flex items-center justify-between gap-4 h-full p-10">
            <li className="max-w-screen-sm bg-[#b449c2] shadow-[1px_1px_8px_1px_rgba(0,0,0,0.6)] animate-[slide-in-from-bottom_0.7s_ease-out] mx-auto my-8 p-8 rounded-lg;">
              <button onClick={() => onPickSubject(reactQuiz)}>
                React Quiz
              </button>
            </li>
            <li className="max-w-screen-sm bg-[#b449c2] shadow-[1px_1px_8px_1px_rgba(0,0,0,0.6)] animate-[slide-in-from-bottom_0.7s_ease-out] mx-auto my-8 p-8 rounded-lg;">
              <button onClick={() => onPickSubject(historyOfUkraineQuiz)}>
                History Of Ukraine Quiz
              </button>
            </li>
            <li className="max-w-screen-sm bg-[#b449c2] shadow-[1px_1px_8px_1px_rgba(0,0,0,0.6)] animate-[slide-in-from-bottom_0.7s_ease-out] mx-auto my-8 p-8 rounded-lg;">
              <button onClick={() => onPickSubject(mathQuiz)}>Math Quiz</button>
            </li>
          </ul>
        )}
        {pickSubject && (
          <Quiz questions={pickSubject} onDropQuestion={onDropSubject} />
        )}
      </main>
    </>
  );
}

export default App;
