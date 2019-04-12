// var fs = require('fs');
// var input = fs.readFileSync('input.txt').toString().split('\n');

function run( val ) {

    if ( val <= 1 ) {
        return val;
    } else if ( memo[ val ] ) {
        return memo[ val ];
    } else {
        return memo[ val ] = run( val - 1 ) + run( val - 2 );
    }
}

var c = {
    z : 0,
    o : 0
}
var memo = [];
var fibo = run( 10 );

console.log( fibo );