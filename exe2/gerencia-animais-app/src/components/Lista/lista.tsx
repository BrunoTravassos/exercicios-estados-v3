import style from './lista.module.css'

type Animal = {
  id: number;
  nome: string;
  especie: string;
};

type Props = {
  animais: Animal[];
}

export function Lista({animais}:Props){
    return(
        <ul className={style.animal__list}>
          {animais.map(animal=>(
            <li key={animal.id}>{animal.nome} - {animal.especie}</li>
          ))}
        </ul>
    )
}