// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
let start = new Date().getTime();

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)

    let highest_appeal = 0;

    for ( let i=0; i<A.length-1; i++ ) {

        // Case 1 : Visit Same City Twice
        let current_appeal = A[ i ] * 2;
        if ( highest_appeal < current_appeal )  {
            highest_appeal = current_appeal;
        }

        // Case 2 : Visit Different Cities
        for ( let k=i+1; k<A.length; k++ ) {
            current_appeal = A[ i ] + A[ k ] + ( k - i );
            if ( highest_appeal < current_appeal )  {
                highest_appeal = current_appeal;
            }
        }
    }

    return highest_appeal;
}

// let cities = [ 1, 3, -3 ];
// let cities = [ -8, 4, 0, 5, -3, 6 ];
let cities = [ 
    -8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4, 0, 5, -3, 6,
    -8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4,-8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4,-8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4,-8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4,-8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4,-8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4,-8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4,
    -8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4,-8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4,-8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4,-8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4,-8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4,
    -8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4,-8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4,-8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4,-8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4,-8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4, 0, 5, -3,-8, 4
 ];

console.log( solution( cities ) );

console.log( `exe time : ${new Date().getTime() - start} ms` );