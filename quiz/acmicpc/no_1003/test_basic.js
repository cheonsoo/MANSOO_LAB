var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().split('\n');
// var input = fs.readFileSync('/dev/stdin').toString().split('\n');

function run( val ) {
    if ( val <= 1 ) {
        if ( val == 0)
            zero++; 
        else
            one++; 
        return val;
    } else {
        return run( val - 1 ) + run( val - 2 );
    }
}

var num_testcase = parseInt( input[ 0 ] );
for ( var i=1; i<=num_testcase; i++ ) {
    var zero = 0;
    var one = 0;
    var memo = [];
    run( input[ i ] );
    console.log( zero + " " + one );
}