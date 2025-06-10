import { useRef } from "react";

function Answers({ answers, selectedAnswer, answerState, onSelect }) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers].sort(() => Math.random() - 0.5);
  }
  return (
    <ul id="answer">
      {shuffledAnswers.current.map((answer) => {
        let cssClasses = "";
        const isSelected = answer === selectedAnswer;
        if (isSelected && answerState === "answered") {
          cssClasses = "selected";
        }

        if (
          isSelected &&
          (answerState === "correct" || answerState === "wrong")
        ) {
          cssClasses = answerState;
        }
        return (
          <li key={answer} className="answer">
            <button className={cssClasses} onClick={() => onSelect(answer)} disabled={answerState !== ''}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default Answers;
