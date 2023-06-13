import { RoutesMain } from "./routes/RoutesMain";
import { GlobalStyle } from "./styles/global";
import { ResetStyle } from "./styles/reset";

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
