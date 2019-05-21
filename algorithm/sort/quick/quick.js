var start = new Date().getTime();

/**
 * 시간복잡도 : O(NLogN), 최악의 경우 : O(N^2)
 */
function quickSort( _arr ) {
    let arr = _arr.slice();
    let arr_sorted = quick( arr );
    return arr_sorted;
}

function quick( arr ) {
    
    if ( arr.length <= 1 ) {
        return arr;
    }

    let pivot = arr.shift(); // first element

    let left = [];
    let right = [];
    let new_arr = [];
    for ( let i=0; i<arr.length; i++ ) {
        if ( arr[ i ] <= pivot ) {
            left.push( arr[ i ] );
        } else {
            right.push( arr[ i ] );
        }
    }

    return new_arr.concat( quick( left ), pivot, quick( right ) );
}

let not_sorted = [ 8,3,4,1,5,6,2,7 ];
let sorted = quickSort( not_sorted );

console.log( not_sorted.join( "," ) );
console.log( sorted.join( "," ) );

console.log( `exe time : ${new Date().getTime() - start} ms` );