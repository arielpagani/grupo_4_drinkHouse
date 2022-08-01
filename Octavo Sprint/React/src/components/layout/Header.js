import "./header.css";
import logo from "../../assets/images/Drink_House_SVG.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header">
        <div className="top-header">
          <Link to='/'>
            <img src={logo} alt="logo" id="logo" />
          </Link>
          <div class="header-busqueda">
            <input type="search" id="search" placeholder="¿Que vas a pedir?" />
          </div>
          <button className="btn">
            <Link to="/usuarios">Usuarios</Link>
          </button>
        </div>
        <div className="bottom-header">
          <button className="btn">
            <Link to="/categoria/3">Cervezas</Link>
          </button>
          <button className="btn">
            <Link to="/categoria/4">Whiskeys</Link>
          </button>
          <button className="btn">
            <Link to="/categoria/1">Vinos</Link>
          </button>
          <button className="btn">
            <Link to="/categoria/2">Licores</Link>
          </button>
          <button className="btn">
            <Link to="/productos">Catalogo</Link>
          </button>
        </div>
      </div>
    </header>
  );
}
export default Header;
