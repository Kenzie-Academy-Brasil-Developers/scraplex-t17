import { useContext } from "react";
import { UserContext } from "./providers/UserContext";
import { RoutesMain } from "./routes/RoutesMain";
import { GlobalStyle } from "./styles/global";
import { ResetStyle } from "./styles/reset";

/*
alimenta um estado com o usuário
escreve uma chave no localStorage
navega o usuário para uma página x
*/

/*
limpa o estado de usuário
apagar a chave no localStorage
navegar o usuário para uma página y
*/

function App() {
   const { loading } = useContext(UserContext);
   return (
      <div className="App">
         <GlobalStyle />
         <ResetStyle />
         {loading ? <p>Carregando...</p> : <RoutesMain />}         
      </div>
   );
}

export default App;
