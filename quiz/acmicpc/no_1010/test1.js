function factorial( i ) {
    if ( i === 0 ) 
        return 1;
    return i * factorial( i - 1 );
}

// console.log( factorial( 5 ) );

let r = 13;
let n = 29;


let result = factorial( n ) / ( factorial( n - r ) * factorial( r ) );

console.log( result );