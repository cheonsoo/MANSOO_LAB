/**
 * 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946
 */

let start = new Date().getTime();

//* // Fibonacci function with recursion
function fibonacci( i ) {
    let memo = {};

    function fibo( i ) {

        if ( i <= 1 )
            return i;

        if ( memo[ i ])
            return memo[ i ];
        
        let val1 = fibo( i - 1 );
        let val2 = fibo( i - 2 );
        let result = val1 + val2;
        memo[ i ] = result;
        return result;
    }

    return fibo( i );
}
/*/ // Common Fibonacci Function
function fibonacci( i ) {
    if ( i <= 1 )
        return i;

    return fibonacci( i - 1 ) + fibonacci( i - 2 );
}
//*/

console.log( fibonacci( 100 ) );

console.log( `exe time : ${new Date().getTime() - start}` );