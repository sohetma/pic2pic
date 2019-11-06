import React from 'react';
import Round from './Round.js';
import Themes from './Themes.js';
import ButtonStart from './BoutonStart.js';
import './Container.css';

const Container = () => {
    return(
    <section className ='container'>
        <div className ='box'>
            <Round/>
        </div>
        <div className ='box'>
            <Themes/>
        </div>
        <ButtonStart/>
    </section>

);
    }
export default Container;
