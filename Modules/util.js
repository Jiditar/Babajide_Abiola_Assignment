//util: To access utility functions
//Format a string using the arguments "Linus" and "6":
var util = require('util');
var txt = 'Congratulate %s on his %dth birthday!';
var result = util.format(txt, 'Linus', 6);
console.log(result);
