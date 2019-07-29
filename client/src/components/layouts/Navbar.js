import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ title, icon }) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        {" "}
        <i className={icon} />
        {title}
      </h1>

      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </nav>
  );
};
Navbar.defaultProps = {
  title: "Student",
  icon: "fas fa-user"
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
