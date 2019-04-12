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

    // Convert Integer to Binary
    let binary = integerToBinary( N );

    let gaps_arr = [];
    let gaps = 0;

    for ( let i=0; i<binary.length; i++ ) {

        // No need thid validation. Binary start with 1
        // if ( i === 0 && binary.charAt( 0 ) === "0" ) continue;

        let letter = binary.charAt( i );
        if ( letter === "0" ) {
            gaps++;
        } else {
            gaps_arr.push( gaps );
            gaps = 0;
        }
    }

    gaps_arr.sort( ( a, b ) => b-a );
    return gaps_arr[ 0 ];
}

console.log( 111 );