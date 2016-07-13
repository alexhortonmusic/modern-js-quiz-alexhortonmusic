"use strict";

function randoRange (min, max) {
	let damageRange = Math.floor(Math.random() * (max - min) + min);
}

module.exports = {randoRange};