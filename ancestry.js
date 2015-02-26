var ANCESTRY_FILE = "[\n  " + [
	'{"name" : "Final Fantasy", "Cost" : "5", "Genre" : "RolePlaying", "Main Character" : "Light Warriors", "YearReleased" : "1987", "Main Bad Guy" : "Chaos"}',
	'{"name" : "Final Fantasy II", "Cost" : "5", "Genre" : "RolePlaying", "Main Character" : "Firion", "YearReleased" : "1988", "Main Bad Guy" : "Borghen, The Emperor"}',
	'{"name" : "Final Fantasy III", "Cost" : "5", "Genre" : "RolePlaying", "Main Character" : "The Four Orphans", "Year Released" : "1990", "Main Bad Guy" : "Cloud of Darkness"}', 
	'{"name" : "Final Fantasy IV", "Cost" : "5", "Genre" : "RolePlaying", "Main Character" : "Cecil Harvey", "YearReleased" : "1991", "Main Bad Guy" : "Zemus"}',
	'{"name" : "Final Fantasy V", "Cost" : "7", "Genre" : "RolePlaying", "Main Character" : "Bartz Klauser", "YearReleased" : "1992", "Main Bad Guy" : "Exdeath"}',
	'{"name" : "Final Fantasy VI", "Cost" : "6", "Genre" : "RolePlaying", "Main Character" : "Terra Branford", "YearReleased" : "1994", "Main Bad Guy" : "Kefka Palazzo"}',
	'{"name" : "Final Fantasy VII", "Cost" : "60", "Genre" : "RolePlaying", "Main Character" : "Cloud Strife", "YearReleased" : "1997", "Main Bad Guy" : "Sephiroth"}',
	'{"name" : "Final Fantasy VIII", "Cost" : "10", "Genre" : "RolePlaying", "Main Character" : "Squall Leonhard", "YearReleased" : "1999", "Main Bad Guy" : "Ultimecia"}',
	'{"name" : "Final Fantasy IX", "Cost" : "14", "Genre" : "RolePlaying", "Main Character" : "Zidane Tribal", "YearReleased" : "2000", "Main Bad Guy" : "Kuja"}',
	'{"name" : "Final Fantasy X", "Cost" : "20", "Genre" : "RolePlaying", "Main Character" : "Tidus", "YearReleased" : "2001", "Main Bad Guy" : "Sin"}',
	'{"name" : "Final Fantasy X-2", "Cost" : "25", "Genre" : "RolePlaying", "Main Character" : "Yuna", "YearReleased" : "2003", "Main Bad Guy" : "Shuyin"}',
	'{"name" : "Final Fantasy XII", "Cost" : "40", "Genre" : "RolePlaying", "Main Character" : "Vaan", "YearReleased" : "2006", "Main Bad Guy" : "Vayne Soildor"}',
	'{"name" : "Final Fantasy XIII", "Cost" : "35", "Genre" : "RolePlaying", "Main Character" : "Lightning Farron", "YearReleased" : "2009", "Main Bad Guy" : "Barthandelus"}',
	'{"name" : "Final Fantasy XIII-2", "Cost" : "40", "Genre" : "RolePlaying", "Main Character" : "Sarah Farron and Noel Kreiss", "YearReleased" : "2013", "Main Bad Guy" : "Caius Ballad"}',
	'{"name" : "Final Fantasy XIII: Lightning Returns", "Cost" : "50", "Genre" : "RolePlaying", "Main Character" : "Lightning Farron", "YearReleased" : "2014", "Main Bad Guy" : "God"}',
	'{"name" : "Call of Duty", "Cost" : " 6", "Genre" : "FirstPerson Shooter", "Main Character" : "Joe Martin", "YearReleased" : "2003", "Main Bad Guy" : "N/A"}',
	'{"name" : "Call of Duty: Finest Hour", "Cost" : " 7", "Genre" : "FirstPerson Shooter", "Main Character" : "Aleksandr Sokolov", "YearReleased" : "2004", "Main Bad Guy" : "N/A"}',
	'{"name" : "Call of Duty 2", "Cost" : " 9", "Genre" : "FirstPerson Shooter", "Main Character" : "Vasili Koslov", "YearReleased" : "2005", "Main Bad Guy" : "N/A"}',
	'{"name" : "Call of Duty 3", "Cost" : " 9", "Genre" : "FirstPerson Shooter", "Main Character" : "Private Nichols", "YearReleased" : "2006", "Main Bad Guy" : "N/A"}',
	'{"name" : "Call of Duty 4: Modern Warfare", "Cost" : " 20", "Genre" : "FirstPerson Shooter", "Main Character" : "John Soap MacTavish", "YearReleased" : "2007", "Main Bad Guy" : "Imran Zakhaev"}',
	'{"name" : "Call of Duty World at War", "Cost" : " 25", "Genre" : "FirstPerson Shooter", "Main Character" : "C. Miller", "YearReleased" : "2008", "Main Bad Guy" : "N/A"}',
	'{"name" : "Call of Duty: Modern Warfare 2", "Cost" : " 20", "Genre" : "FirstPerson Shooter", "Main Character" : "Joesph Allen", "YearReleased" : "2009", "Main Bad Guy" : "Vladimir Makarov"}',
	'{"name" : "Call of Duty: Black Ops", "Cost" : " 35", "Genre" : "FirstPerson Shooter", "Main Character" : "Alex Mason", "YearReleased" : "2010", "Main Bad Guy" : "Dragovich"}',
	'{"name" : "Call of Duty: Modren Warfare 3", "Cost" : " 40", "Genre" : "FirstPerson Shooter", "Main Character" : "John Soap MacTavish", "YearReleased" : "2011", "Main Bad Guy" : "Vladimir Makarov"}',
	'{"name" : "Call of Duty: Black Ops II", "Cost" : " 45", "Genre" : "FirstPerson Shooter", "Main Character" : "Alex Mason", "YearReleased" : "2012", "Main Bad Guy" : "Raul Menendez"}',
	'{"name" : "Call of Duty: Ghosts", "Cost" : " 50", "Genre" : "FirstPerson Shooter", "Main Character" : "Logan and David Walker", "YearReleased" : "2013", "Main Bad Guy" : "Gabriel Rorke"}',
	'{"name" : "Call of Duty: Advanced Warfare", "Cost" : " 60", "Genre" : "FirstPerson Shooter", "Main Character" : "Jack Mitchell", "YearReleased" : "2014", "Main Bad Guy" : "Johnathan Irons "}',
  ].join(",\n  ") + "\n]";

// This makes sure the data is exported in node.js —
// `require(./path/to/ancestry.js)` will get you the array.
if (typeof module != "undefined" && module.exports)
  module.exports = ANCESTRY_FILE;
