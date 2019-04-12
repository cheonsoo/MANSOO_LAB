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
    } else {
        return run( val - 1 ) + run( val - 2 );
    }
}

var c = {
    z : 0,
    o : 0
}
var fibo = run( -1 );

console.log( fibo );
// console.log( "### " + c.z + " " + c.o );