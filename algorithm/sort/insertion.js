var start = new Date().getTime();

var arr = [ 8,3,4,1,5,6,2,7 ];

var tmp;
for ( var i=1; i<arr.length; i++ ) {

    var tmp = arr[ i ];

    for ( var k=i-1; k>=0; k-- ) {

        if ( arr[ k ] > tmp ) {
            // swap
            arr[ k+1 ] = arr[ k ];
            arr[ k ] = tmp;
            
        }

    }
}

console.log( arr.join( "," ) );
console.log( `exe time : ${new Date().getTime() - start}` );