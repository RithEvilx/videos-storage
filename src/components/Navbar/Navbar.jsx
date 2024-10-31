import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className="navbar">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="dropdown">
            Categories
            <ul className="dropdown-menu">
              <li>
                <NavLink to="/youtube">Youtube Videos</NavLink>
              </li>
              <li>
                <NavLink to="/tiktok">Tiktok Videos</NavLink>
              </li>
              <li>
                <NavLink to="/facebook">Facebook Videos</NavLink>
              </li>
              <li>
                <NavLink to="/instagram">Instagram Videos</NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
