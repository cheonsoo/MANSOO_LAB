/**
 * Greedy Algorithm
 */
function solution( A ) {
    let six = 6;
    let choices = [];
    let first_number = A.shift();
    
    // For 0
    for ( let i=0; i<six; i++ ) {
        choices[ i ] = first_number;
    }

    let result = 0;
    for ( let i=0; i<A.length; i++ ) {
        let large_number = Math.max.apply( null, choices );
        choices[ i % six ] = large_number + A[ i ];
        // console.log( `next_move : ${A[ i ]}, choices : ${choices}` );

        if ( i === A.length-1 ) {
            result = choices[ i % six ];
        }
    }

    return choices[ ( A.length - 1 ) % six ]; // WHY?
}

console.log( solution( [ 0, -4, 3, 2, -5, -2, -7, -9, 11, -3, -10 ] ) );
// 0, 3, 2, 11, -10


/*
function solution( A ) {
    let six = 6;
    let choices = [];
    let first_number = A.shift();
    
    // For 0
    for ( let i=0; i<six; i++ ) {
        choices[ i ] = first_number;
    }

    for ( let i=0; i<A.length; i++ ) {
        let large_number = Math.max.apply( null, choices );
        choices[ i % six ] = large_number + A[ i ];
        console.log( `next_move : ${A[ i ]}, choices : ${choices}` );
    }

    return choices[ ( A.length - 1 ) % six ];
}

console.log( solution( [ 0, -4, 3, 2, -5, -2, -7, -9, 11, -3, -10 ] ) );
*/