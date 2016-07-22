(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";


function Combat () {
	// function to determine when fight is over
	// function fatality (player1Health, player2Health) {
	// 	if (player1Health <= 0) {
	// 		player1Health = 0;
	// 		return 'player1';
	// 	}
	// 	else if (player2Health <= 0) {
	// 		player2Health = 0;
	// 		return 'player2';
	// 	}
	// 	else {
	// 		return 'none';
	// 	}
	// }
};

// module.exports = {Combat};








//fucntion to determine when fight is over
// function fatality (player1Health, player2Health) {
// 	if (player1Health <= 0) {
// 		player1Health = 0;
// 		return 'player1';
// 	}
// 	else if (player2Health <= 0) {
// 		player2Health = 0;
// 		return 'player2';
// 	}
// 	else {
// 		return 'none';
// 	}
// }

},{}],2:[function(require,module,exports){
'use strict';

const Combat = require('./combat');

// bot types
const Megachine = require('./typesATV').Megachine;
const Bladey = require('./typesATV').Bladey;
const PewPew = require('./typesDrone').PewPew;
const WhirrrMachine = require('./typesDrone').WhirrrMachine;
const ThreeLegs = require('./typesBipedal').ThreeLegs;
const StoneHands = require('./typesBipedal').StoneHands;

let player1;
let player2;
let player1Box = $('#player1Box');
let player2Box = $('#player2Box');

let botArr = [
	Megachine,
	Bladey,
	PewPew,
	WhirrrMachine,
	ThreeLegs,
	StoneHands
];

$('.gamePlayContainer').hide();

//populate bot chooser
let populateBotSelect = () => {
	for (let i = 0, j = botArr.length; i < j; i++) {
		$('.selectBox').append(`
			<option class='botType'>${botArr[i].name}</option>
		`);
	}
}
populateBotSelect();

//determines which bots to instantiate and fills player boxes
let instaBot = (name, chosenBot, box) => {
	let robot = null;
	let playerName = null;
	if (chosenBot === 'Megachine') {
		robot = new Megachine();
		// playerName = name;
	} else if (chosenBot === 'Bladey') {
		robot = new Bladey();
		// playerName = name;
	} else if (chosenBot === 'PewPew') {
		robot = new PewPew();
		// playerName = name;
	} else if (chosenBot === 'WhirrrMachine') {
		robot = new WhirrrMachine();
		// playerName = name;
	} else if (chosenBot === 'ThreeLegs') {
		robot = new ThreeLegs();
		// playerName = name;
	} else if (chosenBot === 'StoneHands') {
		robot =  new StoneHands();
		// playerName = name;
	}
	//builds player boxes in DOM
	let playerTitle = `<h3>${name} the ${chosenBot}!</h3>`;
	box.append(playerTitle);

	return robot;
}

function setupFight () {
	let player1Name = $('#player1').val(),
			player1Bot = $('#player1Select').val(),
			player2Name = $('#player2').val(),
			player2Bot = $('#player2Select').val();

	if (player1Name === '' || player2Name === '') {
		alert('Must fill in your name to continue!');
	}

	//instantiates players
	player1 = instaBot(player1Name, player1Bot, player1Box);
	player2 = instaBot(player2Name, player2Bot, player2Box);

	player1Box.append(`<h2 class="health">${player1.health}</h2>`);
	player2Box.append(`<h2 class="health">${player2.health}</h2>`);
	$('.gameStartContainer').empty();
	$('.gamePlayContainer').show();
	console.log('Fight started');
	beginRound();
};

$('#startFightBtn').click(setupFight);

//player clicks this button for 1 round of damage to each robot

let beginRound = function () {
	if (player1.health <= 0) {
		player1.health = 0;
		return 'player1';
	}
	else if (player2.health <= 0) {
		player2.health = 0;
		return 'player2';
	}
	console.log('Howdy');


};

$('#attackBtn').click(beginRound);

},{"./combat":1,"./typesATV":5,"./typesBipedal":6,"./typesDrone":7}],3:[function(require,module,exports){
"use strict";

var randoRange = (min, max) => {
	let range = Math.floor(Math.random() * (max - min) + min);
	return range;
}

module.exports = {randoRange};

},{}],4:[function(require,module,exports){
'use strict';

const randoNumGen = require('./randoNumGen');

function Robot () { //idea to pass these values from Dan
	this.minHealth = 80;
	this.maxHealth = 90;
	this.minDamage = 6;
	this.maxDamage = 10;
}
function Drone (minHealth, maxHealth, minDamage, maxDamage) {
	this.botType = 'Drone';
}

Drone.prototype = new Robot();

function Bipedal (minHealth, maxHealth, minDamage, maxDamage) {
	this.botType = 'Bipedal';
}

Bipedal.prototype = new Robot();

function ATV (minHealth, maxHealth, minDamage, maxDamage) {
	this.botType = 'ATV';
}

ATV.prototype = new Robot();

module.exports = {Robot, Drone, Bipedal, ATV};

},{"./randoNumGen":3}],5:[function(require,module,exports){
'use strict';

const ATV = require('./robot').ATV;
const randoNumGen = require('./randoNumGen');

const Megachine = function () {
	this.name = 'Megachine';
	this.attack = 'RollOver';
	this.minHealth += 5;
	this.maxHealth += 5;
	this.minDamage += 0;
	this.maxDamage -= 1;
	this.health = randoNumGen.randoRange(this.minHealth, this.maxHealth);
	this.attackDamage = randoNumGen.randoRange(this.minDamage, this.maxDamage);
};

Megachine.prototype = new ATV();

const Bladey = function () {
	this.name = 'Bladey';
	this.attack = 'Swirly Cutz';
	this.minHealth += 2;
	this.maxHealth += 2;
	this.minDamage += 4;
	this.maxDamage += 2;
	this.health = randoNumGen.randoRange(this.minHealth, this.maxHealth);
	this.attackDamage = randoNumGen.randoRange(this.minDamage, this.maxDamage);
};

Bladey.prototype = new ATV();

module.exports = {Megachine, Bladey};

},{"./randoNumGen":3,"./robot":4}],6:[function(require,module,exports){
'use strict';

const Bipedal = require('./robot').Bipedal;
const randoNumGen = require('./randoNumGen');

const ThreeLegs = function () {
	this.name = 'ThreeLegs';
	this.attack = 'Scissor Kick';
	this.minHealth += 3;
	this.maxHealth += 4;
	this.minDamage -= 2;
	this.maxDamage += 1;
	this.health = randoNumGen.randoRange(this.minHealth, this.maxHealth);
	this.attackDamage = randoNumGen.randoRange(this.minDamage, this.maxDamage);
};

ThreeLegs.prototype = new Bipedal();

const StoneHands = function () {
	this.name = 'StoneHands';
	this.attack = 'Ground Pound';
	this.minHealth += 5;
	this.maxHealth += 5;
	this.minDamage += 3;
	this.maxDamage += 2;
	this.health = randoNumGen.randoRange(this.minHealth, this.maxHealth);
	this.attackDamage = randoNumGen.randoRange(this.minDamage, this.maxDamage);
};

StoneHands.prototype = new Bipedal();

module.exports = {ThreeLegs, StoneHands};

},{"./randoNumGen":3,"./robot":4}],7:[function(require,module,exports){
'use strict';

const Drone = require('./robot').Drone;
const randoNumGen = require('./randoNumGen');

const PewPew = function () {
	this.name = 'PewPew';
	this.attack = 'Pew Pew Pew';
	this.minHealth += 0;
	this.maxHealth -= 5;
	this.minDamage += 1;
	this.maxDamage += 2;
	this.health = randoNumGen.randoRange(this.minHealth, this.maxHealth);
	this.attackDamage = randoNumGen.randoRange(this.minDamage, this.maxDamage);
};

PewPew.prototype = new Drone();

const WhirrrMachine = function () {
	this.name = 'WhirrrMachine';
	this.attack = 'BoneSaw';
	this.minHealth -= 5;
	this.maxHealth -= 3;
	this.minDamage += 4;
	this.maxDamage += 4;
	this.health = randoNumGen.randoRange(this.minHealth, this.maxHealth);
	this.attackDamage = randoNumGen.randoRange(this.minDamage, this.maxDamage);
};

WhirrrMachine.prototype = new Drone();

module.exports = {PewPew, WhirrrMachine};

},{"./randoNumGen":3,"./robot":4}]},{},[2])


//# sourceMappingURL=bundle.js.map
