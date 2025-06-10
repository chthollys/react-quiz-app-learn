import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import { useCallback, useState } from "react";
import QUESTIONS from "../questions";

function Question({ index, onAddAnswer, onSkip }) {
  console.log("RENDER");
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
        status: null,
      };
    });
    setTimeout(() => {
      setUserAnswer(() => {
        return {
          selectedAnswer: answer,
          status: QUESTIONS[index].answers[0] === answer,
        };
      });

      setTimeout(() => {
        onAddAnswer(answer);
      }, 2000);
    }, 1000);
  });

  let answerState = '';
  if (userAnswer.selectedAnswer && userAnswer.status !== null) {
    answerState = userAnswer.status ? 'correct' : 'wrong';
  } else if (userAnswer.selectedAnswer) {
    answerState = 'answered';
  }

  return (
    <div id="question">
      <QuestionTimer
        timeout={timer}
        onTimeout={onSkip}
        mode={answerState}
      />
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        selectedAnswer={userAnswer.selectedAnswer}
        answerState={answerState}
        onSelect={handleSelectAnswer}
      />
    </div>
  );
}

export default Question;
