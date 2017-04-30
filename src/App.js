import React, { Component } from 'react';
import GameView from './components/GameView.js';
import logo from './logo.svg';
import './App.css';
import { gameStore } from './store/GameStore.js';


class App extends Component {

    constructor(props) {
	super(props);
	this.state = {
	    innings: gameStore.innings,
	    people: gameStore.players,
		positions: gameStore.positions
	}
	gameStore.addListener(this);
    }

    updated() {
	alert("store updated");	
    }

    render() {
	const {innings, people, positions}  = this.state;
	return (
		<div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Game Assignments</h2>
        </div>
    	<GameView innings={innings} people={people} positions={positions}/>
		</div>
		);
    }

}

export default App;
