import { useQuiz } from "@/context/QuizContext"
import styles from "@/styles/Painel/Painel.module.css"

export default function Painel() {

    const { timeRemaining, score } = useQuiz();
    return (
        <div className={styles.container}>
            <div className={styles.scoreContent}>Score: {score}</div>
            <div className={styles.timeContent}>
                <p>Tempo restante: {timeRemaining}</p>
            </div></div>
    )
}