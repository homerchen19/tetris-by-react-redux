import React from 'react';
import { loadGame } from '../actions/index.js';

class Menu extends React.Component {

  componentDidMount() {
    window.addEventListener('keyup', this.props.handleSpaceBar);

    if(this.props.isPlaying) {
      alert("remove");
      window.removeEventListener('keyup', this.props.handleSpaceBar);
    }
  }

  render() {
    return (
      <div>
        <h1 id="pageMenu">Tetris</h1>
        {!this.props.isPlaying ? <h2 style={{color:'gray'}}>Press spacebar to play the game!</h2> : null}
      </div>
    );

  }
}

Menu.propTypes = {
  isPlaying: React.PropTypes.bool
}

export default Menu;
