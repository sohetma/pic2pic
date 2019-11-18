import React from 'react';
import './Contact.css';
import {Link, NavLink} from "react-router-dom";

const Contact = (props)  => {
    return (

        <div className="contact">

            <div className="espace-pub">

                <div className="logo-wild-code"></div>

                <div className="contact-1">

                    <div className="text-learn-tech">
                        <p>Learn tech skills with passion</p>
                    </div>

                    <a href="https://www.wildcodeschool.com/en-GB"><div className="button-web" > Visite our website </div></a>

                    <div className="buton-visit-website">

                    </div>
                </div>
            </div>

            <div className="contact-2">

                <div className="text-pic2pic">
                    <h1><span className="pic-1">Pic</span><span className="deux">2</span><span className="pic-2">Pic</span></h1>
                </div>

                <div className="team">
                    <h3>Team</h3>
                    <p>Benoit M.<br />Ghislain D.<br />Maxime S.<br />Nicolas H.</p>
                </div>

                <div className="school">

                    <div className="text-wcs">
                        <h3>school</h3>
                        <p>Wild code School</p>
                    </div>

                    <div className="logo-social">
                        <a href="https://www.facebook.com/wildcodeschoolbelgium/"><div className="logo-facebook"></div></a>
                        <a href="https://www.twitter.com/wildschool_bxl/"><div className="logo-twitter"></div></a>
                        <a href="https://www.instagram.com/wildcodeschoolbrussels/"><div className="logo-instagram"></div></a>

                    </div>

                </div>

                <div className="work">
                    <h3>Work</h3>
                    <p>Github<br />Trelllo<br />Slack<br /></p>

                </div>

            </div>

        </div>

    )
  }

export default Contact;
