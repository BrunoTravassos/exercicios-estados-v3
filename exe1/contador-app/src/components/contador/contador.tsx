import { useState } from "react"

type contadorProps = {
    valorInicial: number;
}
export function Contador({ valorInicial }: Readonly<contadorProps>) {
    const [contador, setContador] = useState(valorInicial)
    const [mensagem, setMensagem] = useState("")


    function incrementar() {
        setContador(contador + 1);
        setMensagem("")
    }
    function decrementar() {
        if (contador > 0) {
            setContador(contador - 1);
            setMensagem("")
        }else{
            setMensagem("O contador não pode ser negativo!")
        }

    }

    return (
        <div>
            <h1>Contador</h1>
            {mensagem && <p style={{ color: 'red' }}>{mensagem}</p>}
            <p>valor:{contador}</p>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Descrementar</button>
        </div>
    )
}