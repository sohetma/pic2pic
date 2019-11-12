import React from 'react';
import './ButtonRefresh.css';


const DraftBack = (props) => (
  <button
    id = "Back"
    className = "DraftBack"
    onClick = {() => props.draftBack()}
  > ↩️ </button>
);

export default DraftBack;
