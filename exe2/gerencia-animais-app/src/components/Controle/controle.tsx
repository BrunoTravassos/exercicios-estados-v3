import style from './controle.module.css'

type Animal = {
    id: number;
    nome: string;
    especie: string;
  };

  type Props = {
    animais: Animal[];
    adicionarAnimal:()=>void;
    deletarAnimal:()=>void;
  }

export function Controle(props:Props){
    return(
        <div>
        <button className={style.confirm} onClick={props.adicionarAnimal}>Adicionar</button>
        <button className={style.cancel} onClick={props.deletarAnimal}>Deletar</button>
        </div>
    )
}