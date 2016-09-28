import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { startGame } from '../containers/MenuContainer';
import { connect } from 'react-redux';
import { unpauseGame, setInitActiveTetrominoes } from '../actions/index';

let Banner = ({label, color, dispatch}) => {

	return (
		<div id="banner">
			<h1 style={{ paddingTop: '250px', color }}>{label}</h1>
			{ label === 'GAME OVER' ?
				<MuiThemeProvider>
					<RaisedButton
            label="New Game"
            onClick={() => dispatch([unpauseGame(), startGame(false), setInitActiveTetrominoes()])} />
				</MuiThemeProvider> : null}
		</div>
	);
};

Banner = connect()(Banner);
export default Banner;
