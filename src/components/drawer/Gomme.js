import React from 'react';
//import './Gomme;


const Gomme = (props) => (
  <button
    className = "Gomme"
    onClick = {() => props.refresh()}
  > Gomme your draft </button>
);

export default Gomme;
