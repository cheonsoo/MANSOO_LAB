var fs = require('fs');
var input = fs.readFileSync('input.txt').toString().split('\n');
// var input = fs.readFileSync('/dev/stdin').toString().split('\n');

function getStartAndEnd( str ) {
    var arr = str.split( " " );
    var point = {
        start : { x : arr[ 0 ], y : arr[ 1 ]},
        end   : { x : arr[ 2 ], y : arr[ 3 ]},
    }
    return point;
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



var num_testcase = parseInt( input.splice( 0, 1 ) );

var point;
var circle;
var circles;
var pos;
var num_circle;

for ( var i=0; i<num_testcase; i++ ) {

    pos = input.splice( 0, 1 )[ 0 ];
    num_circle = parseInt( input.splice( 0, 1 )[ 0 ] );
    circles = input.splice( 0, num_circle );

    point = getStartAndEnd( pos );

    var travel = 0;
    for ( var k=0; k<circles.length; k++ ) {
        circle = getCircle( circles[ k ] );

        // TEST
        circle.s = isCircleHasIt( point.start, circle );
        circle.e = isCircleHasIt( point.end, circle );

        console.log( circle );

        if ( isCircleHasIt( point.start, circle ) ) {
            travel++;
        }
        if ( isCircleHasIt( point.end, circle ) ) {
            travel++;
        }
    }

    console.log( travel );
}