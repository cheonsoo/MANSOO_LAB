var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().split('\n');
// var input = fs.readFileSync('/dev/stdin').toString().split('\n');

function getStartAndEnd( str ) {
    var arr = str.split( " " );
    start.x = arr[ 0 ];
    start.y = arr[ 1 ];
    end.x   = arr[ 2 ];
    end.y   = arr[ 3 ];
}

function getCircle( str ) {
    var arr = str.split( " " );
    var _circle = { x : 0, y : 0, r : 0, s : false, e : false };
    _circle.x = arr[ 0 ];
    _circle.y = arr[ 1 ];
    _circle.r = arr[ 2 ];
    return _circle;
}

function getDistance( a, b ) {
    if ( ( a >= 0 && b >= 0 ) || ( a < 0 && b < 0 ) ) {
        return Math.abs( a - b );
    } else {
        return Math.abs( a ) + Math.abs( b );
    }
}

function isCircleHasIt( pos, circle ) {

    var a = getDistance( pos.x, circle.x );
    var b = getDistance( pos.y, circle.y );
    var c = Math.sqrt( Math.pow( a, 2 ) + Math.pow( b, 2 ) );
    
    if ( circle.r > c ) {
        return true;
    } else {
        return false;
    }
}


var start = { x : 0, y : 0 };
var end = { x : 0, y : 0 };
var circle = {}
var num_testcase = parseInt( input.splice( 0, 1 ) );

var pos;
var num_circle;
var circles;

for ( var i=0; i<num_testcase; i++ ) {

    pos = input.splice( 0, 1 )[ 0 ];
    num_circle = parseInt( input.splice( 0, 1 )[ 0 ] );
    circles = input.splice( 0, num_circle );

    getStartAndEnd( pos );

    var travel = 0;
    for ( var k=0; k<circles.length; k++ ) {
        circle = getCircle( circles[ k ] );
        if ( isCircleHasIt( start, circle ) ) {
            travel++;
        }
        if ( isCircleHasIt( end, circle ) ) {
            travel++;
        }
    }

    console.log( travel );
}