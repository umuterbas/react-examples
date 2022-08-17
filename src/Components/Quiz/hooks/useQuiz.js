import { useState, useEffect } from 'react';
// import axios from 'axios';
export default function useQuiz(questionsData) {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [question, setQuestion] = useState(undefined);
  const [score, setScore] = useState(0);
  useEffect(() => {
    // axios.get('https://the-trivia-api.com/api/questions').then((res) => {
    // });
  }, []);
  const updateQuestionAndScore = (userAnswer) => {
    console.log('answer', question.correctAnswer);
    console.log('user answer', userAnswer);
    if (userAnswer === question.correctAnswer) {
      console.log('correct answer');
      setScore((prevState) => prevState + 1);
    }
    setCurrentIndex((prevState) => {
      setQuestion(questions[prevState + 1]);
      return prevState + 1;
    });
  };
  const resetQuiz = (questionsData) => {
    setQuestions(() => {
      const questionsWithAnswers = questionsData.map((question) => {
        let shuffleAnswers = [...question.incorrectAnswers];
        shuffleAnswers.splice(
          Math.floor(Math.random() * 4),
          0,
          question.correctAnswer
        );
        return { ...question, answers: shuffleAnswers };
      });
      setQuestion(questionsWithAnswers[0]);
      setCurrentIndex(0);
      setScore(0);
      return questionsWithAnswers;
    });
  };
  return {
    questions,
    question,
    currentIndex,
    updateQuestionAndScore,
    score,
    resetQuiz,
  };
}
