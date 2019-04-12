function solution( arr ) {

    // debugger;
    if ( arr.length === 2 ) {
        return arr[ 0 ] + arr[ 1 ];
    }

    let first_number = arr.shift();
    let last_number = arr.pop();
    let least_steps = arr.length;
    
    let sum = 0;
    arr.sort( ( a, b ) => b - a );
    console.log( arr );
    
    for ( let i=0; i<arr.length; i++ ) {
        if ( arr[ i ] < 1 ) {
            break;
        }
        sum = sum + arr[ i ];
    }

    return sum + first_number + last_number;
}

console.log( solution( [ 1, -2, 0, 9, -1, -2 ] ) );
console.log( solution( [ 1, -2 ] ) );
console.log( solution( [ -2, 5, 1 ] ) );
console.log( solution( [ 0, -4, -5, -2, -7, -9, -3, -10 ] ) );