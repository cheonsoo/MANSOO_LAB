// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');


//*// Using Recursive
function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)

    let stack = [];

    function getLargestButSmallerThanN( number ) {
    
        if ( number === 0 ) {
            return 0;
        }
        
        let current = getLargestButSmallerThanN( number - 1 ) + number;
        if ( current < N ) {
            stack.push( current );
        }

        return current;

    }

    getLargestButSmallerThanN( N );

    return stack.length;
}
/*/ // Very Simple Solution Just To Get The Answer
function solution(N) {
    let largestButSmallerThanN = 0;
    let prev = 0;
    for ( let i=1; i<=N; i++ ) {
        let current = prev = i + prev;
        if ( current >= N ) {
            largestButSmallerThanN = i - 1;
            break;
        }
    }
    return largestButSmallerThanN;
}
//*/