'use strict';

const Bipedal = require('./robot').Bipedal;

const MutatedBipedal = function () {
	this.name = 'Mutant 2-Legs';
	this.attack = 'Scissor Kick';
};

MutatedBipedal.prototype = new Bipedal(80, 90, 6, 10);

const RockHandsBipedal = function () {
	this.name = 'Stone Hands';
	this.attack = 'Ground Pound';
};

RockHandsBipedal.prototype = new Bipedal(100, 105, 10, 12);

let mutatedBipedal = new MutatedBipedal();
let rockHandsBipedal = new RockHandsBipedal();

module.exports = {mutatedBipedal, rockHandsBipedal};