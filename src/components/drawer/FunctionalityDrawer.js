import React from 'react';
//import './FunctionalityDrawer.css';
import ButtonRefresh from './ButtonRefresh.js';
import SaveTheDraw from './SaveTheDraw.js';
import DraftBack from './DraftBack.js';

const FunctionalityDrawer = (props) => (
  <div className = "FunctionalityDrawer">
    <ButtonRefresh
      className="div-button-refresh"
      refresh={props.refresh}
    ></ButtonRefresh>

    <SaveTheDraw saveTheDraw={props.saveTheDraw}
    ></SaveTheDraw>

    <DraftBack draftBack={props.draftBack}
    ></DraftBack>

  </div>
);

export default FunctionalityDrawer;
