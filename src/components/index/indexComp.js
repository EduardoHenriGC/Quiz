import Link from "next/link";
import styles from "@/styles/index/index.module.css"
export default function IndexComp(){

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


            <Link href="/quiz">

                iniciar jogo
            </Link>
        </div>
    )
}