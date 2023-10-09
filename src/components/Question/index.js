import { useQuiz } from "@/context/QuizContext"
import styles from "@/styles/Question/Question.module.css"

export default function Question({ currentQuestionObj, currentQuestion }) {

    return (

        <div className={styles.answerContent}>
            <h2>{currentQuestion + 1}</h2>
            {/* Verifica se currentQuestionObj está definido antes de acessar sua propriedade question */}
            {currentQuestionObj && (
                <h4>{currentQuestionObj.question}</h4>
            )}
        </div>
    )
}