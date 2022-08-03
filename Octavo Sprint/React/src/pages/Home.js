import Dashboard from "../components/display/Dashboard";
import LastUser from "../components/display/LastUser";
import Orders from "../components/display/Orders";
import '../index.css';

function Home() {
  return (
    <div className="wrapper">
      <Dashboard />
      <LastUser />
      <Orders />
    </div>
  );
}
export default Home;
