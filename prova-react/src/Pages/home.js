import { Link } from 'react-router'
import './Home.css'

function Home() {
  return (
    <section className='home-content'>
      <h2>Bem-vindo à PetFinder!</h2>
      <p>Conectamos você a pets incríveis que estão procurando um novo lar!</p>
      <Link to="/galeria">Ver PETS</Link>{" "}
    </section>
  )
}
export default Home