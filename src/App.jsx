import { RoutesMain } from "./routes/RoutesMain"
import { Link } from "react-router-dom"
import { GlobalStyle } from "./styles/global"
import { ResetStyle } from "./styles/reset"
import { Header } from "./components/Header"

function App() {  return (
    <div className="App">
      <GlobalStyle />
      <ResetStyle />
      <Header />
      <RoutesMain />
    </div>
  )
}

export default App
