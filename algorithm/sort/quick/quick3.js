let not_sorted = [ 8,3,4,1,5,6,2,7 ];

function quick( arr ) {
    let copy = arr.slice();
    let sorted = quickSort( copy );
    return sorted;
}

function quickSort( arr ) {

    if ( arr.length <= 1 ) {
        return arr;
    }

    let pivot = arr.pop();
    let left = [];
    let right = [];

    for ( let i=0; i<arr.length; i++ ) {
        if ( arr[ i ] < pivot ) {
            left.push( arr[ i ] );
        } else {
            right.push( arr[ i ] );
        }
    }

    return [].concat( quickSort( left ), pivot, quickSort( right ) );
}

console.log( not_sorted );
console.log( quick( not_sorted ) );