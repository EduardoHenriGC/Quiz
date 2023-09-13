import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import questions from '@/components/quiz/quizobj';

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0); // estado para mostrar a questao atual
  const [score, setScore] = useState(0); // estado para manipular o placar
  const [showScore, setShowScore] = useState(false); //estado para mostrar o placar no fim do jogo
  const [selectedAnswer, setSelectedAnswer] = useState(null);  //estado para pegar a resposta da questao atual
  const [gameOver, setGameOver] = useState(false); // estado para finalizar o jogo
  const [consecutiveCorrectAnswers, setConsecutiveCorrectAnswers] = useState(0); // estado para armazenar o numero de questao certas consecutivas.
  const [timeRemaining, setTimeRemaining] = useState(15);  // estado para mostrar o tempo restante para responder a questao
  const [shuffledQuestions, setShuffledQuestions] = useState([]); //estado para embaralhar as questões
  const [shuffledOptions, setShuffledOptions] = useState([]); //estado para embaralhar as opções de respostas
  


    useEffect(() => {
    if (shuffledQuestions[currentQuestion]) {
      // Embaralhar as opções para a pergunta atual
      const options = shuffleArray(shuffledQuestions[currentQuestion].options);
      setShuffledOptions(options);
    }
  }, [currentQuestion, shuffledQuestions]);

  useEffect(() => {
    // Limitar o número de perguntas a 10 e embaralhá-las
    setShuffledQuestions(shuffleAndLimitQuestions(questions, 10));
  }, []);

  useEffect(() => {
    let timer;
  
    if (timeRemaining > 0) {
      timer = setTimeout(() => {
        setTimeRemaining(timeRemaining - 1);
      }, 1000);
    } else {
      // Tempo esgotado, verificar se a resposta foi dada
      if (!selectedAnswer) {
        setConsecutiveCorrectAnswers(0); // Zerar respostas consecutivas corretas
      }
      
      handleNextQuestion(); // Avançar para a próxima pergunta
    }
  
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [timeRemaining, selectedAnswer]);


    // Função para embaralhar as perguntas e limitar a 10 perguntas
    function shuffleAndLimitQuestions(array, limit) {
      const shuffledArray = shuffleArray(array);
      return shuffledArray.slice(0, limit);
    }
  
    // Função para embaralhar um array
    function shuffleArray(array) {
      const newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
    }

    const handleAnswerClick = (selectedOption) => {
      if (selectedOption === shuffledQuestions[currentQuestion].correctAnswer) {
        // Resposta correta
        setScore(score + 100);
        setConsecutiveCorrectAnswers(consecutiveCorrectAnswers + 1);
        setTimeRemaining(0);
  
        // Exibir mensagens de sucesso com base nas respostas consecutivas
        const consecutiveMessages = {
          2: 'Você acertou 3 perguntas consecutivas!',
          4: 'Você acertou 5 perguntas consecutivas!',
          7: 'Você acertou 8 perguntas consecutivas!',
        };
  
        if (consecutiveMessages[consecutiveCorrectAnswers]) {
          setScore(score + 150);
          toast.success(`Parabéns! ${consecutiveMessages[consecutiveCorrectAnswers]}`, {
            autoClose: 2100,
            position: 'bottom-right',
          });
        }
      } else{
      setConsecutiveCorrectAnswers(0);
      setTimeRemaining(0);
    }

    setSelectedAnswer(selectedOption);

    setTimeout(() => {
      setSelectedAnswer(null);

      if (currentQuestion + 1 < shuffledQuestions.length) {
        setCurrentQuestion(currentQuestion + 1);
        setTimeRemaining(15);
      } else {
        // Mostrar a pontuação final após 10 perguntas
        setShowScore(true);
        setGameOver(true);
      }
    }, 2750);
  };

  const handleNextQuestion = () => {
    
    if (currentQuestion + 1 < shuffledQuestions.length) {
      setTimeout(() => {
        
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setTimeRemaining(15);
        
      }, 2100);
    } else {
      
      setTimeout(() => {
        // Mostrar a pontuação final após um atraso de 2,1 segundos
        setShowScore(true);
        setGameOver(true);
      }, 500);
    }
  };

 

  const resetGameState = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setGameOver(false);
    setSelectedAnswer(null);
    setConsecutiveCorrectAnswers(0);
    setTimeRemaining(15);
    setShuffledQuestions(shuffleAndLimitQuestions(questions, 10));
  };

  const restartGame = () => {
    resetGameState();
  };
  return (
    <QuizContext.Provider
      value={{
        
        currentQuestion,
        score,
        showScore,
        handleAnswerClick,
        selectedAnswer,
        restartGame,
        timeRemaining,
        shuffledQuestions,
        shuffledOptions
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  return useContext(QuizContext);
};
