import { useEffect, useState } from "react";
import UsersItem from './UsersItem';
import './usersList.css';

function UsersList() {

    const [usuarios, setUsuarios] = useState([]);

    useEffect( () => {
        fetch("http://localhost:3001/api/usuarios")
            .then((response) => response.json())
            .then((data) => {
                setUsuarios(data.users);
            })
            .catch((error) => console.error(error))
    }, [] )

    return (
        <div className="contenedor-articulos">
            {usuarios.map((elemento) => (
                <UsersItem
                    key={elemento.id}
                    id={elemento.id}
                    name={elemento.name}
                    email={elemento.email}
                    detail={'/usuarios/' + elemento.id}
                />
            ))}
        </div>
    );
}

export default UsersList;