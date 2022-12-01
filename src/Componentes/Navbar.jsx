import { Link } from "react-router-dom"

function NavBar(){
    return(
        <ul>
          <li><Link to="/Productos">INICIO</Link></li>
          <li><Link to="/Registro">INSCRIBIRSE</Link></li>
          <li><Link to="/Acceso">ACCESO</Link></li>
        </ul>
    )
}

export default NavBar