import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import './dashboard.css';

function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);

  const [apiProductos, setApiProductos] = useState([]);
  let countByCategory = [];
  let products = [];
  let lastProduct = [];

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3001/api/productos")
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setApiProductos(data);
      })
      .catch((error) => console.error(error));
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  countByCategory = apiProductos.countByCategory;
  products = apiProductos.products;

  lastProduct = products.pop();

  return (
    <div>
      <h2>Last product</h2>
      <ProductItem
        key={lastProduct.id}
        id={lastProduct.id}
        title={lastProduct.name}
        description={lastProduct.description}
        detail={"/productos/" + lastProduct.id}
      />
      <h2>Count By Category</h2>
      <div className="count">
        <p className="text">Cervezas: {countByCategory.Cervezas}</p>
        <p className="text">Whiskeys: {countByCategory.Whiskeys}</p>
        <p className="text">Licores: {countByCategory.Licores}</p>
        <p className="text">Vinos: {countByCategory.Vinos}</p>
      </div>
    </div>
  );
}
export default Dashboard;
