import { useQuiz } from '@/context/QuizContext';
import React from 'react';
import styles from "@/styles/quiz/quiz.module.css";
import Link from 'next/link';



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
  } = useQuiz();

  return (
    <div className={styles.quizContainer}>
      {showScore ? (
        <div className={styles.score}>
          <p>Sua pontuação foi de {score} de {shuffledQuestions.length} perguntas !!</p>
          <Link href="/" onClick={restartGame}>
            Voltar
          </Link>
          <button onClick={restartGame}>Jogar Novamente</button>
        </div>
      ) : (
        <div className={styles.questionContainer}>
          <div className={styles.scoreContent}>SCORE: {score}</div>
          <div className={styles.timeContent}>
            <p>Tempo restante: {timeRemaining}</p>
          </div>
          <div className={styles.answerContent}>
            <h2>{currentQuestion + 1}</h2>
            <h4>{shuffledQuestions[currentQuestion].question}</h4>
          </div>
          <div className={styles.options}>
            {shuffledOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
                className={`${
                  selectedAnswer === option
                    ? option === shuffledQuestions[currentQuestion].correctAnswer
                      ? styles.correct
                      : styles.wrong
                    : styles.btn
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <Link href="/" onClick={restartGame}>
            Voltar para o menu
          </Link>
        </div>
      )}
    </div>
  );
};

export default Quiz;