import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';



class GameView extends Component {

  constructor(props) {
	super(props);
  }

  render() {

	const {innings, people, positions}  = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
        </p>
	
		<p>
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
		</p>

      </div>
    );
  }
}

class InningPosition extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const {innings, players, positions}  = this.props;
		return (
			<select>
			<option/>
			{players.map((p) =>
				<option>{p}</option>
			)}
			</select>
		);
	}
}

export default GameView;
