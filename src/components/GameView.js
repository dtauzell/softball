import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { gameStore } from '../store/GameStore.js';


class GameView extends Component {

  constructor(props) {
	super(props);
  }

  render() {

	const {innings, people, positions}  = this.props;
    return (
		<table>
			<tr>
				<th></th>
				 {innings.map((inning) =>
        			<td key={inning.toString()}>{inning}</td>
      		      )}	
			</tr>
			{positions.map((pos) =>
				<tr>
					<th>{pos}</th>
				 	{innings.map((inning) =>
						<td><InningPosition position={pos} inning={inning} players={people} /></td>
      		        )}	
				</tr>
			)}
		</table>
    );
  }
}

class InningPosition extends Component {
	constructor(props) {
		super(props);
	}

    updated(e, inning, position) {
		if( e.target.value ){
			gameStore.updateAssignment(e.target.value, inning, position);
		}
	}

	render() {
		const {inning, players, position}  = this.props;
		return (
			<select onChange={(e) => this.updated(e, inning, position)}>
			<option/>
			{players.map((p) =>
				<option value={p}>{p}</option>
			)}
			</select>
		);
	}
}

export default GameView;
