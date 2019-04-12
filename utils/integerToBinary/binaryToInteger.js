/*
101111
=>
2^5*1 + 2^4*0 + 2^3*1 + 2^2*1 + 2^1*1 + 2^0*1 = 47
*/

let start = new Date().getTime();

function binaryToInteger( binary ) {

	if ( typeof binary === "number" ) {
		binary = binary.toString();
	}

	let number = 0;
	for (let i=0; len=binary.length, i<len; i++) {
		let n = binary.charAt( i );

		// number = number + ( 2^(binary.length-i-1) * n );
		number = number + ( Math.pow(2, len-i-1) * n );
		console.log( `char : ${n}, number : ${number}` );
	}

	return number;
}

let binary = "101111"; // 47
// let binary = "101"; // 5

// console.log( typeof 101111 );
// console.log( binary.length );
// console.log( "abcde".charAt( 4 ) );
console.log( Math.pow(2, 5) );

let result = binaryToInteger( binary );
console.log( `number : ${result}` );

console.log( `Exe Time : ${new Date().getTime() - start}` );