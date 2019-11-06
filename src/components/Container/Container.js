import React from 'react'
import Round from '../../components/ListBox/Round'
import Themes from '../../components/ListBox/Themes'
import ButtonStart from '../newGame/BoutonStart'
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