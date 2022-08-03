import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import "./productList.css";

function ProductList() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/productos")
      .then((response) => response.json())
      .then((data) => {
        setProductos(data.products);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="contenedor-articulos">
      {productos.map((elemento) => (
        <ProductItem
          key={elemento.id}
          id={elemento.id}
          title={elemento.name}
          description={elemento.description}
          detail={"/productos/" + elemento.id}
        />
      ))}
    </div>
  );
}

export default ProductList;
