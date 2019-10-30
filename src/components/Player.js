import React from 'react';


class Player extends React.Component {
  constructor(props) {
    super(props);
    this.username = username;
    this.avatar = avatar;
    this.state = {
    points: 0
    };

  }
  get username() {
    return this.username;
  }
}


export default Player;
