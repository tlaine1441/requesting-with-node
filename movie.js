'use strict'

const request = require('request');

function getMovie(movieTitle) {
		request("https://www.omdbapi.com/?t=" + movieTitle, function(err, response, body) {
		console.log(body);
	});
}

module.exports = getMovie;