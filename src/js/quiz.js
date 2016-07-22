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
let playByPlay = $('.playByPlay');
// remaining health of each player
let remainingHealth1;
let remainingHealth2;

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

$('#startFightBtn').click(function () {
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

	player1Box.append(`<h2 class="health1">${player1.health}</h2>`);
	player2Box.append(`<h2 class="health2">${player2.health}</h2>`);
	$('.gameStartContainer').empty();
	$('.gamePlayContainer').show();
	console.log('Fight started');
});



let player1Round = function () {
	remainingHealth1 = player1.health - player2.attackDamage;
	player1.health = remainingHealth1;
	console.log('player1.health', player1.health);
	playByPlay.prepend(`<h3 class="colorCommentary">${player2.name} used ${player2.attack} against ${player1.name}! Ouch!</h3>`);
	$('.health1').html(player1.health);
};

let player2Round = function () {
	remainingHealth2 = player2.health - player1.attackDamage;
	player2.health = remainingHealth2;
	console.log('player2.health', player2.health);
	playByPlay.prepend(`<h3 class="colorCommentary">${player1.name} used ${player1.attack} against ${player2.name}! Yowza!</h3>`);
	$('.health2').html(player2.health);
};

//player clicks this button for 1 round of damage to each robot
$('#attackBtn').click(function () {
	if (player1.health <= 0) {
		player1.health = 0;
		playByPlay.empty();
		playByPlay.prepend(`<h1>${player1.name} wins!</h1>`);
		return 'player1';
	}
	else if (player2.health <= 0) {
		player2.health = 0;
		playByPlay.empty();
		playByPlay.prepend(`<h1>${player2.name} wins!</h1>`);
		return 'player2';
	}
	player1Round();
	player2Round();
});
