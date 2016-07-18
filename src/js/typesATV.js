'use strict';

const ATV = require('./robot').ATV;

const MegaATV = function () {
	this.name = 'Megachine';
	this.attack = 'RollOver';
};

MegaATV.prototype = new ATV(85, 95, 6, 9);

const SharpATV = function () {
	this.name = 'Bladey Spinz';
	this.attack = 'Swirly Cutz';
};

SharpATV.prototype = new ATV(85, 100, 4, 11);

let sharpATV = new SharpATV();
let megaATV = new MegaATV();

module.exports = {megaATV, sharpATV};