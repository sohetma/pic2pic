import React from 'react';
import chooseYourDrawer from './chooseYourDrawer.js';
import './chooseYourDrawer.css';

function chooseYourDrawer() {
    return (
        <div ClassName="pencils-background">
        
            <div ClassName="components-page">
        
                <div ClassName="title-profile">
                    <h2><span ClassName="word-create">Create</span><span ClassName="word-your">your</span><span ClassName="word-profile">profile</span></h2>
                </div>

                <div ClassName="name-profile">
                    <h2>Enter your name here...</h2>
                </div>

                <div ClassName="avatar-profile">

                    <div ClassName="choose-drawer">
                        <h2>Choose your drawer</h2>
                    </div>  
                    <div ClassName="list-avatars">
                        <div ClassName="ghost"></div>
                        <div ClassName="frog"></div>
                        <div ClassName="genie"></div>
                        <div ClassName="skeleton"></div>
                        <div ClassName="unicorn"></div>
                        <div ClassName="mermaid"></div>
                        <div ClassName="invisibleman"></div>
                        <div ClassName="witch"></div>         
                    </div> 
              
                </div>  
            </div>
        </div>
    )
}   

export default chooseYourDrawer;