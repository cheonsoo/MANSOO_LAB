// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)

    let stack = [];

    function getLargestButSmallerThanN( number ) {
    
        if ( number === 0 ) {
            return 0;
        }
        
        let current = getLargestButSmallerThanN( number - 1 ) + number;
        console.log( `N : ${N}, number : ${number}, current : ${current}` );
        if ( current < N ) {
            stack.push( current );
        }

        return current;

    }

    getLargestButSmallerThanN( N );

    return stack.length;
}

console.log( solution( 17 ) );

