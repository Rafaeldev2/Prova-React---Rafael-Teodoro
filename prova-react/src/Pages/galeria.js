import { useEffect, useState } from 'react'
import './Galeria.css'

function Galeria() {
  const [pets, setPets] = useState([])
  const lista = [
    { id: 1, nome: "Tobby", especie: "Cachorro", idade: 4 },
    { id: 2, nome: "Mia", especie: "Gato", idade: 2 },
    { id: 3, nome: "Luna", especie: "Cachorro", idade: 1 },
    { id: 4, nome: "Nino", especie: "Gato", idade: 3 },
    { id: 5, nome: "Bolt", especie: "Cachorro", idade: 5 },
    { id: 6, nome: "Frajola", especie: "Gato", idade: 6 },
    { id: 7, nome: "Pipoca", especie: "Cachorro", idade: 2 },
    { id: 8, nome: "Tom", especie: "Gato", idade: 3 },
    { id: 9, nome: "Mel", especie: "Cachorro", idade: 1 },
    { id: 10, nome: "Bidu", especie: "Cachorro", idade: 7 },
    { id: 11, nome: "Salem", especie: "Gato", idade: 2 },
    { id: 12, nome: "Max", especie: "Cachorro", idade: 3 },
    { id: 13, nome: "Amora", especie: "Gato", idade: 5 },
    { id: 14, nome: "Nina", especie: "Cachorro", idade: 4 },
    { id: 15, nome: "Simba", especie: "Gato", idade: 2 }
  ];

  useEffect(() => {
    setPets(lista)
  }, [])

  return (
    <section className='products-content'>
      <h2>Pets Cadastrados</h2>
      <p>Total de pets: {pets.length}</p>

      {pets.length === 0 ? (
        <p>Nenhum pet cadastrado ainda.</p>
      ) : (
        pets.map((pet) => (
          <div key={pet.id} className="product-list">
            {pet.nome} - {pet.especie} - {pet.idade} anos
          </div>
        ))
      )}
    </section>
  )
}
export default Galeria