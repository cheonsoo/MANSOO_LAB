var fs = require( "fs" );
var input = fs.readFileSync( "/dev/stdin" ).toString().split( "\n" );

var num_testcases = input[ 0 ];

function factorial( i ) {
    if ( i <= 1 ) {
        return 1;
    }
    return i * factorial( i - 1 );
}

// nCr = r! / ( n! * ( r - n )! )
function run( n_r ) {
    var n = n_r.split( " " )[ 0 ];
    var r = n_r.split( " " )[ 1 ];
    var result;
    if ( n == r ) {
        console.log( 1 );
        return;
    }
    result = factorial( r ) / ( factorial( n ) * factorial( r - n ) );
    console.log( Math.round( result ) );
}

for ( var i=0; i<num_testcases; i++ ) {
    run( input[ i + 1 ] );
}