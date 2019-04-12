var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split('\n');

function run( input_str ) {

	var arr = input_str.split( " " );

	var x1 = parseInt( arr[ 0 ] ),
		y1 = parseInt( arr[ 1 ] ),
		r1 = parseInt( arr[ 2 ] ),
		x2 = parseInt( arr[ 3 ] ),
		y2 = parseInt( arr[ 4 ] ),
		r2 = parseInt( arr[ 5 ] );

	// Infinite
	if ( x1 == x2 && y1 == y2 && r1 == r2 ) {
		return -1;
	}

	var a, b, c, s = 0;

	// get pitagoras A
	if ( ( x1 >= 0 && x2 >= 0 ) || ( x1 < 0 && x2 < 0 ) ) {
		a = Math.abs( x1 - x2 );
	} else {
		a = Math.abs( x1 ) + Math.abs( x2 );
	}

	// // get pitagoras B
	if ( ( y1 >= 0 && y2 >= 0 ) || ( y1 < 0 && y2 < 0 ) ) {
		b = Math.abs( y1 - y2 );
	} else {
		b = Math.abs( y1 ) + Math.abs( y2 );
	}

	// minimum distance between X and Y
	s = r1 + r2;

	// get pitagoras C
	c = Math.sqrt( a*a + b*b );

	// Result
	if ( s < c  ) {
		return 0;
	} else if ( s == c ) {
		return 1;
	} else {
		if ( Math.abs( r1 - r2 ) > c )
			return 0;
		else if ( Math.abs( r1 - r2 ) == c )
			return 1;
		else
			return 2;
	}
}

var a = parseInt( input[ 0 ] );
for ( var i=1; i<=a; i++ )
	console.log( run( input[ i ] ) );