import { useState } from "react"
import "./App.css"
import Contador from "./components/contador/Contador"
import Formulariostate from "../formulariostate/formulariostate"
import CardFruta from "../cardfruta/cardfruta"

function App() {
  const [titulo, setTitulo] = useState("Google")

function mudarTexto() {
  setTitulo("Microsoft")
}

function mudarTexto2() {
  setTitulo("Adenicon")
}

  return (
    <>
      {/* <h1>Minha Pagina de {titulo}</h1>
      <button onClick={mudarTexto}>Mudar Texto</button> 
      <br />
      <button onClick={mudarTexto2}>Adenicon</button>

      <Contador /> */}

    {/* <Formulariostate /> */}
    < CardFruta/>
    </>
  )
}

export default App