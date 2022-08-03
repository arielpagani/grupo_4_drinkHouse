import { Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import ProductDetail from "./components/display/ProductDetail";
import Footer from "./components/layout/Footer";
import Marcas from "./components/layout/Marcas";
import ProductList from "./components/display/ProductList";
import Categories from "./pages/Categories";
import UsersList from "./components/display/UsersList";
import UserDetail from "./components/display/UserDetail";

function App() {
  return (
    <div className="proyect">
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/productos/:id">
          <ProductDetail />
        </Route>
        <Route path="/productos">
          <ProductList />
        </Route>
        <Route path="/categoria/:id">
          <Categories />
        </Route>
        <Route path="/usuarios/:id">
          <UserDetail />
        </Route>
        <Route path="/usuarios">
          <UsersList />
        </Route>
      </Switch>
      <Marcas />
      <Footer />
    </div>
  );
}

export default App;
