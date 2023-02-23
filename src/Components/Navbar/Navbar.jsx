import React, { useState } from "react";
import './Navbar.css';
import { Icon } from "react-icons-kit";
import { menu } from "react-icons-kit/feather/menu";
import { x } from "react-icons-kit/feather/x";
import logo from "./image/logo.png"

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className={toggle ? "navbar expanded" : "navbar"}>
      <img className="logo" src={logo} alt="tribe.fly" />
      <div className="toggle-icon" onClick={handleToggle}>
        {toggle ? <Icon icon={x} size={28} /> : <Icon icon={menu} size={28} />}
      </div>
      <ul className="links">
        <li>Descúbre</li>
        <li>Sobre nosotros</li>
        <li>El tiempo</li>
        <li>Contáctanos</li>
      </ul>
    </nav>
  );
};

export default Navbar;