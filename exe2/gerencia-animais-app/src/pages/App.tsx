import { useState } from 'react'
import { Controle } from '../components/Controle/controle'
import { Lista } from '../components/Lista/lista'
import '../css/App.css'

type Animal = {
  id: number;
  nome: string;
  especie: string;
};

function App() {

  const [animais, setAnimais] = useState<Animal[]>([
    { id: 1, nome: 'Jorgina', especie: 'Cachorro' },
    { id: 2, nome: 'Stark', especie: 'Cachorro' },
    { id: 3, nome: 'Chico', especie: 'Gato' },
  ]);

  function gerarNomeAleatorio() {
    const nomes = ['Lucky', 'Rex', 'Bolinha', 'Frajola', 'Whiskas'];
    return nomes[Math.floor(Math.random() * nomes.length)];
  };

  function gerarEspecieAleatoria(){
    const especies = ['Canina', 'Felina'];
    return especies[Math.floor(Math.random() * especies.length)];
  };

  function adicionarAnimal(){
    const novoAnimais = [...animais];
    const novoAnimal: Animal = {
      id: novoAnimais.length ? novoAnimais[novoAnimais.length - 1].id + 1 : 1,
      nome: gerarNomeAleatorio(),
      especie: gerarEspecieAleatoria(),
    };
    setAnimais([...novoAnimais, novoAnimal]);
  };


  function deletarAnimal(){
    const novoAnimais = animais.filter((animal) => animal.id !== animais.length);
    setAnimais(novoAnimais);
  }

 return (
    <>
      <section className='container'>
        <Lista animais={animais}/>
        <Controle 
          animais={animais}
          adicionarAnimal={adicionarAnimal}
          deletarAnimal={deletarAnimal}

        />
      </section>
    </>
  )
}

export default App
