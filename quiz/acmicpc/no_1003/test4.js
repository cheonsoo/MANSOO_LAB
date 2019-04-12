// var fs = require('fs');
// var input = fs.readFileSync('input.txt').toString().split('\n');

function run( val ) {

    if ( val <= 1 ) {
        if ( val == 0) {
            c.z++; 
        } else {
            c.o++;
        } 
        return val;
    } else if ( memo[ val ] ) {
        return memo[ val ];
    } else {
        memo[ val.toString() ] = {
            val : run( val - 1 ) + run( val - 2 )
        }
        return memo[ val ] = run( val - 1 ) + run( val - 2 );
    }
}

var c = {
    z : 0,
    o : 0
}
var memo = [];
run( 10 );

console.log( "### " + c.z + " " + c.o );