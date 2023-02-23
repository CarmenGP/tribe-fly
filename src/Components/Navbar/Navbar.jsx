import React, { useState } from "react";
import './Navbar.css';
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/feather/menu";
import { x } from "react-icons-kit/feather/x";
import logo from "./image/logo.png"
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className={toggle ? "navbar expanded" : "navbar"}>
      <Link className="logo" to="/"><img className="logo" src={logo} alt="tribe.fly" /></Link>
      <div className="toggle-icon" onClick={handleToggle}>
        {toggle ? <Icon icon={x} size={28} /> : <Icon icon={menu} size={28} />}
      </div>
      <ul className="links">
        <Link to="/Descubre" className="link"><li>Descúbre</li></Link>
        <Link to="/SobreNosotros" className="link"><li>Sobre nosotros</li></Link>
        <a className="link"><li>El tiempo</li></a>
        <Link to="/SobreNosotros" className="link"><li>Contáctanos</li></Link>
      </ul>
    </nav>
  );
};

export default Navbar;