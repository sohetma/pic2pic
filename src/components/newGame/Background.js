import React, { url } from 'react';
// Affiche l'image de fond de la page Newgame, l'autre bout de code ce trouve dans NewGame
class Background extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        theme: './img/sport.jpg',
      }
    }

    render() {
        return (
            <div className="themes" style={{background: this.state.theme,}}>
            </div>
        );
    }
};
export default Background;
