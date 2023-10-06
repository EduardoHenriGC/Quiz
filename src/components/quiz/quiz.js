import { useQuiz } from '@/context/QuizContext';
import React from 'react';
import styles from "@/styles/quiz/quiz.module.css";
import Link from 'next/link';
import GameOver from '../GameOver';
import OptionButton from '../OptionButton';

const Quiz = () => {
  const {
    currentQuestion,
    score,
    showScore,
    handleAnswerClick,
    selectedAnswer,
    restartGame,
    timeRemaining,
    shuffledQuestions,
    shuffledOptions,
    answerButtonsDisabled
  } = useQuiz();

  // Verifica se currentQuestion é uma posição válida no array de shuffledQuestions
  // e se shuffledQuestions[currentQuestion] está definido
  const currentQuestionValid =
    currentQuestion >= 0 && currentQuestion < shuffledQuestions.length;
  const currentQuestionObj = currentQuestionValid
    ? shuffledQuestions[currentQuestion]
    : null;

  return (
    <div className={styles.quizContainer}>
      {showScore ? <GameOver showScore={showScore} shuffledQuestions={shuffledQuestions} score={score} restartGame={restartGame}/> 
      : (
        <div className={styles.questionContainer}>
          <div className={styles.scoreContent}>SCORE: {score}</div>
          <div className={styles.timeContent}>
            <p>Tempo restante: {timeRemaining}</p>
          </div>
          <div className={styles.answerContent}>
            <h2>{currentQuestion + 1}</h2>
            {/* Verifica se currentQuestionObj está definido antes de acessar sua propriedade question */}
            {currentQuestionObj && (
              <h4>{currentQuestionObj.question}</h4>
            )}
          </div>
          <OptionButton answerButtonsDisabled={answerButtonsDisabled} 
          shuffledOptions={shuffledOptions}
           timeRemaining={timeRemaining} 
           handleAnswerClick={handleAnswerClick} 
           selectedAnswer={selectedAnswer} c
           urrentQuestionObj={currentQuestionObj}/>
          <Link className={styles.backmenu} href="/">
            Voltar para o menu
          </Link>
        </div>
      )}
    </div>
  );
};

export default Quiz;
