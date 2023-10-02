import { QuizProvider } from "./QuizContext";

export const AppProvider = ({children,session}) => {



    return (
    
      <QuizProvider>
      
    
        
  {children}



  </QuizProvider>
    
    
    )
}