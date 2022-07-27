import React from 'react';

function ContenedorEstadisticas() {
  return (
    <React.Fragment>
    <div>
        <div className='Contenedor-ContenedoresDatos'>
            <ul className="Contenedor-ListadoProductos">

                <li className="ListadoProductos">
                    <h2>Producto mas Vendido</h2>
                </li>

                <li className="ListadoProductos">
                    <h2>Usuario mas Activo</h2>
                </li> 

            </ul>
        </div>
    </div>
    </React.Fragment>
  );
}

export default ContenedorEstadisticas;
