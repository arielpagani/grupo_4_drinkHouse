import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductItem from "../components/display/ProductItem";

function Products() {
  let { id } = useParams();

  const [categoria, setCategoria] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/productos")
      .then((response) => response.json())
      .then((data) => {
        setCategoria(data.products);
      })
      .catch((error) => console.error(error));
  }, []);

  const result = categoria.filter((elemento) => {
    return elemento.categoria == id;
  });

  return (
    <div className="contenedor-articulos">
      {result.map((elemento) => (
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

export default Products;
