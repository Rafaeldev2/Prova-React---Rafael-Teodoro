import { Link } from 'react-router'
import './Header.css'

function Header() {
  return (
    <header className="bg-primary text-white text-center p-3">
      <h1>PetFinder</h1>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/galeria">Galeria</Link>{" "}
      </nav>
    </header>
  )
}
export default Header