var start = new Date().getTime();

var arr = [ 8,3,4,1,5,6,2,7 ];

console.log( arr.join( ",") );

var tmp;
for ( var i=0; i<arr.length-1; i++ ) {

    for ( var k=1; k<arr.length-i; k++ ) {

        if ( arr[ k - 1 ] > arr[ k ] ) {
            // swap
            tmp = arr[ k - 1 ];
            arr[ k - 1 ] = arr[ k ];
            arr[ k ] = tmp;
        }

    }

}

console.log( arr.join( ",") );

console.log( `exe time : ${new Date().getTime() - start}` );