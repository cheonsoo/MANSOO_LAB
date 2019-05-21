var start = new Date().getTime();

/**
 * 시간복잡도 : O(NLogN), 최악의 경우 : O(N^2)
 */
function quick( arr ) {
    
    if ( arr.length < 2 ) {
        return arr;
    }

    var pivot = arr.shift(); // first element

    var left = [];
    var right = [];
    var new_arr = [];
    for ( var i=0; i<arr.length; i++ ) {
        if ( arr[ i ] <= pivot ) {
            left.push( arr[ i ] );
        } else {
            right.push( arr[ i ] );
        }
    }

    return new_arr.concat( quick( left ), pivot, quick( right ) );
}

var not_sorted = [ 8,3,4,1,5,6,2,7 ];
console.log( not_sorted.join( "," ) );
var sorted = quick( not_sorted );


console.log( sorted.join( "," ) );

console.log( `exe time : ${new Date().getTime() - start} ms` );