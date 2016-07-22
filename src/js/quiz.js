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
