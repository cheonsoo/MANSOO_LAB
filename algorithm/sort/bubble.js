var start = new Date().getTime();

// var data = [ 8,3,4,1,5,6,2,7 ];
var data = [ "d", "f", "e", "b", "c", "a" ];

/**
 * 시간복잡도 : O(N^2)
 */
function bubbleSort( _arr ) {

    let copy = _arr.slice();

    let tmp;
    for ( let i=0; i<copy.length; i++ ) {
        for ( let k=1; k<copy.length-i; k++ ) {
            if ( copy[ k - 1 ] > copy[ k ] ) {
                tmp = copy[ k - 1 ];
                copy[ k - 1 ] = copy[ k ];
                copy[ k ] = tmp;
            }
        }
    }

    return copy;
}

var data_sorted = bubbleSort( data );
console.log( data.join( ",") );
console.log( data_sorted.join( ",") );

console.log( `exe time : ${new Date().getTime() - start}` );