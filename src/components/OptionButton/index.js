import { useQuiz } from "@/context/QuizContext";
import styles from "@/styles/OptionButton/OptionButton.module.css"

export default function OptionButton({ currentQuestionObj }) {
  const { selectedAnswer, answerButtonsDisabled, timeRemaining, shuffledOptions, handleAnswerClick } = useQuiz();
  return (

    <div className={styles.options}>
      {shuffledOptions.map((option, index) => (
        <button
          key={index}
          onClick={() => {
            // Verifique se o tempo restante é menor que 14 antes de permitir a seleção da opção
            if (timeRemaining <= 15) {
              handleAnswerClick(option);
            }
          }}
          className={`${selectedAnswer === option
            ? option === currentQuestionObj?.correctAnswer
              ? styles.correct
              : styles.wrong
            : styles.btn
            }`}
          disabled={answerButtonsDisabled || timeRemaining >= 15} // Desativa o botão quando answerButtonsDisabled é verdadeiro ou o tempo restante for maior ou igual a 14
        >
          <span className={styles.btnspan}>{index + 1}</span> {option}
        </button>
      ))}
    </div>
  )



}