import { useCallback, useState } from "react";
import QUESTIONS from "../questions";
import quizCompleteImg from "../assets/quiz-complete.png";
import QuestionTimer from "./QuestionTimer";

function Quiz() {
  const [userAnswers, setUserAnswers] = useState([{}]);

  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleCheckAnswer = (selectedAnswer) => {
    if (activeQuestionIndex === 0) {
      console.log("User Selected Answer was empty.");
      return;
    }
    return selectedAnswer === QUESTIONS[activeQuestionIndex - 1].answers[0];
  };

  const handleSelectAnswer = useCallback((selectedAnswer) => {
    let userAnswerIsCorrect = handleCheckAnswer(selectedAnswer);
    setUserAnswers((prevUserAnswers) => {
      return [
        ...prevUserAnswers,
        {
          userAnswer: selectedAnswer,
          isCorrect: userAnswerIsCorrect,
        }
      ];
    });
  }, [handleCheckAnswer]);

  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), []);

  if (quizIsComplete) {
    return (
      <div id="summary">
        <img src={quizCompleteImg} alt="Quiz's image completion" />
        <h2>Quiz Completed!</h2>
      </div>
    );
  }
  const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);

  return (
    <div id="quiz">
      <div className="question">
        <QuestionTimer
          key={activeQuestionIndex}
          timeout={10000}
          onTimeout={handleSkipAnswer}
        />
        <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
        <ul id="answer">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleSelectAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Quiz;
