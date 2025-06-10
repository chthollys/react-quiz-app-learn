import { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import quizCompleteImg from "../assets/quiz-complete.png";
import Question from "./Question";

function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleAddAnswer = useCallback((answer) => {
    setUserAnswers((prevAnswers) => [...prevAnswers, answer]);
  }, []);

  const handleSkipAnswer = useCallback(() => {
    handleAddAnswer(null);
  }, [handleAddAnswer]);

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Quiz's image completion" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onAddAnswer={handleAddAnswer}
        onSkip={handleSkipAnswer}
      />
    </div>
  );
}

export default Quiz;
