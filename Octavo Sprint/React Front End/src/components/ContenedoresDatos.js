import React, {Component} from 'react';
import Producto from './Producto';

class ContenedoresDatos extends Component {
    
        constructor() { 
            super ();
            this.state = {
               productosList: [],
          }
        }

        componentDidMount() {
            fetch("/api/productos")
            .then (respuesta => {
                return respuesta.json()})
            .then(productos => {
                this.setState ({productosList: productos})})
                
            
            .catch (error => console.log (error))
        }
    render(){
  return (
    <React.Fragment>
    <div>
        <div className='Contenedor-ContenedoresDatos'>
            <ul className="Contenedor-ListadoProductos">

                <li className="ListadoProductos">
            
                <h2> Total Productos: {this.state.productosList.length} </h2>  
                              
                </li>

                <li className="ListadoProductos">
                    <h2>Listado de Usuarios</h2>
                </li> 

                <li className="ListadoProductos">
                    <h2>Listado de Ventas</h2>
                </li>

                <li className="ListadoProductos">
                    <h2>Nuevos Usuarios</h2>
                </li>

            </ul>
        </div>
      
    </div>
    </React.Fragment>
  );
}
}

export default ContenedoresDatos;
