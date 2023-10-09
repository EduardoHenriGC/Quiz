import Link from "next/link"
import styles from "@/styles/GameOver/GameOver.module.css"
import { useQuiz } from "@/context/QuizContext";

export default function GameOver() {

  const { restartGame, score, showButtons } = useQuiz();
  return (
    <div className={styles.score}>
      <p>pontuação: <span>{score}</span> </p>

      {showButtons && ( // Renderiza os botões apenas quando showButtons for verdadeiro
        <>
          <button onClick={restartGame}>Jogar Novamente</button>
          <Link href="/">
            Voltar
          </Link>
        </>
      )}


    </div>
  )
}