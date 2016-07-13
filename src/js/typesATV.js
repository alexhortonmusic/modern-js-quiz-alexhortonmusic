'use strict';

const ATV = require('./robot').ATV;

const MegaATV = function () {
	this.name = 'Megachine';
	this.attack = 'RollOver';
};

MegaATV.prototype = new ATV();

const SharpATV = function () {
	this.name = 'Bladey Spinz';
	this.attack = 'Swirly Cutz';
};

SharpATV.prototype = new ATV();

module.exports = {MegaATV, SharpATV};