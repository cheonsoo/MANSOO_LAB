var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().split('\n');
// var input = fs.readFileSync('/dev/stdin').toString().split('\n');

function run( val ) {

    if ( val <= 1 ) {
        return val;
    } else if ( memo[ val ] ) {
        return memo[ val ];
    } else {
        return memo[ val ] = run( val - 1 ) + run( val - 2 );
    }
}

var num_testcase = parseInt( input[ 0 ] );
for ( var i=1; i<=num_testcase; i++ ) {
    var memo = [];
    var zero = run( input[ i ] - 1);
    	zero = zero < 0 ? 1 : zero;
    var one = run( input[ i ]);
    console.log( zero + " " + one );
}