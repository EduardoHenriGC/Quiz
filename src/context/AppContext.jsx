import { SessionProvider } from "next-auth/react";
import { QuizProvider } from "./QuizContext";

export const AppProvider = ({children,session}) => {



    return (
    <SessionProvider session={session}>
      <QuizProvider>
      
    
        
  {children}



  </QuizProvider>
    
    </SessionProvider>
    )
}