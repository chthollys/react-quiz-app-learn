import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import { useCallback, useState } from "react";
import QUESTIONS from "../questions";

function Question({ index, onAddAnswer, onSkip }) {
  const { text: questionText, answers } = QUESTIONS[index];

  const [userAnswer, setUserAnswer] = useState({
    selectedAnswer: "",
    status: null,
  });

  let timer = 10000;

  if (userAnswer.selectedAnswer) {
    timer = 1000;
  }
  if (userAnswer.status !== null) {
    timer = 2000;
  }

  const handleSelectAnswer = useCallback((answer) => {
    setUserAnswer(() => {
      return {
        selectedAnswer: answer,
        status: "answered",
      };
    });
    setTimeout(() => {
      setUserAnswer((prevAnswerState) => {
        return {
          ...prevAnswerState,
          status: QUESTIONS[index].answers[0] === answer ? "correct" : "wrong",
        };
      });

      setTimeout(() => {
        setUserAnswer((prevAnswerState) => {
          return {
            ...prevAnswerState,
            status: null,
          };
        });
        onAddAnswer(answer);
      }, 2000);
    }, 1000);
  });

  return (
    <div id="question">
      <QuestionTimer
        timeout={timer}
        onTimeout={onSkip}
        mode={userAnswer.status}
      />
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        selectedAnswer={userAnswer.selectedAnswer}
        answerState={userAnswer.status}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}

export default Question;
