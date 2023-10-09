import Link from "next/link";
import styles from "@/styles/index/index.module.css"
import { useQuiz } from "@/context/QuizContext";


export default function IndexComp() {
    const { restartGame } = useQuiz();
    return (
        <div className={styles.container}>
            <div className={styles.logoContent}><h1 data-text="Quiz do milênio">Quiz do milênio  </h1><img src="https://w7.pngwing.com/pngs/369/866/png-transparent-skull-a20-illustration-video-game-gamer-logo-electronic-sports-others-miscellaneous-game-fictional-character.png" /></div>
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