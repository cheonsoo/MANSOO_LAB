var start = new Date().getTime();

var fs = require('fs');
var input = fs.readFileSync('/Users/cpark/Workspace/mansoo/QUIZ_LAB/acmicpc/no_1002/input_2.txt').toString().split('\n');
// var input = fs.readFileSync('/dev/stdin').toString().split('\n');

function run( input_str ) {

	var arr = input_str.split( " " );

	var x1 = parseInt( arr[ 0 ] );
	var y1 = parseInt( arr[ 1 ] );
	var r1 = parseInt( arr[ 2 ] );
	var x2 = parseInt( arr[ 3 ] );
	var y2 = parseInt( arr[ 4 ] );
	var r2 = parseInt( arr[ 5 ] );

	if ( x1 == x2 && y1 == y2 && r1 == r2 ) {
		return -1;
	}

	var a, b, c, s = 0;
	if ( ( x1 >= 0 && x2 >= 0 ) || ( x1 < 0 && x2 < 0 ) ) {
		a = Math.abs( x1 - x2 );
	} else if ( ( x1 >= 0 && x2 < 0 ) || ( x1 < 0 && x2 >= 0 ) ) {
		a = Math.abs( x1 ) + Math.abs( x2 );
	} else {
		console.log( "???" );
	}

	if ( ( y1 >= 0 && y2 >= 0 ) || ( y1 < 0 && y2 < 0 ) ) {
		b = Math.abs( y1 - y2 );
	} else if ( ( y1 >= 0 && y2 < 0 ) || ( y1 < 0 && y2 >= 0 ) ) {
		b = Math.abs( y1 ) + Math.abs( y2 );
	} else {
		console.log( "???" );
	}

	s = r1 + r2;

	c = a*a + b*b;
	c = Math.sqrt( c);

	if ( s < c  ) {
		return 0;
	} else if ( s == c ) {
		return 1;
	} else if ( s > c) {
		if ( Math.abs( r1 - r2 ) > c ) {
			return 0;
		} else {
			return 2;
		}
	} else {
		console.log( "???" );
		return -1;
	}
}

var a = parseInt( input[ 0 ] );
for ( var i=1; i<=a; i++ ) {
	console.log( run( input[ i ] ) );
}

console.log( `exe time : ${new Date().getTime() - start}` );