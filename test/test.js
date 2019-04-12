let arr = [10,5,2,1,-2,-3,-10];

for ( let i=0; i<arr.length; i++ ) {
	console.log( arr[ i ] );
	if ( arr[ i ] === -2 ) {
		console.log( `### value : ${arr[ i ]}` );
		continue;
		console.log( "###" );
	}
	console.log( `value : ${arr[ i ]}` );
}

console.log( arr );

// 1,2,3,4,5,6
// N*(N+1)/2