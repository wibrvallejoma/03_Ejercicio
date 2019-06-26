var converter = require('number-to-words');
console.log('13 = ' + converter.toWords(13)); // => “thirteen”
 
// Decimal numbers:
console.log('2.9 = ' + converter.toWords(2.9)); // => “two”
 
// Negative numbers:
console.log('-3 = ' + converter.toWords(-3)) // => “minus three”
 