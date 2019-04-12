var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().split('\n');

function run( val ) {

    if ( val <= 1 ) {
        if ( val == 0)
            c.z++; 
        else
            c.o++; 
        return val;
    } else {
        return run( val - 1 ) + run( val - 2 );
    }
}

var num_testcase = parseInt( input[ 0 ] );
for ( var i=1; i<=num_testcase; i++ ) {
    var c = {
        z : 0,
        o : 0
    };
    var memo = [];
    run( input[ i ] );
    console.log( c.z + " " + c.o );
}