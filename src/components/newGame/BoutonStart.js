import React from 'react';
import './BoutonStart.css';
import {Link, NavLink} from "react-router-dom";

const ButtonStart = () => {
    return(
        <div className="button">
            <button className="start">
              <NavLink className="center-text" activeClassName="active" exact to="/game"> Start </NavLink>
            </button>

        </div>
);
    }
export default ButtonStart;
