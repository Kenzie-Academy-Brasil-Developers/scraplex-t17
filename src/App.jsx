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
   return (
      <div className="App">
         <GlobalStyle />
         <ResetStyle />
         <RoutesMain />
      </div>
   );
}

export default App;
