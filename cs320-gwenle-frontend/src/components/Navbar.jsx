import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `nav-link ${isActive ? "active" : ""}`;

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <img className="logo" src="/vite.svg" alt="Logo" />
        <span>Digital Marketing Pro</span>
      </div>

      <div className="nav-links">
        <NavLink className={linkClass} to="/">Home</NavLink>
        <NavLink className={linkClass} to="/services">Services</NavLink>
        <NavLink className={linkClass} to="/portfolio">Portfolio</NavLink>
        <NavLink className={linkClass} to="/booking">Booking</NavLink>
      </div>
    </nav>
  );
}
