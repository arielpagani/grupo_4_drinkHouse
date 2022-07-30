import { Link } from "react-router-dom";
import './usersItem.css';

function UsersItem(props) {
    return (
        <div className="card">
            <p className="text">ID: {props.id}</p>
            <p className="text">Nombre: {props.name}</p>
            <p className="text">Email: {props.email}</p>
            <Link to={props.detail}>Saber mas</Link>
        </div>
    )
}
export default UsersItem;