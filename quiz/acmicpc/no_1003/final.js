var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');

function fibo( val ) {
    if ( val <= 1 ) {
        return val;
    } else if ( memo[ val ] ) {
        return memo[ val ];
    } else {
        return memo[ val ] = fibo( val - 1 ) + fibo( val - 2 );
    }
}

function run( val ) {
    if ( val == 0 ) {
        console.log( "1 0" );
    } else {
        console.log( fibo( val - 1) + " " + fibo( val) );
    }
}

var num_testcase = parseInt( input[ 0 ] );
for ( var i=1; i<=num_testcase; i++ ) {
    var memo = [];
    run( input[ i ] );
}