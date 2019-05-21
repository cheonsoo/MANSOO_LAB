var start = new Date().getTime();

// var data = [ 8,3,4,1,5,6,2,7 ];
var data = [ "ddddd", "ffff", "1eee", "bbbbbbb", "caas", "awd3" ];

function bubbleSort( arr ) {
    let copy = arr.slice();
    let tmp;
    for ( let i=0; i<copy.length-1; i++ ) {
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