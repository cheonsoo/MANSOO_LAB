var arr = [ 8,3,4,1,5,6,2,7 ];

for ( var i=0; i<arr.length; i++ ) {

    for ( var k=1; k<arr.length-i; k++ ) {

        if ( arr[ k - 1 ] > arr[ k ] ) {
            tmp = arr[ k - 1 ];
            arr[ k - 1 ] = arr[ k ];
            arr[ k ] = tmp;
        }
    }
}

console.log( arr );