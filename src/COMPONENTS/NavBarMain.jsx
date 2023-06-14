import React from "react";
import { NavLink } from "react-router-dom";
import style from '../CSS/NavBarMain.module.css';

function NavBarMain(props) {
  return (
    <div className={style.block}>
      <NavLink to="/main/about">
        <h1>{props.name}</h1>
      </NavLink>

      <ul>
        <li>
          <NavLink to="/main/menu">menu</NavLink>
        </li>

        <li>
          <NavLink to="/main/orders">orders</NavLink>
        </li>

        {props.status && (
          <li>
            <NavLink to="/main/settings">settings</NavLink>
          </li>
        )}
      </ul>
    </div>
  );
}

export default NavBarMain;
