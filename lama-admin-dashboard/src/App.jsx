import { Link, NavLink, Outlet } from "react-router";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      {/* <nav>
        <Link to="/">Home</Link>
      </nav>
      <nav>
        <Link to="/users">Users</Link>
      </nav>
      <nav>
        <Link to="/products">Products</Link>
      </nav>

      <Outlet /> */}

      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
