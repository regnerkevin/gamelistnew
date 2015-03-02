datafile = require('./ancestry.js');
 var types = JSON.parse(datafile);

 console.log(types.reduce(function(Genre, game) {
    return (game.Genre  == 'RolePlaying')? game : 'DNE';
    }));
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
~                                                                               
                                                              1,1           All
