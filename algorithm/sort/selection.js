var start = new Date().getTime();

var arr = [ 8,3,4,1,5,6,2,7 ];

var min = 0;
var idx = 0;
var sorted = [];
var min_idx = 0;

for ( var k=0; k<arr.length; k++ ) {

    min = arr[ k ];
    min_idx = i;
    for ( var i=k+1; i<arr.length; i++ ) {
    
        if ( arr[ i ] < min ) {
            min = arr[ i ];
            min_idx = i;
        }
    }

    var tmp = arr.splice( min_idx, 1 );
    var left = arr.splice( 0, idx );
    var right = arr;
    idx++;
    
    arr = [];
    arr = arr.concat( left, tmp, right );
}


console.log( arr.join( "," ) );
console.log( `exe time : ${new Date().getTime() - start}` );