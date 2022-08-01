import Dashboard from "../components/display/Dashboard";
import LastUser from "../components/display/LastUser";
import '../index.css';

function Home() {
  return (
    <div className="wrapper">
      <Dashboard />
      <LastUser />
    </div>
  );
}
export default Home;
