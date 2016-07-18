"use strict";

const Combat = function () {
	// user chooses each player
	this.player1 = null;
	this.player2 = null;

	//fucntion to determine when fight is over
	function fatality (player1Health, player2Health) {
		if (player1Health <= 0) {
			player1Health = 0;
			return 'player1';
		}
		else if (player2Health <= 0) {
			player2Health = 0;
			return 'player2';
		}
		else {
			return 'none';
		}
	}
};

module.exports = {Combat};