import React from 'react';

function TopBar() {
  return (
    <React.Fragment>
    <div className = "contenedor-TopBar">

      <ul className="contenedor-listadoTopBar">

        <li className="listado-TopBar">
            Ingresar
        </li>

        <li className="listado-TopBar">
            Registrarse
        </li>

        </ul>
    </div>
    </React.Fragment>
  );
}

export default TopBar;
