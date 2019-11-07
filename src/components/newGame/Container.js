import React from 'react';
import Round from './Round.js';
import Themes from './Themes.js';
import ButtonStart from './BoutonStart.js';
import './Container.css';

// include the central part with lobby, round and themes
const Container = () => {
    return(
        <div className="container-first">
            <div className ='container'>
                <div className ='box'>
                    <Round/>
                </div>
                <div className ='box'>
                    <Themes/>
                </div>
            </div>
        </div>
);
    }
export default Container;
