let fs = require( "fs" );
let input = fs.readFileSync( "/Users/mansoo/Workspace/js/MANSOO_LAB/quiz/acmicpc/no_1010/input.txt" ).toString().split( "\n" );

console.log( input );

let num_testcases = input[ 0 ];

function factorial( i ) {
    if ( i <= 1 ) {
        return 1;
    }
    return i * factorial( i - 1 );
}

// nCr = r! / ( n! * ( r - n )! )
function run( n_r ) {
    let n = n_r.split( " " )[ 0 ];
    let r = n_r.split( " " )[ 1 ];
    let result;
    if ( n == r ) {
        console.log( 1 );
        return;
    }
    result = factorial( r ) / ( factorial( n ) * factorial( r - n ) );
    console.log( Math.round( result ) );
}

for ( let i=0; i<num_testcases; i++ ) {
    run( input[ i + 1 ] );
}

// run( "1 5" );