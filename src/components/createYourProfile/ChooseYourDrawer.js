import React from 'react';
import chooseYourDrawer from './ChooseYourDrawer.js';
import './ChooseYourDrawer.css';

class ChooseYourDrawer extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      username : [],
      avatarsList : []
    }
  }

  render(){
    return (
        <div className="pencils-background">

            <div className="components-page">

                <div className="title-profile">
                    <h2><span className="word-create">Create </span><span className="word-your">your </span><span className="word-profile">profile</span></h2>
                </div>

                <div className="name-profile">
                    <input className="user-profile" id="username-avatar" type="text" placeholder="Enter your username here"></input>
                </div>

                <div className="avatar-profile">

                    <div className="choose-drawer">
                        <h2>Choose your drawer</h2>
                    </div>
                    <div className="list-avatars">
                        <div className="avatar-profile ghost"></div>
                        <div className="avatar-profile frog"></div>
                        <div className="avatar-profile genie"></div>
                        <div className="avatar-profile skeleton"></div>
                        <div className="avatar-profile unicorn"></div>
                        <div className="avatar-profile mermaid"></div>
                        <div className="avatar-profile invisibleman"></div>
                        <div className="avatar-profile witch"></div>
                    </div>

                </div>
            </div>
        </div>
    );
  }
}

export default ChooseYourDrawer;
