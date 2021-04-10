import React from "react";
import { Link } from "react-router-dom";

const Menu = (props) => {
  return (
    <ul>
      <li>
        <Link to="Red">Red</Link>
      </li>
      <li>
        <Link to="Blue">Blue</Link>
      </li>
    </ul>
  );
};

export default Menu;
