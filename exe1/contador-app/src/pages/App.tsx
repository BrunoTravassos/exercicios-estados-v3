import { Contador } from "../components/contador/contador"
import "../css/global.css"

function App() {
  
  return (
    <div className="container">
     <Contador valorInicial={0}/>
    </div>
  )
}

export default App
