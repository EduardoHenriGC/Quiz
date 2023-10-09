import { useQuiz } from "@/context/QuizContext";
import styles from "@/styles/DisplayGame/DisplayGame.module.css"
import Question from "../Question";
import OptionButton from "../OptionButton";

export default function DisplayGame() {

    const { currentQuestion, shuffledQuestions } = useQuiz();

    // Verifica se currentQuestion é uma posição válida no array de shuffledQuestions
    // e se shuffledQuestions[currentQuestion] está definido
    const currentQuestionValid =
        currentQuestion >= 0 && currentQuestion < shuffledQuestions.length;
    const currentQuestionObj = currentQuestionValid
        ? shuffledQuestions[currentQuestion]
        : null;

    return (
        <div className={styles.QuestionAndAnswerContent}>
            <Question currentQuestionObj={currentQuestionObj} currentQuestion={currentQuestion} />
            <OptionButton currentQuestionObj={currentQuestionObj} />
        </div>
    )
}