'use strict';

const Drone = require('./robot').Drone;

const LaserDrone = function () {
	this.name = 'Pew Pew';
	this.attack = 'Pew Pew Pew';
};

LaserDrone.prototype = new Drone(70, 80, 5, 8);

const PowerDrone = function () {
	this.name = 'Whirrr Machine';
	this.attack = 'BoneSaw';
};

PowerDrone.prototype = new Drone(60, 90, 3, 4);

let laserDrone = new LaserDrone();
let powerDrone = new PowerDrone();

module.exports = {laserDrone, powerDrone};