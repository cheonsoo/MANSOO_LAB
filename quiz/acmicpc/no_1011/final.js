var fs = require( "fs" );

// var input = fs.readFileSync( "/dev/stdin" ).toString().split( "\n" );
var input = fs.readFileSync( "/Users/cpark/Workspace/mansoo/MANSOO_LAB/quiz/acmicpc/no_1011/input.txt" ).toString().split( "\n" );

var num_testcases = input[ 0 ];

function run( x, y ) {

    function factorial_add( i ) {
        final_moved_cnt++;
        if ( i <= 1 ) {
            return 1;
        }
        return i + factorial_add( i - 1 );
    }
    
    var distance = y - x;
    
    var middle_point = Math.sqrt( distance );
    
    if ( !Number.isInteger( middle_point ) ) {
        middle_point = Math.floor( middle_point );
    }
    
    var final_moved_cnt = 0;
    var tmp = factorial_add( middle_point - 1 ) + factorial_add( middle_point - 1 );
    if ( distance > tmp ) {
        final_moved_cnt++;
    }
    // final_moved_cnt ++;
    
    console.log( `${final_moved_cnt}` );
}

// run( 0, 3 );

for ( var i=0; i<num_testcases; i++ ) {
    var x = parseInt( input[ i + 1 ].split( " " )[ 0 ] );
    var y = parseInt( input[ i + 1 ].split( " " )[ 1 ] );
    // console.log( `${x} ${y}` );
    run( x, y );
}