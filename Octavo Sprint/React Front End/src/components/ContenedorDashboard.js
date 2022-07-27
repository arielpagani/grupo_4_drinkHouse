import TopBar from './TopBar';
import Footer from './Footer';
import ContenedoresDatos from './ContenedoresDatos';
import ContenedorEstadisticas from './ContenedorEstadisticas';
import React from 'react';

function ContenedorDashboard() {
  return (
    <React.Fragment>
    <div id='Contenedor-Dashboard' className='Contenedor-Dashboard'>
        <div className='Contenedor-Body'>
        <TopBar />
        <ContenedoresDatos />
        <ContenedorEstadisticas />
        <Footer />
        </div>
    </div>
    </React.Fragment>
  );
}

export default ContenedorDashboard;