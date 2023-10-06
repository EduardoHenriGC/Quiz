import Link from "next/link"
import styles from "@/styles/GameOver/GameOver.module.css"
import { useState,useEffect } from "react";

export default function GameOver({restartGame, shuffledQuestions,score,showScore}){

    const [showButtons, setShowButtons] = useState(false);


    useEffect(() => {
        if (showScore) {
          // Quando gameOver for verdadeiro, aguarde 3 segundos antes de mostrar os botões
          const timeout = setTimeout(() => {
            setShowButtons(true);
          }, 3000);
    
          return () => clearTimeout(timeout); // Limpa o timeout se o componente for desmontado
        } else {
          // Se o jogo não estiver no estado de game over, certifique-se de ocultar os botões
          setShowButtons(false);
          
        }
      }, [showScore]);

    return (


        <div className={styles.score}>
        <p>Sua pontuação foi de {score} de {shuffledQuestions.length} perguntas !!</p>

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