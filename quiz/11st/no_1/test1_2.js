// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

let start = new Date();

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)

    let stack = [];
    let memo = {};

    function getLargestButSmallerThanN( number ) {
    
        if ( number === 0 ) {
            return 0;
        }
        
        if ( memo[ number ] ) {
            return memo[ number ];
        }

        let current = getLargestButSmallerThanN( number - 1 ) + number;
        memo[ number ] = current;
        // console.log( `N : ${N}, number : ${number}, current : ${current}` );

        if ( current < N ) {
            stack.push( current );
        }

        return current;

    }

    getLargestButSmallerThanN( N );

    return stack.length;
}

console.log( solution( 1000 ) );

console.log( `exe time : ${new Date() - start}` );