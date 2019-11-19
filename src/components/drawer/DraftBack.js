import React from 'react';
import './ButtonRefresh.css';


const DraftBack = (props) => (
  <button
    id = "Back"
    className = "DraftBack"
    onClick = {() => props.draftBack()}
  >
    <span role="img" aria-label="Back"> ↩️ </span>
  </button>
);

export default DraftBack;
