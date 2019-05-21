let start = new Date().getTime();

let not_sorted = [ 8,3,4,1,5,6,2,7 ];

function quickSort( arr ) {
    
    if ( arr.length < 2 ) {
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

    return new Array().concat( quickSort( left ), pivot, quickSort( right ) );
}

console.log( not_sorted.join( "," ) );
let sorted = quickSort( not_sorted );
console.log( sorted.join( "," ) );

console.log( `exe time : ${new Date().getTime() - start} ms` );