/*
3
0 0 13 40 0 37
0 0 3 0 7 4
1 1 1 1 1 5
==>>
2
1
0
*/

let start = new Date().getTime();

function run(arr) {

	console.log( arr.toString() );

	let x1 = arr[ 0 ];
	let y1 = arr[ 1 ];
	let r1 = arr[ 2 ];
	let x2 = arr[ 3 ];
	let y2 = arr[ 4 ];
	let r2 = arr[ 5 ];

	let a, b, c, s = 0;
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
	console.log( `r1 : ${r1}', r2 : ${r2}, s : ${s}` );

	c = a*a + b*b;
	c = Math.sqrt( c);
	console.log( `x1 : ${x1}, x2 : ${x2}` );
	console.log( `y1 : ${y1}, y2 : ${y2}` );
	console.log( `a : ${a}, b : ${b}, c : ${c}, s : ${s}` );

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

let arr1 = [ 0, 0, 13, 40, 0, 37 ];
let arr2 = [ 0, 0, 3, 0, 7, 4 ];
let arr3 = [ 1, 1, 1, 1, 1, 5 ];

let result;
result = run( arr1 );
console.log( `### result : ${result}` );
result = run( arr2 );
console.log( `### result : ${result}` );
result = run( arr3 ); 
console.log( `### result : ${result}` );

console.log( `EXE TIME : ${new Date().getTime() - start}` );