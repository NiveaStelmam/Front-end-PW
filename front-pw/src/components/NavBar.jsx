import { Link } from "react-router-dom"
import "./Navbar.css"

const NavBar = () => {
  return (
    <nav className="navbar">
        <h2> 
            <Link to={`/`}>FruitSystem</Link>
            
        </h2>

        <ul>
            <li>
                <Link to={`/fruta`} >Cadastrar Fruta</Link>
            </li>
        </ul>
    </nav>
  )
}

export default NavBar