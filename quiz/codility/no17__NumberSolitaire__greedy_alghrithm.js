function solution( A ) {
    var d = 6;
    var n = A.length;
    maxScore = [];
    
    //for 0
    for ( var i = 0; i < d; i++ ) {
        maxScore.push( A[ 0 ] );  
    }
    //for >0
    for ( var i = 1; i<n; i++ ) {
        let max_value = Math.max.apply( Math, maxScore );
        let next_move = A[ i ];
        maxScore[ i % d ] = max_value + next_move;
        // maxScore[i % d] = Math.max.apply(Math, maxScore) + A[i]; 
        //console.log(maxScore, i, i%d);
    }
    return maxScore[ ( n - 1) % d ];
}

// console.log( solution( [ 1, -2, 0, 9, -1, -2 ] ) );
// console.log( solution( [ 1, -2 ] ) );
// console.log( solution( [ -2, 5, 1 ] ) );
// console.log( solution( [ 0, -4, -5, -2, -7, -9, -3, -10 ] ) );
console.log( solution( [ 0, -4, 3, 2, -5, -2, -7, -9, 11, -3, -10 ] ) );