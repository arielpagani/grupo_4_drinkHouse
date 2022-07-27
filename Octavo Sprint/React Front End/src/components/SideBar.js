import logoReact from "../assets/Images/logo.png"
import {Link} from "react-router-dom"
import React from 'react';

function SideBar (){
    return (
        <React.Fragment>
        <div className = "contenedor-SideBar" >

            <ul className="contenedor-listadoSideBar">

                <li className="listado-SideBar">
                <img  src={logoReact} alt='Logo DrinkHouse'></img>
                </li>
                <hr></hr>

                <li className="listado-SideBar">
                    <Link to="/" >Home</Link>
                </li> 

                <li className="listado-SideBar">
                    <Link to="/views/administrador" >Productos</Link>
                </li>

                <li className="listado-SideBar">
                    <Link to="/views/usuarios" >Usuarios</Link>
                </li>

            </ul>
        </div>
        </React.Fragment>
    )
}

export default (SideBar);