function integerToBinary( number ) {

	let binary = "";

	if ( number === 1 ) {
		binary = "1";
	}

	while( number > 1 ) {

		let rest = ( number % 2 ).toString();

		number = parseInt( number / 2 );
		binary = `${rest}${binary}`

		if ( number === 1 ) {
			binary = `1${binary}`;
		}
	}

	return binary;
}

function solution( N ) {
    let binary = integerToBinary( N );
    console.log( binary );
    binary = "100000100000000101";

    let gaps = binary.match( /10+1/gi );
    
    console.log( gaps );


}

console.log( solution( 1041 ) );