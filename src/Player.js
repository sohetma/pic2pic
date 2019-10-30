import React from 'react';


class Player{
  constructor(username, avatar, points) {
    this.username = username;
    this.avatar = avatar;
    this.points = points;
  }

  get username() {
    return this.username;
  }

  get avatar() {
    return this.avatar;
  }

  get points() {
    return this.points;
  }

}

export default Player;
