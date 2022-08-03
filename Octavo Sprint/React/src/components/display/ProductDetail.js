import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./productDetail.css";

function ProductDetail() {
  let { id } = useParams();

  const [producto, setProducto] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/productos/" + id)
      .then((response) => response.json())
      .then((data) => {
        setProducto(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="product-display">
      <img src={producto.imagen_producto} alt="imagen" />
      <div className="product-details">
        <p>{producto.marca}</p>
        <p>Precio: ${producto.precio}</p>
        <p>Descuento: %{producto.descuento}</p>
        <p>{producto.descripcion}</p>
        <p>Stock: {producto.stock}</p>
        <p>ID: {producto.id_producto}</p>
      </div>
    </div>
  );
}
export default ProductDetail;
