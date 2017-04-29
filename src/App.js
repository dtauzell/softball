import React, { Component } from 'react';
import GameView from './components/GameView.js';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  constructor(props) {
	super(props);
    this.state = {
		innings:  ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th'],
		people: ['sally', 'jane', 'robin'],
		positions: ['Pitcher', 'Catcher', '1st', '2nd', 'SS', '3rd', 'LF', 'CF', 'RF']
    }
  }

  render() {
	const {innings, people, positions}  = this.state;
	return (
    	<GameView innings={innings} people={people} positions={positions}/>
    );
  }

}

export default App;
