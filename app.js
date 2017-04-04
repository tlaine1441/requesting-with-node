'use strict'

const movie = require("./movie.js");

var threeFavoriteMovies = ["Friday", "Fight Club", "The Art of Flight"];

threeFavoriteMovies.forEach(function(film){
	movie(film);
});