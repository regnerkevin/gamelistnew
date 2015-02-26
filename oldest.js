var data = require('./ancestry.js');
var ancestry = JSON.parse(data);

function map(array, transform) {
  var mapped = [];
  for (var i = 0; i < array.length; i++)
    mapped.push(transform(array[i]));
  return mapped;
}

var ChangingCost = ancestry.filter(function(game) {
  return game.Cost - 2;
});
console.log(map(ChangingCost, function(game) {
  return "The cost of " + game.name +  " after a month is: " +  game.Cost;
}));
