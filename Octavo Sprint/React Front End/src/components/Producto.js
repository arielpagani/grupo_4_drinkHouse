import React from 'react';

function Producto(props) {
  return (
  <React.Fragment>
  <div id='Class4' className='Class4'>
      
        <div className='Class5'>
       
        {<img src={ `../assets${props.imagen_producto }`} alt={ `../assets${props.imagen_producto }`} />}
        </div>
        <div className='Class5'>
        {props.id_producto}
        </div>
        <div className='Class5'>
        {props.marca}
        </div>
        <div className='Class5'>
        {props.precio}
        </div>
    
  </div>
  </React.Fragment>
  )
}
export default Producto;