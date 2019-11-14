import React from 'react';
import './Container.css';


// Composant fonction
const Themes = ({changeTheme, selectedTheme}) =>
        
    <label>
      <p className ='themes'>Themes:
        <select 
          className ="list" 
          onChange={changeTheme} 
        >
            <option value="1">Sport</option>
            <option value="2">Food</option>
            <option value="3">Travel</option>
        </select>
      </p>
    </label>

      
  ;
      
  export default Themes
