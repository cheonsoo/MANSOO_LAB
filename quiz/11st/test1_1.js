/*
/usr/local/bin/node quiz/test1_2.js
N : 17, number : 1, current : 1
N : 17, number : 2, current : 3
N : 17, number : 3, current : 6
N : 17, number : 4, current : 10
N : 17, number : 5, current : 15
N : 17, number : 6, current : 21
N : 17, number : 7, current : 28
N : 17, number : 8, current : 36
N : 17, number : 9, current : 45
N : 17, number : 10, current : 55
N : 17, number : 11, current : 66
N : 17, number : 12, current : 78
N : 17, number : 13, current : 91
N : 17, number : 14, current : 105
N : 17, number : 15, current : 120
N : 17, number : 16, current : 136
N : 17, number : 17, current : 153
5
*/

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
console.log( solution( 17 ) );