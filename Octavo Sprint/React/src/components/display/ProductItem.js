import { Link } from "react-router-dom";
import "./productItem.css";

function ProductItem(props) {
  return (
    <div className="card">
      <div className="card1">
        <p className="text">ID: {props.id}</p>
        <p className="text">Marca: {props.title}</p>
      </div>
      <p>Descripcion: {props.description}</p>
      <Link to={props.detail}>Saber mas</Link>
    </div>
  );
}
export default ProductItem;
