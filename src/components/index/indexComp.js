import Link from "next/link";
import styles from "@/styles/index/index.module.css"
export default function IndexComp(){

    return (

        <div className={styles.container}>

          <h3>Regras do jogo</h3>
            <ul><li>cada resposta certa vale 100 pontos</li>
            <li>3 respostas certas seguidas ganha uma bonus de 200 pontos</li>
            <li>5 respostas certas seguidas ganha uma bonus de 300 pontos</li>
            <li></li></ul>


            <Link href="/quiz">

                iniciar jogo
            </Link>
        </div>
    )
}