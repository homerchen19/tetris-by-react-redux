import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Layer, Stage } from 'react-konva';

let GameInfo = ({ points, clearedLines, nextTetromino, isPlaying, isPaused, isGameOver, changePauseState }) => {

  const buttonStyle = {
		margin: '20% 0',
	};

  if(isPlaying) {
    return (
      <div id="gameInfo">
        <RaisedButton
          label={ isPaused ? 'UNPAUSE' : 'PAUSE'}
          style={ buttonStyle }
          primary
          onClick={ changePauseState }
          disabled={ isGameOver }
        />
        <div className="scorePanel">
          <h2>Next</h2>
          <Stage width={ 250 } height={ 100 }>
            <Layer>
							{/* <NextTetromino /> */}
            </Layer>
          </Stage>
        </div>
        <div className="scorePanel">
					<h2>Score</h2>
					<span className="scoreInfo">{ points }</span>
					<h2>Lines</h2>
					<span className="scoreInfo">{ clearedLines }</span>
				</div>
      </div>
    );
  }
  return null;
};

export default GameInfo;
