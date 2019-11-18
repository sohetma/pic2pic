import React from 'react';
import './BoutonStart.css';
import { NavLink} from "react-router-dom";

const ButtonStart = () => {
    return(
        <div className="button">
            <button className="start" >
              <NavLink className="center-text" activeClassName="active" exact to="/profile"> Start </NavLink>
            </button>

        </div>
);
    }
export default ButtonStart;
