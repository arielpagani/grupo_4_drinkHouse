import React from 'react';
import {Route, Routes} from "react-router-dom";
import ContenedorDashboard from "./ContenedorDashboard";
import Usuarios from "./Usuarios";
import SideBar from "./SideBar";
import ListaProductos from "./ListaProductos"

function App() {
  return (
    <React.Fragment>
    <div id='App' className='Contenedor-App'> 
      <SideBar />
      <Routes>
        <Route path="/" exact element={<ContenedorDashboard />}/>
        <Route path="/views/administrador" exact element={<ListaProductos />}/>
        <Route path="/views/usuarios" exact element={<Usuarios />}/>
      </Routes>
    </div>
    </React.Fragment>
  );
}

export default App;
