
class GameStore {
	constructor() {
		this.listeners = [];
		this.innings = ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th'];
		this.players = ['sally', 'jane', 'robin'];
		this.positions = ['Pitcher', 'Catcher', '1st', '2nd', 'SS', '3rd', 'LF', 'CF', 'RF'];
	}

	
	addListener(l) {
		this.listeners.push(l);
	}


	updateAssignment(player, inning, position){
        alert(player + ", inning: " + inning + ", p: " + position);
		this.listeners.map((l) => l.updated());
	}
}


export let gameStore = new GameStore();
