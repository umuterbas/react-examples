import React, { useEffect, useState } from 'react';
import useQuiz from './hooks/useQuiz';
import axios from 'axios';
import { questionsData } from './data/questions';
export default function Quiz() {
  const {
    questions,
    question,
    currentIndex,
    updateQuestionAndScore,
    score,
    resetQuiz,
  } = useQuiz();
  useEffect(() => {
    // axios.get('https://the-trivia-api.com/api/questions').then((res) => {
    //   resetQuiz(res.data);
    // });
    resetQuiz(questionsData);
  }, []);

  const [userAnswer, setUserAnswer] = useState(undefined);
  console.log('question', question);

  return (
    <div>
      <h1>Quiz</h1>
      <h2>
        Current Score: {score} / {currentIndex}
      </h2>
      {question && (
        <>
          <h2>
            Question {currentIndex + 1}: {questions[currentIndex].question}
          </h2>
          <div onChange={(e) => setUserAnswer(e.target.value)}>
            {question.answers.map((answer) => (
              <div>
                <input type='radio' name='answer' value={answer} />
                <label htmlFor=''>{answer}</label>
              </div>
            ))}
            <button onClick={() => updateQuestionAndScore(userAnswer)}>
              Submit answer
            </button>
          </div>
        </>
      )}
    </div>
  );
}
