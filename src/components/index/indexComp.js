import Link from "next/link";
import styles from "@/styles/index/index.module.css"
import { useQuiz } from "@/context/QuizContext";


export default function IndexComp(){
    const {restartGame} = useQuiz();
    return (

        <div className={styles.container}>

            <h1 data-text="Quiz do milênio">Quiz do milênio</h1>

          <h3>Regras do jogo</h3>
            <ul>
                <li>cada resposta certa vale 100 pontos.</li>
            <li>3 respostas certas seguidas ganha uma bonus de 50 pontos.</li>
            <li>5 respostas certas seguidas ganha uma bonus de 50 pontos.</li>
            <li>8 respostas certas seguidas ganha uma bonus de 50 pontos.</li>
            </ul>


            <Link href="/quiz" onClick={restartGame}>

                iniciar jogo
            </Link>
        </div>
    )
}