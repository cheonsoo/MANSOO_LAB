let start = new Date();

function solution(N) {

    let stack = [];
    let memo = {};
    let flg = false;

    function getLargestButSmallerThanN( number ) {
    
        if ( number === 0 ) {
            return 0;
        }

        if ( flg ) {
            return 0;
        }
        
        if ( memo[ number ] ) {
            return memo[ number ];
        }

        let current = getLargestButSmallerThanN( number - 1 ) + number;
        memo[ number ] = current;
        console.log( `N : ${N}, number : ${number}, current : ${current}` );

        if ( current < N ) {
            stack.push( current );
        } else {
            flg = true;
        }

        return current;

    }

    getLargestButSmallerThanN( N );

    return stack.length;
}

console.log( solution( 100 ) );

console.log( `exe time : ${new Date() - start}` );