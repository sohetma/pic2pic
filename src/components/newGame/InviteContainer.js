import React from 'react';
import './InviteContainer.css';

const InviteContainer = () => {
    return(
        <div className="global">
          <p className="link">Link of the URL</p>
          <div className="login">
            <input className="form-control" type="text" readOnly placeholder="Localhost:3000"></input>
          </div>
      </div>

);
    }
export default InviteContainer;
