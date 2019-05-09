import React from "react";
import { Link } from "react-router-dom";

const Menu = props => {
  return (
    <div>
      <ul className="nav">
        {props.linkItems.map((name, idx) => {
          return (
            <li className="nav-item" key={idx}>
              <Link className="nav-link" to={name}>
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Menu;
