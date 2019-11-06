import React from 'react';
import './ButtonRefresh.css';


const DraftBack = (props) => (
  <button
    className = "DraftBack"
    onClick = {() => props.draftBack()}
  > Get your draft back </button>
);

export default DraftBack;
