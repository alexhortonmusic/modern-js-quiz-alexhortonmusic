'use strict';

const Combat = require('./combat')

// bot types
const megaATV = require('./typesATV').megaATV;
const sharpATV = require('./typesATV').sharpATV;
const laserDrone = require('./typesDrone').laserDrone;
const powerDrone = require('./typesDrone').powerDrone;
const mutatedBipedal = require('./typesBipedal').mutatedBipedal;
const rockHandsBipedal = require('./typesBipedal').rockHandsBipedal;

let botArr = [];
botArr.push(megaATV);
botArr.push(sharpATV);
botArr.push(laserDrone);
botArr.push(powerDrone);
botArr.push(mutatedBipedal);
botArr.push(rockHandsBipedal);

let botNameArr = [
	'Megachine',
	'Bladey Spinz',
	'Pew Pew',
	'Whirrr Machine',
	'Mutant 2-Legs',
	'Stone Hands'
]

//populate bot chooser
function populateBotSelect () {
	for (let i = 0, j = botNameArr.length; i < j; i++) {
		$('.selectBox').append(`
			<option>${botNameArr[i]}</option>
		`);
		console.log("botNameArr", botNameArr[i]);
	}
}; 
populateBotSelect();




