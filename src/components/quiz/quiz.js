import { useQuiz } from '@/context/QuizContext';
import React from 'react';
import styles from "@/styles/quiz/quiz.module.css";
import Link from 'next/link';
import GameOver from '../GameOver';
import Painel from '../Painel';
import DisplayGame from '../DisplayGame';


const Quiz = () => {

  const { showScore } = useQuiz();

  return (
    <div className={styles.quizContainer}>
      {showScore ? <GameOver />
        : (
          <div className={styles.questionContainer}>
            <Painel />
            <DisplayGame />
            <Link className={styles.backmenu} href="/">
              Voltar para o menu
            </Link>
          </div>
        )}
    </div>
  );
};

export default Quiz;
