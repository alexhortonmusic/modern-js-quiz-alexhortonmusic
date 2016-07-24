"use strict";

var randoRange = (min, max) => {
	let range = Math.floor(Math.random() * (max - min) + min);
	return range;
}

module.exports = {randoRange};
