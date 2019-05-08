function factorial( i ) {
    if ( i === 0 ) {
        return 1;
    }

    return i * factorial( i - 1);
}

let a = 4;
let b = 7;

let sum = 0;
for ( let i=0; i<4; i++ ) {
	for ( let k=4; k>0; k-- ) {
		sum += factorial( k-i );
	}
}

console.log( sum );