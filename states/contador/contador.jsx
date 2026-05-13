function Contador() {

const [contador, setContador] = useState(0)
function incrementar(){
      if (contador === 10) {
        }  setContador(0);
    setContador(contador + 1)

      function decrementar() {
            if (contador > 0) {
            setContador(contador - 1);
        }
    
    }
}

    return (
        <div className="contador">
         <h1 className="contador_title">Contador {contador}  </h1>
         <button>Contar ++</button>
           <button onClick={decrementar}>
                Contar --
            </button>

        </div>
    );
}

export default Contador