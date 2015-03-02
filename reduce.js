var datafile = require('./ancestry.js');
var ancestry = JSON.parse(datafile);

 console.log(JSON.stringify(ancestry.reduce(function(oldest, game) {
         return (game.YearReleased < oldest.YearReleased)? game : oldest;
    })));

