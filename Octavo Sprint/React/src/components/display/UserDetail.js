import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './userDetail.css';

function UserDetail() {
  let { id } = useParams();

  const [usuario, setUsuario] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/usuarios/" + id)
      .then((response) => response.json())
      .then((data) => {
        setUsuario(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="user-display">
      <img className='avatar' src={usuario.avatar} alt="imagen" />
      <div className="product-details">
        <p>ID: {usuario.id}</p>
        <p>Nombre: {usuario.nombre}</p>
        <p>Apellido: {usuario.apellido}</p>
        <p>Email: {usuario.email}</p>
        <p>Fecha de nacimiento: {usuario.fechaDeNacimiento}</p>
        <p>Telefono: {usuario.telefono}</p>
        <p>Direccion: {usuario.direccion}</p>
      </div>
    </div>
  );
}
export default UserDetail;
