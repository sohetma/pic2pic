import React from 'react';


// Strategie :
// 1. Je recupere le nombre de joueur
// 2. Je sais qui est drawer et qui sont les players
// 3. En fonction de leur role, je redirige vers la bonne page
// 4. A la fin d'une partie, les roles changes

class Play extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      player : '',
      isDrawer : false
    };
  }

  playerSelection = () =>{
    
  }


  render = () =>  {
    return (
      <div className="play-game">
        <p> Actually empty </p>
      </div>
    );
  }
}

export default Play;
